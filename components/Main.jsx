import { StatusBar } from 'expo-status-bar';
import React, {useEffect, setE} from 'react';
import {StyleSheet, Text, View, Pressable, PermissionsAndroid, Platform} from 'react-native';
import {useSafeAreaInsets} from "react-native-safe-area-context";
import MapView from 'react-native-maps';
import * as Location from "expo-location";



export function Main() {
    const insets = useSafeAreaInsets();

    useEffect(() => {
        (async () => {
            await Location.requestForegroundPermissionsAsync();
        })();
    });
    return (
        <View
            style={{paddingTop: insets.top, paddingBottom: insets.bottom}}>

            <View style={styles.container}>


            </View>


        </View>
    );
}


const styles = StyleSheet.create({
    button: {
        padding: 3,
        borderRadius: 5
    },
    map: {
        flex: 1,
        width: '100%',
        height: '95%',
    },
});
