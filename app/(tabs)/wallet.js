import {
    StyleSheet,
    Text,
    View,
    Platform,
    TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView
} from 'react-native';
import Viajar from "../../components/wallet/viajar";
import Reclamar from "../../components/wallet/reclamar";


export default function Wallet() {

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className={"flex-1"}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false} >
                <View style={styles.max} >
                    <View style={styles.fieldSet}>
                        <Text style={styles.legend}>Viaje</Text>
                        <Viajar></Viajar>
                    </View>
                    <View style={styles.fieldSet}>
                        <Text style={styles.legend}>Reclamar</Text>
                        <Reclamar></Reclamar>
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
    }
});
