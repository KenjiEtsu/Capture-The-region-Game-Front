import {StatusBar} from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import MapView, {Geojson} from 'react-native-maps';
import * as Location from "expo-location";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function Index() {

    // get json data from ../../components/cmq.json
    const anoia = require('../../components/comarques/Anoia.json');
    const llobregat = require('../../components/comarques/Llobregat.json');
    const bages = require('../../components/comarques/Bages.json');
    const barcelones = require('../../components/comarques/Barcelones.json');
    const garraf = require('../../components/comarques/Garraf.json');
    const maresme = require('../../components/comarques/Maresme.json');
    const oriental = require('../../components/comarques/Oriental.json');
    const occidental = require('../../components/comarques/Occidental.json');
    const osona = require('../../components/comarques/Osona.json');
    const penedes = require('../../components/comarques/Penedes.json');

    const [ip, setIP] = useState("kenjietsu.com");


    const [comarquesValues, setComarquesValues] = useState(undefined);

    useEffect(() => {
        (async () => {
            await Location.requestForegroundPermissionsAsync();
            AsyncStorage.getItem('ip').then((value) => {
                if (value !== null) {
                    setIP(value);
                }
            });
            console.log(ip);
            fetch(`https://${ip}:443/api/locations`)
                .then(response => response.json())
                .then(data => {
                    setComarquesValues(data);
                });
        })();

    }, []);




    return (

        <View>
            <StatusBar style="light"/>
            <View style={styles.container}>
                <MapView

                    showsUserLocation={true}
                    showsMyLocationButton={true}
                    style={styles.map}
                    region={{
                        latitude: 41.4308826,
                        longitude: 2.0605109,
                        latitudeDelta: 1.5,
                        longitudeDelta: 1.5,
                    }}
                    showsBuildings={true}


                >

                    <Geojson geojson={anoia}
                             fillColor={getBestStake('anoia', comarquesValues)}
                             tappable={true}
                             onPress={() => {
                                 alertDisplay(comarquesValues, 'anoia');
                             }}
                    />
                    <Geojson geojson={llobregat}
                             fillColor={ getBestStake('llobregat', comarquesValues)}
                             tappable={true}
                             onPress={() => {
                                 alertDisplay(comarquesValues, "llobregat");
                             }}
                    />
                    <Geojson geojson={bages}
                             fillColor={ getBestStake('bages', comarquesValues)}
                             tappable={true}
                             onPress={() => {
                                 alertDisplay(comarquesValues, 'bages');
                             }}
                    />
                    <Geojson geojson={barcelones}
                             fillColor={ getBestStake('barcelones', comarquesValues)}
                             tappable={true}
                             onPress={() => {
                                 alertDisplay(comarquesValues, 'barcelones');
                             }}
                    />
                    <Geojson geojson={garraf}
                             fillColor={ getBestStake('garraf', comarquesValues)}
                             tappable={true}
                             onPress={() => {
                                 alertDisplay(comarquesValues, 'garraf');
                             }}
                    />
                    <Geojson geojson={maresme}
                             fillColor={ getBestStake('maresme', comarquesValues)}
                             tappable={true}
                             onPress={() => {
                                 alertDisplay(comarquesValues, 'maresme');
                             }}
                    />
                    <Geojson geojson={oriental}
                             fillColor={ getBestStake('oriental', comarquesValues)}
                             tappable={true}
                             onPress={() => {
                                 alertDisplay(comarquesValues, 'oriental');
                             }}
                    />
                    <Geojson geojson={occidental}
                             fillColor={ getBestStake('occidental', comarquesValues)}
                             tappable={true}
                             onPress={() => {
                                 alertDisplay(comarquesValues, 'occidental');
                             }}
                    />
                    <Geojson geojson={osona}
                             fillColor={ getBestStake('osona', comarquesValues)}
                             tappable={true}
                             onPress={() => {
                                 alertDisplay(comarquesValues, 'osona');
                             }}
                    />
                    <Geojson geojson={penedes}
                             fillColor={ getBestStake('penedes', comarquesValues)}
                             tappable={true}
                             onPress={() => {
                                 alertDisplay(comarquesValues, 'penedes');
                             }}
                    />

                </MapView>


            </View>


        </View>
    );
}


const styles = StyleSheet.create({
    button: {
        padding: 1,
        borderRadius: 5
    },
    map: {
        width: '100%',
        height: '100%',
    },
});

function alertDisplay(comarquesValues, comarca) {
   //fancy string {"angeles": 0, "kenji": 0, "ethan": 0} order it by highest value
    // Alert.alert(
    //             comarca.charAt(0).toUpperCase() + comarca.slice(1),
    //             `Angeles: ${comarquesValues[comarca]['stake']["angeles"]}\nKenji: ${comarquesValues[comarca]['stake']["kenji"]}\nEthan: ${comarquesValues[comarca]['stake']["ethan"]}`,
    //             [
    //                 {
    //                     text: "OK",
    //                     onPress: () => console.log("OK Pressed"),
    //                     style: "cancel"
    //                 }
    //             ]
    //         )
    Alert.alert(
        comarca.charAt(0).toUpperCase() + comarca.slice(1),
        `Angeles: ${comarquesValues[comarca]['stake']["angeles"]}\nKenji: ${comarquesValues[comarca]['stake']["kenji"]}\nEthan: ${comarquesValues[comarca]['stake']["ethan"]}`,
        [
            {
                text: "OK",
                style: "cancel"
            }
        ]
    )




}

const getBestStake = function getBestStake(comarca, comarquesValues) {



    if (comarquesValues === undefined) {
        return 'rgba(255, 255, 255, 0.5)';
    }

    if (comarquesValues[comarca]['stake']["angeles"] > comarquesValues[comarca]['stake']["kenji"] && comarquesValues[comarca]['stake']["angeles"] > comarquesValues[comarca]['stake']["ethan"]) {
        return  'rgba(179, 115, 206, 0.6)';
    } else if (comarquesValues[comarca]['stake']["kenji"] > comarquesValues[comarca]['stake']["angeles"] && comarquesValues[comarca]['stake']["kenji"] > comarquesValues[comarca]['stake']["ethan"]) {
        return  'rgba(0, 255, 0, 0.5)';
    } else if (comarquesValues[comarca]['stake']["ethan"] > comarquesValues[comarca]['stake']["kenji"] && comarquesValues[comarca]['stake']["ethan"] > comarquesValues[comarca]['stake']["angeles"]) {
        return  'rgba(230, 126, 34, 0.6)';
    } else {
        return 'rgba(255, 255, 255, 0.5)';
    }


}
