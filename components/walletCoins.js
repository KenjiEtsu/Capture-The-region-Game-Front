import {WalletIcon} from "./icons";
import {Text, View} from "react-native";

export default function walletCoins() {
    return (
        <View className={"mr-3"}>
            <WalletIcon color = "#fff"/>
            <Text style={{color: '#fff'}}>100</Text>
        </View>
    );
}