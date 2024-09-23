import {
    StyleSheet,
    Text,
    View,
    Pressable,
    PermissionsAndroid,
    Platform,
    StatusBar,
    Keyboard,
    KeyboardAvoidingView, TouchableWithoutFeedback
} from 'react-native';
import React, {useState} from "react";
import {Picker} from "@react-native-picker/picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import UserSelect from "../../components/config/userSelect";
import IPenter from "../../components/config/IPenter";
import DebugAddCoins from "../../components/config/debugAddCoins";
import InitPlayers from "../../components/config/initPlayers";


export default function Config() {



    const [selectedValue, setSelectedValue] = useState("angeles");

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            className={"flex-1"}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false} >
                    <View style={styles.max} >
                        <StatusBar style="light"/>
                        <View style={styles.fieldSet}>
                            <Text style={styles.legend}>Usuario</Text>
                            <UserSelect/>
                        </View>
                        <View style={styles.fieldSet}>
                            <Text style={styles.legend}>IP</Text>
                            <IPenter/>
                        </View>
                        <View style={styles.debugFieldSet} >
                            <Text style={styles.debugLegend}>DebugMonedas</Text>
                            <DebugAddCoins/>
                        </View>
                        <View style={styles.debugFieldSet} >
                            <Text style={styles.debugLegend}>INICIARJUGADORES</Text>
                            <InitPlayers/>
                        </View>
                    </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}
const styles = StyleSheet.create({
    container: {
        width: '97%',
        height: '20%',
        marginTop: 10,
        borderRadius: 10,
    },
    fieldSet:{
        margin: 10,
        paddingHorizontal: 10,
        paddingBottom: 10,
        paddingTop: 10,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#4d5056'
    },
    legend:{
        position: 'absolute',
        color: '#fff',
        top: -10,
        left: 10,
        fontWeight: 'bold',
        backgroundColor: '#2b2d30'
    },
    max: {
        width: '100%',
        height: '100%',
        backgroundColor: '#2b2d30',
    },
    debugFieldSet:{
        margin: 10,
        paddingHorizontal: 10,
        paddingBottom: 10,
        paddingTop: 10,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#800e0e'
    },
    debugLegend:{
        position: 'absolute',
        color: '#800e0e',
        top: -10,
        left: 10,
        fontWeight: 'bold',
        backgroundColor: '#2b2d30'
    }
});