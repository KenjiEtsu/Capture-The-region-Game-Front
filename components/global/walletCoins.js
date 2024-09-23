import {WalletIcon} from "./icons";
import {Text, View, StyleSheet} from "react-native";
import {useEffect, useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Location from "expo-location";

export default function walletCoins() {

    const [selectedValue, setSelectedValue] = useState("1000");
    const [ip, setIP] = useState("kenjietsu.com");
    const [playerValue, setPlayerValue] = useState("angeles");

    useEffect(() => {
        (async () => {
            const storedIP = await AsyncStorage.getItem('ip');
            const storedUser = await AsyncStorage.getItem('user');

            if (storedIP !== null) {
                setIP(storedIP);
            }

            if (storedUser !== null) {
                setPlayerValue(storedUser);
            }

            const response = await fetch(`https://${storedIP || ip}:443/api/player/${storedUser || playerValue}`);
            const data = await response.json();
            setSelectedValue(data['coins']);
            await AsyncStorage.setItem('coins', data['coins'].toString());
        })();
    }, []);

    return (
        <View className={"mr-3 items-center"}>
            <WalletIcon color = "#fff"/>
            <Text style={{color: '#fff'}}> {selectedValue} </Text>
        </View>
    );
}
