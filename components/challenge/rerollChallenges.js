import {
    Text,
    View,
    Pressable,
    TextInput,
    Keyboard
} from 'react-native';
import React, {useEffect, useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {getLocation} from "../wallet/reclamar";




export default function RerollChallenges() {

    const [selectedValue, setSelectedValue] = useState("");
    const [ip, setIp] = useState("kenjietsu.com");
    const [playerValue, setPlayerValue] = useState("angeles");

    useEffect(() => {
        const fetchData = async () => {
            try {

                const ipValue = await AsyncStorage.getItem('ip');
                if (ipValue !== null) {
                    setIp(ipValue);
                }

                const userValue = await AsyncStorage.getItem('user');
                if (userValue !== null) {
                    setPlayerValue(userValue);
                }

            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [ip]);

    return (
        <View >
            <Pressable
                onPress={() => {
                    Keyboard.dismiss();
                    // PUT https://kenjietsu.com/api/init/challenges
                    fetch(`https://${ip}:443/api/init/challenges`, {
                        method: 'PUT',
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            challenges: selectedValue
                        })
                    })
                        .then(response => response.json())
                        .then(data => {
                            console.log(data);
                        })
                        .catch((error) => {
                            console.error('Error:', error);
                        });



                }}
                style={({pressed}) => [
                    {
                        backgroundColor: pressed
                            ? 'rgb(255,0,0)'
                            : 'rgb(108,1,1)',
                        padding: 12,
                        borderRadius : 8,
                        marginTop: 8
                    },
                ]}>

                <Text className={"text-white"}>RECARGAR RETOS, SOLO CADA 2 HORAS </Text>
            </Pressable>
        </View>
    );
}
