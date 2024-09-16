import {StyleSheet, Text, View, Pressable, PermissionsAndroid, Platform, StatusBar} from 'react-native';
import React from "react";


export default function Config() {
    return (
        <View >
            <StatusBar style="light"/>
            <Text className={"text-lg"}>Challenge</Text>
        </View>
    );
}