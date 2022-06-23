import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import {
    View, Text, TextInput, Button, Image, StyleSheet, Pressable
} from "react-native";
import 'react-native-gesture-handler'
import { SafeAreaView } from "react-native-safe-area-context";
import { Divider } from "react-native-paper";
import request from '../assets/request.png';
export default function ActiveService({ navigation }) {

    return (
        <>
            <SafeAreaView>
                <View style={styles.container}>
                    <Text style={{
                        marginTop: '6%',
                        marginLeft: '3%',
                        justifyContent: 'center',
                        fontSize: 14,
                        fontWeight: '400'
                    }}>Active Services (2)</Text>

                    <View style={{
                        display: 'flex',
                        flexDirection: 'row',
                        left: '2%',
                        top: '4%',
                        marginBottom: 20
                    }}>
                        <Image
                            source={request} />
                        <View style={{
                            display: 'flex',
                            flexDirection: 'column',
                            left: '10%'
                        }}>
                            <Text style={{
                            }}>House Kitchen</Text>
                            <Text style={{
                            }}>Breakfast 07:00 am to 12:00pm</Text>
                            <Text style={{
                            }}>Paratha + Omelette + Nehari etc</Text>
                            <Pressable style={{
                                backgroundColor: '#FFC700',
                                borderRadius: 36,
                                width: '40%'
                            }}>
                                <Text style={{
                                    textAlign: 'center'
                                }}>
                                    Edit Menu
                                </Text>
                            </Pressable>
                        </View>
                    </View>

                    <View style={{
                        display: 'flex',
                        flexDirection: 'row',
                        left: '2%',
                        top: '4%',
                    }}>
                        <Image
                            source={request} />
                        <View style={{
                            display: 'flex',
                            flexDirection: 'column',
                            left: '10%'
                        }}>
                            <Text style={{
                            }}>House Kitchen</Text>
                            <Text style={{
                            }}>Breakfast 07:00 am to 12:00pm</Text>
                            <Text style={{
                            }}>Paratha + Omelette + Nehari etc</Text>
                            <Pressable style={{
                                backgroundColor: '#FFC700',
                                borderRadius: 36,
                                width: '40%'
                            }}>
                                <Text style={{
                                    textAlign: 'center'
                                }}>
                                    Edit Menu
                                </Text>
                            </Pressable>
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
