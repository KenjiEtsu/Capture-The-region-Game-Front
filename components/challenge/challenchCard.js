import {
    StyleSheet,
    Text,
    View,
    Pressable,
    PermissionsAndroid,
    Platform,
    StatusBar,
    TextInput,
    ScrollView, Alert
} from 'react-native';
import React, {useEffect, useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {getLocation} from "../wallet/reclamar";




export default function ChallenchCard({challenge}) {

    const [maxCoins, setMaxCoins] = useState("000");
    const [coins, setCoins] = useState(0);
    const [challengeJson, setChallengeJson] = useState({});
    const [location, setLocation] = useState('Cargando ubicación...');
    const [ip, setIp] = useState("kenjietsu.com");
    const [playerValue, setPlayerValue] = useState("angeles");

    const[currentChallenge, setChallenge] = useState(-1);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const coinsValue = await AsyncStorage.getItem('coins');
                if (coinsValue !== null) {
                    setMaxCoins(coinsValue);
                }

                const ipValue = await AsyncStorage.getItem('ip');
                if (ipValue !== null) {
                    setIp(ipValue);
                }

                const userValue = await AsyncStorage.getItem('user');
                if (userValue !== null) {
                    setPlayerValue(userValue);
                }
                const currentCh = await AsyncStorage.getItem('currentChallenge');
                if (currentCh !== null) {
                    setChallenge(currentCh);
                }

                const loc = await getLocation();
                setLocation(loc[1]);

                const response = await fetch(`https://${ip}:443/api/challenge/${loc[1]}?challengen=${challenge}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json; charset=UTF-8',
                    },
                });
                const data = await response.json();
                setChallengeJson(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [location]);

    return (
        <View className={"bg-black text-white"}
        style={{borderRadius:20, margin:10}}>
            <View className={""}>
                <Text className={"text-white font-extrabold text-lg m-3"}>{challengeJson["title"]}</Text>
                <View className={"flex-row gap-3 ml-1"}>
                    <Text className={"text-white m-3"}>ID: {challengeJson["id"]}</Text>
                    <Text className={"text-red-400 ml-auto"}>Multiplicador: {challengeJson["multiplier"]}x</Text>
                </View>
                <Text className={"text-white m-3"}>{challengeJson["description"]}</Text>
                <TextInput
                    className={"bg-gray-800 p-2 rounded-lg h-5/6 self-center min-w-2/8 text-white"}
                    style={{
                        minWidth: '20%',
                        height: 35,
                        width: " 88%"
                    }}
                    placeholderTextColor="#fff"
                    selectionColor={"#fff"}
                    inputMode={"numeric"}
                    placeholder={"Coins"}
                    autoFocus={true}
                    onChangeText={(text) =>{

                            setCoins(text);
                        }}
                    value={coins.toString() === '0' ? "" : coins.toString()}

                />

                    <Pressable
                        className={"bg-green-500 p-2 rounded-lg h-5/6 self-center min-w-2/8 text-white mt-2"}
                        style={{
                            minWidth: '20%',
                            height: 35,
                            width: " 88%"
                        }}
                        onPress={() => {

                            //PUT https://kenjietsu.com/api/challenge/apuesta/anoia?player_id=angeles&coins=10&challenge_id=1
                            fetch(`https://${ip}:443/api/challenge/apuesta/${location}?player_id=${playerValue}&coins=${coins}&challenge_id=${challenge}`, {
                                method: 'PUT',
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                            })
                                .then((response) => response.json())
                                .then((json) => {
                                    // {"message": "Already betted"}
                                    if (json["message"] === "Already betted") {
                                        alert("Ya has apostado en este reto");
                                        return;
                                    } if (json["message"] === "Challenge already completeds") {
                                        alert("Alguien ya ha completado este reto");
                                        return;
                                    }
                                    console.log(json);
                                    AsyncStorage.setItem('coins', (maxCoins - coins).toString());
                                    setMaxCoins((maxCoins - coins).toString());
                                    alert("Apostado correctamente");
                                })
                                .catch((error) => {
                                    alert("Error al apostar, tal vez ya has apostado en algún reto");
                                });

                        }}>
                        <Text>Apostar</Text>
                    </Pressable>


                        <Pressable
                            className={"bg-green-500 p-2 rounded-lg h-5/6 self-center min-w-2/8 text-white mt-2 mb-6"}
                            style={{
                                minWidth: '20%',
                                height: 35,
                                width: " 88%"
                            }}
                            onPress={() => {
                                Alert.alert(
                                    "Vas a finalizar el reto",
                                    "¿Lo has completado correctamente?",

                                    [
                                        {
                                            text: "No :(",
                                            onPress: () => (
                                               //PUT https://kenjietsu.com/api/challenge/complete/anoia?challenge_id=1&player_id=angeles&success=false
                                                fetch(`https://${ip}:443/api/challenge/complete/${location}?player_id=${playerValue}&challenge_id=${challenge}&success=false`, {
                                                    method: 'PUT',
                                                    headers: {
                                                        'Content-Type': 'application/json',
                                                    },
                                                })
                                                    .then((response) => response.json())
                                                    .then((json) => {

                                                        if (json["message"] === "Challenge already completed") {
                                                            alert("Alguien ya ha cumplido este reto");
                                                            return;
                                                        }
                                                        if (json["message"] === "No bet found") {
                                                            alert("No has apostado en este reto");
                                                            return;
                                                        }
j
                                                        console.log(json);
                                                        setCoins(0);
                                                    })
                                                    .catch((error) => {
                                                        alert("Error al finalizar el reto");
                                                    })

                                            ),
                                            style: "cancel"
                                        },
                                        {
                                            text: "Si :)", onPress: () => {
                                                //PUT https://kenjietsu.com/api/challenge/complete/anoia?player_id=angeles&challenge_id=1
                                                fetch(`https://${ip}:443/api/challenge/complete/${location}?player_id=${playerValue}&challenge_id=${challenge}&success=true`, {
                                                    method: 'PUT',
                                                    headers: {
                                                        'Content-Type': 'application/json',
                                                    },
                                                })
                                                    .then((response) => response.json())
                                                    .then((json) => {
                                                        console.log(json);
                                                        AsyncStorage.setItem('coins', (maxCoins + coins * challengeJson["multiplier"]).toString());
                                                        setMaxCoins(maxCoins + coins * challengeJson["multiplier"]);
                                                        setCoins(0);
                                                        setChallenge(-1);
                                                    })
                                                    .catch((error) => {
                                                        alert("Error al finalizar el reto");
                                                    });
                                            }
                                        }
                                    ]
                                )
                            }}>
                            <Text>Finalizar</Text>
                        </Pressable>

            </View>
        </View>
    );
}
