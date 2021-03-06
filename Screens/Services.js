import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import {
    View, Text, TextInput, Button, Image, StyleSheet, Pressable
} from "react-native";
import 'react-native-gesture-handler'
import { SafeAreaView } from "react-native-safe-area-context";
import home4 from '../assets/home4.png';
import home1 from '../assets/home1.png';
import home2 from '../assets/home2.png';
import home from '../assets/home.png';
import Navbar from "../Component/Navbar";
import navTop from '../assets/navTop.png';
import navBar from '../assets/navBar.png';
import map from '../assets/map.png';
import noService from '../assets/noService.png';
import { Divider } from "react-native-paper";
export default function Services({ navigation }) {

    return (
        <>
            <SafeAreaView>
                <View style={styles.container}>

                    {/* <Image
                            source={navBar} />

                    <Divider /> */}
                    <View style={{
                        alignSelf: 'center',
                        justifyContent: 'center'
                    }}>
                        <Image
                            style={{
                                position: 'absolute',
                                alignSelf: 'center'
                            }}
                            source={noService} />
                        <Text style={{
                            textAlign: 'center',
                            justifyContent: 'center',
                            marginTop: '30%',
                            color: '#717171',
                            fontSize: 18,
                            fontWeight: '400'
                        }}>No Current Services Selected</Text>
                    </View>

                </View>
            </SafeAreaView>
        </>

    );
}
const styles = StyleSheet.create({
    input: {
        width: '90%',
        height: 40,
        margin: 12,
        padding: 10,
        backgroundColor: '#E5E5E5',
        borderRadius: 25,
    },
    navbar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20
    },
    container: {
        backgroundColor: 'white',
        height: '100%',
    }
});
