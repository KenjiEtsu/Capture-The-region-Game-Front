import {
    StyleSheet,
    Text,
    View,
    Platform,
    StatusBar,
    TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, ScrollView, FlatList
} from 'react-native';
import React from "react";
import ChallenchCard from "../../components/challenge/challenchCard";
import RerollChallenges from "../../components/challenge/rerollChallenges";

export default function Challenge() {
    return (



            <View style={styles.max}>
            <ScrollView  className={""}
            style={styles.max}
            contentContainerStyle={{
                flex: 0
            }}
            keyboardDismissMode={"on-drag"}
            >
                <StatusBar style="light"/>
                <ChallenchCard challenge={0}/>
                <ChallenchCard challenge={1}/>
                <ChallenchCard challenge={2}/>
                <ChallenchCard challenge={3}/>
                <RerollChallenges/>
            </ScrollView>
                </View>


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