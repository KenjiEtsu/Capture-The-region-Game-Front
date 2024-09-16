import {StatusBar} from 'expo-status-bar';
import React, {useEffect} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from "react-native-safe-area-context";
import MapView, {Geojson} from 'react-native-maps';
import * as Location from "expo-location";


export default function Index() {
    const insets = useSafeAreaInsets();

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


    useEffect(() => {
        (async () => {
            await Location.requestForegroundPermissionsAsync();
        })();
    });
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
                        longitude: 2.1395109,
                        latitudeDelta: 1.5,
                        longitudeDelta: 1.5,
                    }}
                    showsBuildings={true}


                >

                    <Geojson geojson={anoia}
                    fillColor={'rgba(255, 0, 0, 0.5)'}
                             tappable={true}
                             onPress={() => {
                                 alert('Anoia');
                                 console.log('Anoia');
                                }}
                    />
                    <Geojson geojson={llobregat}
                    fillColor={'rgba(0, 255, 0, 0.5)'}
                    />
                    <Geojson geojson={bages}
                    fillColor={'rgba(0, 0, 255, 0.5)'}
                    />
                    <Geojson geojson={barcelones}
                    fillColor={'rgba(255, 255, 0, 0.5)'}
                    />
                    <Geojson geojson={garraf}
                    fillColor={'rgba(255, 0, 255, 0.5)'}
                    />
                    <Geojson geojson={maresme}
                    fillColor={'rgba(0, 255, 255, 0.5)'}
                    />
                    <Geojson geojson={oriental}
                    fillColor={'rgba(255, 255, 255, 0.5)'}
                    />
                    <Geojson geojson={occidental}
                    fillColor={'rgba(0, 0, 0, 0.5)'}
                    />
                    <Geojson geojson={osona}
                    fillColor={'rgba(255, 0, 0, 0.5)'}
                    />
                    <Geojson geojson={penedes}
                    fillColor={'rgba(37,93,152,0.5)'}
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
