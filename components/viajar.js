import {StyleSheet, Text, View, Pressable, PermissionsAndroid, Platform, TextInput, Keyboard} from 'react-native';
import {ChallengeIcon} from "./icons";
import React, {useState} from "react";


export default function Viajar() {
    const [coins, setCoins] = useState(0);
    return (

        <View>
            <View className={"flex-row p-3 gap-3 align-middle"}>
                <TextInput
                    className={"bg-gray-800 p-2 rounded-lg h-5/6 self-center min-w-2/8 text-white"}
                    style={styles.minutos}
                    placeholderTextColor="#fff"
                    selectionColor={"#fff"}
                    inputMode={"numeric"}
                    placeholder={"Minutos"}
                    autoFocus={true}
                    onChangeText={(text) =>{
                        if (text > 600) {
                            setCoins(600);
                        } else {
                            setCoins(text);
                        }}}
                    value={coins.toString() === '0' ? "" : coins.toString()}
                />
                <Text className={"self-center text-white"}>X 15 </Text>
                <ChallengeIcon color = "#fff" className={"self-center"}/>
                <Text className={"self-center text-white"}> =</Text>
                <Text className={"self-center text-white"}>{coins * 15}</Text>



            </View>
            <Pressable
                onPress={() => {
                    Keyboard.dismiss();
                    setCoins(0);
                }}
                style={({pressed}) => [
                    {
                        backgroundColor: pressed
                            ? 'rgb(0,102,225)'
                            : 'rgb(31 41 55)',
                        padding: 12,
                        borderRadius : 8,
                        margin: 8
                    },
                ]}>

                <Text className={"text-white"}>Confirmar</Text>
            </Pressable>
        </View>
    );
}
const styles = StyleSheet.create({
    minutos: {
        minWidth: '20%',
    }
});
