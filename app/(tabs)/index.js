import {StatusBar} from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import MapView, {Geojson, Marker} from 'react-native-maps';
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
                    <Marker coordinate={{latitude: 41.524884467067764, longitude: 1.7529653283679962}} title={"Igualada"} description={"Igualada"}/>
                    <Geojson geojson={llobregat}
                             fillColor={ getBestStake('llobregat', comarquesValues)}
                             tappable={true}
                             onPress={() => {
                                 alertDisplay(comarquesValues, "llobregat");
                             }}
                    />

                    <Marker coordinate={{latitude: 41.37881066355839, longitude: 2.054133985165153}} title={"Barcelona"} description={"Barcelona"}/>

                    <Marker coordinate={{latitude: 41.280685447637104, longitude: 1.9734372839780048}} title={"Barcelona"} description={"Barcelona"}/>

                    <Geojson geojson={bages}
                             fillColor={ getBestStake('bages', comarquesValues)}
                             tappable={true}
                             onPress={() => {
                                 alertDisplay(comarquesValues, 'bages');
                             }}
                    />

                    <Marker coordinate={{latitude: 41.729105995434246, longitude:1.8259552172208837}} title={"Manresa"} description={"Manresa"}/>
                    <Geojson geojson={barcelones}
                             fillColor={ getBestStake('barcelones', comarquesValues)}
                             tappable={true}
                             onPress={() => {
                                 alertDisplay(comarquesValues, 'barcelones');
                             }}
                    />
                    <Marker coordinate={{latitude: 41.386957330547375, longitude: 2.170025506461956}} title={"Barcelona"} description={"Barcelona"}/>
                    <Geojson geojson={garraf}
                             fillColor={ getBestStake('garraf', comarquesValues)}
                             tappable={true}
                             onPress={() => {
                                 alertDisplay(comarquesValues, 'garraf');
                             }}
                    />

                    <Marker coordinate={{latitude: 41.24147556030713, longitude: 1.809778742824711}} title={"Sitges"} description={"Sitges"}/>

                    <Geojson geojson={maresme}
                             fillColor={ getBestStake('maresme', comarquesValues)}
                             tappable={true}
                             onPress={() => {
                                 alertDisplay(comarquesValues, 'maresme');
                             }}
                    />

                    <Marker coordinate={{latitude: 41.53843430443378, longitude:2.441970723120755}} title={"Mataro"} description={"Mataro"}/>
                    <Geojson geojson={oriental}
                             fillColor={ getBestStake('oriental', comarquesValues)}
                             tappable={true}
                             onPress={() => {
                                 alertDisplay(comarquesValues, 'oriental');
                             }}
                    />

                    <Marker coordinate={{latitude: 41.605102852700114, longitude:2.2810579575383843}} title={"Mataro"} description={"Mataro"}/>

                <Marker coordinate={{latitude: 41.47908909945846, longitude: 1.9240940387386822}} title={"Mataro"} description={"Mataro"}/>
                    <Geojson geojson={occidental}
                             fillColor={ getBestStake('occidental', comarquesValues)}
                             tappable={true}
                             onPress={() => {
                                 alertDisplay(comarquesValues, 'occidental');
                             }}
                    />
                    <Marker coordinate={{latitude: 41.54748763200484, longitude:2.108576998940837}} title={"Barcelona"} description={"Barcelona"}/>
                    <Marker coordinate={{latitude: 41.56887330650507, longitude:2.016075136742438}} title={"Barcelona"} description={"Barcelona"}/>
                    <Geojson geojson={osona}
                             fillColor={ getBestStake('osona', comarquesValues)}
                             tappable={true}
                             onPress={() => {
                                 alertDisplay(comarquesValues, 'osona');
                             }}
                    />

                    <Marker coordinate={{latitude: 41.930339090627484, longitude:2.253991254876481}} title={"Vic"} description={"Vic"}/>
                    <Geojson geojson={penedes}
                             fillColor={ getBestStake('penedes', comarquesValues)}
                             tappable={true}
                             onPress={() => {
                                 alertDisplay(comarquesValues, 'penedes');
                             }}
                    />

                    <Marker coordinate={{latitude: 41.34434048179613, longitude: 1.6993671058706814 }} title={"Barcelona"} description={"Barcelona"}/>



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
