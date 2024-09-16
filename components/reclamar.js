import {StyleSheet, Text, View, Pressable, PermissionsAndroid, Platform, TextInput, Keyboard} from 'react-native';
import {ChallengeIcon} from "./icons";
import React, {useEffect, useState} from "react";
import GeoJsonGeometriesLookup from 'geojson-geometries-lookup';
import * as Location from 'expo-location';
import anoia from "./comarques/Anoia.json";
import llobregat from "./comarques/Llobregat.json";
import bages from "./comarques/Bages.json";
import barcelones from "./comarques/Barcelones.json";
import garraf from "./comarques/Garraf.json";
import maresme from "./comarques/Maresme.json";
import oriental from "./comarques/Oriental.json";
import occidental from "./comarques/Occidental.json";
import osona from "./comarques/Osona.json";
import penedes from "./comarques/Penedes.json";

export default function Reclamar() {
    const [location, setLocation] = useState('Cargando ubicación...');

    useEffect(() => {
        async function fetchLocation() {
            const loc = await getLocation();
            setLocation(loc);
        }
        fetchLocation();
    }, []);
    return (
        <View className={"p-3"}>
            <View className={"flex-row gap-3 mb-3"}>
                <Text className={"text-white"}>Estás a punto de reclamar: </Text>
                <Text className={"text-amber-200 font-bold"}>{location}</Text>

        </View>
        <View className={"flex-row align-middle"}>
            <Text className={"self-center text-white"}>Cuanto deseas invertir?        </Text>

            <TextInput
                className={"bg-gray-800 p-2 rounded-lg h-5/6 self-center min-w-2/8 text-white"}
                style={{
                    minWidth: '20%',
                    height: 35,
                    maxWidth: '20%'
            }}
                placeholderTextColor="#fff"
                selectionColor={"#fff"}
                inputMode={"numeric"}
                placeholder={"Coins"}
                autoFocus={true}

            />

            <ChallengeIcon style={{height: 35, width: 35}} color={"#fff"} className={"self-center ml-3"}/>

        </View>
            <Pressable
                onPress={() => {
                    Keyboard.dismiss();
                }}
                style={({pressed}) => [
                    {
                        backgroundColor: pressed
                            ? 'rgb(0,102,225)'
                            : 'rgb(31 41 55)',
                        padding: 12,
                        borderRadius : 8,
                        marginTop: 8
                    },
                ]}>

                <Text className={"text-white"}>Confirmar</Text>
            </Pressable>
        </View>
    );
}
async function getLocation() {
    // create list
    const geojsonList = [anoia, llobregat, bages, barcelones, garraf, maresme, oriental, occidental, osona, penedes];

    const coords = await Location.getCurrentPositionAsync();

    if (!coords) {
        return 'No se ha podido obtener la ubicación';
    }
    const point = {
        type: 'Point',
        coordinates: [coords.coords.longitude, coords.coords.latitude]
    };
    for (let i = 0; i < geojsonList.length; i++) {
        const gjLookup = new GeoJsonGeometriesLookup(geojsonList[i]);
        const comarca = gjLookup.hasContainers(point);
        if (comarca) {
            return geojsonList[i].features[0].properties.nom_comar;
        }
    }
    return 'No se ha podido encontrar la comarca';




}
