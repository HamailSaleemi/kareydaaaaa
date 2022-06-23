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
import nehari from '../assets/nehari.png';
import biryani from '../assets/biryani.png';


export default function OrderList({ navigation }) {

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
                    }}>Orders (2)</Text>

                    <View style={{
                        display: 'flex',
                        flexDirection: 'row',
                        left: '2%',
                        top: '4%',
                        marginBottom: 20
                    }}>
                        <Image
                            source={nehari} />
                        <View style={{
                            display: 'flex',
                            flexDirection: 'column',
                            left: '10%'
                        }}>
                            <Text style={{
                            }}>BB Biryani</Text>
                            <Text style={{
                            }}>Address # 744 Johar Town Lahore</Text>
                            <Pressable style={{
                                backgroundColor: '#3DEB00',
                                borderRadius: 36,
                                width: '40%'
                            }}>
                                <Text style={{
                                    textAlign: 'center',
                                    color: '#FFFFFF'
                                }}>
                                    Completed
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
                            source={biryani} />
                        <View style={{
                            display: 'flex',
                            flexDirection: 'column',
                            left: '10%'
                        }}>
                            <Text style={{
                            }}>Nehari</Text>
                            <Text style={{
                            }}>Address #54 Township Lahore</Text>
                            <Text style={{
                            }}>Time: 45 minutes</Text>
                            <Pressable style={{
                                backgroundColor: '#FD0000',
                                borderRadius: 36,
                                width: '40%'
                            }}>
                                <Text style={{
                                    textAlign: 'center',
                                    color: '#FFFFFF'
                                }}>
                                    Pending
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
