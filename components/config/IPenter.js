import {StyleSheet, Text, View, Pressable, PermissionsAndroid, Platform, StatusBar, TextInput} from 'react-native';
import React, {useEffect, useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";




export default function IPenter() {

    const [selectedValue, setSelectedValue] = useState("kenjietsu.com");

    useEffect(() => {
        AsyncStorage.getItem('ip').then((value) => {
            if (value !== null) {
                setSelectedValue(value);
            }
        });
    }, []);

    return (
        <View >
            <TextInput
                style={{ height: 40, color: 'white' }}
                onChangeText={text => {
                    setSelectedValue(text);
                    AsyncStorage.setItem('ip', text);
                }}
                value={selectedValue}

            />
        </View>
    );
}
