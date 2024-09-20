import {
    StyleSheet,
    Text,
    View,
    Pressable,
    PermissionsAndroid,
    Platform,
    StatusBar,
    TextInput,
    ScrollView
} from 'react-native';
import React, {useEffect, useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";




export default function ChallenchCard() {

    const [selectedValue, setSelectedValue] = useState("000");

    useEffect(() => {
        AsyncStorage.getItem('coins').then((value) => {
            if (value !== null) {
                setSelectedValue(value);
            }
        });
    }, []);

    return (
        <View className={"bg-black text-white"}
        style={{ height:"45%", width: "50%", borderRadius:20, margin:10}}>
            <View className={"flex-1"}>
            <Text className={"text-white m-3"}>Comete una manzana</Text>
                <ScrollView className={"flex-grow"}>
                    <Text className={"text-white m-3"}></Text>
                    <Text className={"text-white m-3"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunct Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunct</Text>
                </ScrollView>
            </View>
        </View>
    );
}
