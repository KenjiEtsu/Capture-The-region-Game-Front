import {Slot, Stack} from 'expo-router';
import {StatusBar, StyleSheet, Text, View} from "react-native";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {Header} from "react-native/Libraries/NewAppScreen";
import React from "react";

export default function Layout() {
    return (





                <Stack
                screenOptions={
                    {
                        headerShown: false,
                        contentStyle: {
                            backgroundColor: '#735454',
                        },

                    }
                }
                />



    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
    }
});
