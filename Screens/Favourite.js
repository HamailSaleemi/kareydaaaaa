import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import {
    View, Text, TextInput, Button, Image, StyleSheet, Pressable
} from "react-native";
import 'react-native-gesture-handler'
import { SafeAreaView } from "react-native-safe-area-context";
import home4 from '../assets/home4.png';
import map from '../assets/map.png';
import { Divider } from "react-native-paper";
export default function Favourite({ navigation }) {

    return (
        <>
            <SafeAreaView>
                <View style={styles.container}>


                    <View style={{
                        marginLeft: '10%',
                        marginTop: '10%',
                        marginBottom: '10%'
                    }}>
                        <Text style={{
                            textAlign: 'left',
                            fontSize: 22
                        }}>
                            Favourites ----------------------
                        </Text>
                    </View>

                    <View style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        width: '90%',
                        alignSelf: 'center'
                    }}>
                        <Image
                            source={home4} />
                    </View>
                    <View style={{
                        display: 'flex',
                        flexDirection: 'row',
                        width: '80%',
                        alignSelf: 'center'
                    }}>
                        <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            width: '90%',
                            alignSelf: 'center',
                        }}>
                            <Image
                                style={{
                                    marginTop: '2%'
                                }}
                                source={map} />
                            <Text style={{
                                marginTop: '2%',
                                marginLeft: '2%'
                            }}>Eden Valley</Text>
                        </View>
                    </View>

                    <Text style={{
                        marginLeft: '10%'
                    }}>Rent: 1500 Rs</Text>
                    <Text style={{
                        marginLeft: '10%'
                    }}>15 Marla</Text>
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
