import {Slot, Tabs} from "expo-router";
import {StatusBar, StyleSheet, Text, View} from "react-native";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {ChallengeIcon, ConfigIcon, MapIcon, WalletIcon} from "../../components/global/icons";
import walletCoins from "../../components/global/walletCoins";


export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={
                {
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: '#000',
                        borderBottomWidth: 0,
                        height: 92,

                    },
                    headerTintColor: '#fff',
                    headerTitle: "JetLag:Bcn2",
                    headerRight: () => walletCoins(),

                    tabBarStyle: {
                        backgroundColor: '#000',
                        borderTopWidth: 0,
                    },
                    tabBarActiveTintColor: '#fff',
                    tabBarInactiveTintColor: '#999'
            } }
        >

            <Tabs.Screen
                name="index"
                options={{
                    title: 'Mapa',
                    tabBarIcon: ({color}) => <MapIcon color = {color}/>,
                }}
                />
            <Tabs.Screen
                name="wallet"
                options={{
                    title: 'Wallet',
                    tabBarIcon: ({color}) => <WalletIcon color = {color}/>,
                }}
            />
            <Tabs.Screen
                name="challenge"
                options={{
                    title: 'Retos',
                    tabBarIcon: ({color}) => <ChallengeIcon color = {color}/>,
                }}
            />
            <Tabs.Screen
                name="config"
                options={{
                    title: 'Config',
                    tabBarIcon: ({color}) => <ConfigIcon color = {color}/>,
                }}
            />
        </Tabs>

    )

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    }
});
