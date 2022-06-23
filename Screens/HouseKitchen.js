import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import {
    View, Text, TextInput, Button, Image, StyleSheet, Pressable
} from "react-native";
import 'react-native-gesture-handler'
import { SafeAreaView } from "react-native-safe-area-context";
import mess from '../assets/mess.png';
import mess1 from '../assets/mess1.png';
import mess2 from '../assets/mess2.png';
import mess3 from '../assets/mess3.png';
import Navbar from "../Component/Navbar";
import navTop from '../assets/navTop.png';
import navBar from '../assets/navBar.png';
import map from '../assets/map.png';
import { Divider } from "react-native-paper";
import request from '../assets/request.png';
export default function HouseKitchen({ navigation }) {

    return (
        <>
            <SafeAreaView>
                <View style={styles.container}>
                    <Text style={{
                        textAlign: 'center',
                        margin: 10,
                        fontSize: 18,
                        fontWeight: '400'
                    }}>House Kitchen</Text>
                    <View style={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}>
                        <View style={{
                            display: 'flex',
                            flexDirection: 'column',
                            height: 65,
                            width: 365,
                            margin: 20,
                            justifyContent: 'center',
                            backgroundColor: '#F8F8F8',
                            alignSelf: 'center'
                        }}>
                            <View style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                width: 241,
                                padding: 10

                            }}>
                                <Text>Breakfast</Text>
                                <Text>Omlette</Text>
                            </View>
                            <View style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                width: 241,
                                paddingLeft: 10

                            }}>
                                <Text>Dinner</Text>
                                <Text>Kofta</Text>
                            </View>
                        </View>

                        <View style={{
                            display: 'flex',
                            flexDirection: 'column',
                            height: 65,
                            width: 365,
                            margin: 20,
                            justifyContent: 'center',
                            backgroundColor: '#F8F8F8',
                            alignSelf: 'center'
                        }}>
                            <View style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                width: 241,
                                padding: 10

                            }}>
                                <Text>Breakfast</Text>
                                <Text>Omlette</Text>
                            </View>
                            <View style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                width: 241,
                                paddingLeft: 10

                            }}>
                                <Text>Dinner</Text>
                                <Text>Kofta</Text>
                            </View>
                        </View>
                        <View style={{
                            display: 'flex',
                            flexDirection: 'column',
                            height: 65,
                            width: 365,
                            margin: 20,
                            justifyContent: 'center',
                            backgroundColor: '#F8F8F8',
                            alignSelf: 'center'
                        }}>
                            <View style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                width: 241,
                                padding: 10

                            }}>
                                <Text>Breakfast</Text>
                                <Text>Omlette</Text>
                            </View>
                            <View style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                width: 241,
                                paddingLeft: 10

                            }}>
                                <Text>Dinner</Text>
                                <Text>Kofta</Text>
                            </View>
                        </View>
                        <View style={{
                            display: 'flex',
                            flexDirection: 'column',
                            height: 65,
                            width: 365,
                            margin: 20,
                            justifyContent: 'center',
                            backgroundColor: '#F8F8F8',
                            alignSelf: 'center'
                        }}>
                            <View style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                width: 241,
                                padding: 10

                            }}>
                                <Text>Breakfast</Text>
                                <Text>Omlette</Text>
                            </View>
                            <View style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                width: 241,
                                paddingLeft: 10

                            }}>
                                <Text>Dinner</Text>
                                <Text>Kofta</Text>
                            </View>
                        </View>
                        <View style={{
                            display: 'flex',
                            flexDirection: 'column',
                            height: 65,
                            width: 365,
                            margin: 20,
                            justifyContent: 'center',
                            backgroundColor: '#F8F8F8',
                            alignSelf: 'center'
                        }}>
                            <View style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                width: 241,
                                padding: 10

                            }}>
                                <Text>Breakfast</Text>
                                <Text>Omlette</Text>
                            </View>
                            <View style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                width: 241,
                                paddingLeft: 10

                            }}>
                                <Text>Dinner</Text>
                                <Text>Kofta</Text>
                            </View>
                        </View>
                        <View style={{
                            display: 'flex',
                            flexDirection: 'column',
                            height: 65,
                            width: 365,
                            margin: 20,
                            justifyContent: 'center',
                            backgroundColor: '#F8F8F8',
                            alignSelf: 'center'
                        }}>
                            <View style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                width: 241,
                                padding: 10

                            }}>
                                <Text>Breakfast</Text>
                                <Text>Omlette</Text>
                            </View>
                            <View style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                width: 241,
                                paddingLeft: 10

                            }}>
                                <Text>Dinner</Text>
                                <Text>Kofta</Text>
                            </View>
                        </View>

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
        margin: 10
    },
    container: {
        backgroundColor: 'white',
        height: '100%',
    }
});
