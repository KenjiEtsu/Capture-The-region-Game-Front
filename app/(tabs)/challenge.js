import {
    StyleSheet,
    Text,
    View,
    Platform,
    StatusBar,
    TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView
} from 'react-native';
import React from "react";
import ChallenchCard from "../../components/challenge/challenchCard";

export default function Challenge() {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            className={""}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false} >
                <View style={styles.max} >
                    <StatusBar style="light"/>

                    <ChallenchCard></ChallenchCard>
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
    }
});