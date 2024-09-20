import {StyleSheet, Text, View, Pressable, PermissionsAndroid, Platform, StatusBar, TextInput} from 'react-native';
import React, {useEffect, useState} from "react";
import {Picker} from "@react-native-picker/picker";
import RNPickerSelect from 'react-native-picker-select';
import AsyncStorage from "@react-native-async-storage/async-storage";




export default function UserSelect() {

    const [selectedValue, setSelectedValue] = useState("angeles");

    useEffect(() => {
        AsyncStorage.getItem('user').then((value) => {
            if (value !== null) {
                setSelectedValue(value);
            }
        });
    }, []);

    return (
        <View >
            <RNPickerSelect onValueChange={value =>{
                if (value === null) {
                    value = "angeles";
                }
                setSelectedValue(value);
                AsyncStorage.setItem('user', value);
            }} items={[
                { label: 'Angeles', value: 'angeles' },
                { label: 'Ethan', value: 'ethan' },
                { label: 'Kenji', value: 'kenji' }
            ]} value={selectedValue} style={pickerSelectStyles} darkTheme={true}
            />


        </View>
    );
}


const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        color: 'white',
        paddingRight: 30,
    },
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        color: 'white',
        paddingRight: 30,
    }
});
