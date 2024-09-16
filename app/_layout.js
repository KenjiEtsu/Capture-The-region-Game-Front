import {Slot, Stack} from 'expo-router';
import {StatusBar, StyleSheet, Text, View} from "react-native";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {Header} from "react-native/Libraries/NewAppScreen";
import React from "react";

export default function Layout() {
    return (


            <View style={styles.container}>


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

            </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});
