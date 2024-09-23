import {StyleSheet, Text, View, Pressable, PermissionsAndroid, Platform, TextInput, Keyboard} from 'react-native';
import {ChallengeIcon} from "../global/icons";
import React, {useEffect, useState} from "react";
import asyncStorage from "@react-native-async-storage/async-storage/src/AsyncStorage";


export default function Viajar() {
    const [coins, setCoins] = useState(0);
    const [maxCoins, setMaxCoins] = useState(0);
    const [ip, setIP] = useState("kenjietsu.com");
    const [playerValue, setPlayerValue] = useState("angeles");

    useEffect(() => {
        (async () => {

            asyncStorage.getItem('coins').then((value) => {
                if (value !== null) {
                    setMaxCoins(value);
                }
            });

            asyncStorage.getItem('ip').then((value) => {
                if (value !== null) {
                    setIP(value);
                }

            });
            asyncStorage.getItem('user').then((value) => {
                if (value !== null) {
                    setPlayerValue(value);
                }

            });
        })();
        }, []);
    return (

        <View>
            <View className={"flex-row p-3 gap-3 align-middle"}>
                <TextInput
                    className={"bg-gray-800 p-2 rounded-lg h-5/6 self-center min-w-2/8 text-white"}
                    style={styles.minutos}
                    placeholderTextColor="#fff"
                    selectionColor={"#fff"}
                    inputMode={"numeric"}
                    placeholder={"Minutos"}
                    autoFocus={true}
                    onChangeText={(text) =>{
                        if (text*15 > maxCoins) {
                            setCoins(Math.floor(maxCoins/15));
                        } else {
                            setCoins(text);
                        }}}
                    value={coins.toString() === '0' ? "" : coins.toString()}
                />
                <Text className={"self-center text-white"}>X 15 </Text>
                <ChallengeIcon color = "#fff" className={"self-center"}/>
                <Text className={"self-center text-white"}> =</Text>
                <Text className={"self-center text-white"}>{coins * 15}</Text>



            </View>
            <Pressable
                onPress={() => {
                    Keyboard.dismiss();
                    setCoins(0);

                    // PUT https://kenjietsu.com/api/coins/angeles?coins=10

                    fetch(`https://${ip}:443/api/coins/${playerValue}?coins=${-coins*15}`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            coins: coins,
                        }),
                    })
                        .then(response => response.json())
                        .then(data => {
                            asyncStorage.setItem('coins', (maxCoins - coins).toString());
                            setMaxCoins(-coins*15);
                        })
                        .catch((error) => {
                            console.error('Error:', error);
                        });


                }}
                style={({pressed}) => [
                    {
                        backgroundColor: pressed
                            ? 'rgb(0,102,225)'
                            : 'rgb(31 41 55)',
                        padding: 12,
                        borderRadius : 8,
                        margin: 8
                    },
                ]}>

                <Text className={"text-white"}>Confirmar</Text>
            </Pressable>
        </View>
    );
}
const styles = StyleSheet.create({
    minutos: {
        minWidth: '20%',
    }
});
