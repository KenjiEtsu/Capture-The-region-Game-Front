import {StyleSheet, Text, View, Pressable, PermissionsAndroid, Platform, StatusBar} from 'react-native';
import React from "react";


export default function Challenge() {
    return (
        <View className={"mt-24"}>
            <StatusBar style="light"/>
            <Text>Challenge</Text>
        </View>
    );
}