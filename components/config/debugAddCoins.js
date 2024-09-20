import {
    StyleSheet,
    Text,
    View,
    Pressable,
    PermissionsAndroid,
    Platform,
    StatusBar,
    TextInput,
    Keyboard
} from 'react-native';
import React, {useEffect, useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";




export default function DebugAddCoins() {

    const [selectedValue, setSelectedValue] = useState("");
    const [ip, setIp] = useState("kenjietsu.com");
    const [playerValue, setPlayerValue] = useState("angeles");

    useEffect(() => {
        (async () => {
            AsyncStorage.getItem('ip').then((value) => {
                if (value !== null) {
                    setIp(value);
                }
            });
            AsyncStorage.getItem('user').then((value) => {
                if (value !== null) {
                    setPlayerValue(value);
                }
            });
        })();
    }, []);

    return (
        <View >
            <TextInput
                style={{ height: 40, color: 'white' }}
                placeholder="Coins"
                placeholderTextColor={"#fff"}
                onChangeText={text => {
                    setSelectedValue(text);
                }}
                value={selectedValue}

            />
            <Pressable
                onPress={() => {
                    Keyboard.dismiss();
                    // PUT https://kenjietsu.com/api/coins/angeles?coins=10

                    fetch(`https://${ip}:443/api/coins/${playerValue}?coins=${selectedValue}`, {
                        method: 'PUT',
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            coins: selectedValue
                        })
                    })
                        .then(response => response.json())
                        .then(data => {
                            console.log(data);
                        });


                }}
                style={({pressed}) => [
                    {
                        backgroundColor: pressed
                            ? 'rgb(0,102,225)'
                            : 'rgb(31 41 55)',
                        padding: 12,
                        borderRadius : 8,
                        marginTop: 8
                    },
                ]}>

                <Text className={"text-white"}>Confirmar</Text>
            </Pressable>
        </View>
    );
}
