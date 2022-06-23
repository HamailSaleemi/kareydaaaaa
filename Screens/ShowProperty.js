
import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import {
    View, Text, TextInput, Button, Image, StyleSheet, Pressable, Linking,
} from "react-native";
import 'react-native-gesture-handler'
import { SafeAreaView } from "react-native-safe-area-context";
import server from "../Component/server";
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function ShowProperty({ navigation, route }) {
    const { property } = route.params;
    const [mobile_no, setNumber] = useState('');
    const requestHouse = async () => {
        let id = await AsyncStorage.getItem('userId');
        const _id = JSON.parse(id);
        const data = {
            houseId: property._id,
            userId: _id
        }
        const response = await server.post('RequestHouse/', data)
        if(response.status === 200){
            alert('Request sent');
        }
    }


    return (
        <>
            <SafeAreaView>
                <View style={styles.container}>


                    <View style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                        width: '80%',
                        alignSelf: 'center',
                        top: '10%'
                    }}>

                        <Image
                            source={{ uri: 'https://media.istockphoto.com/photos/modern-restaurant-interior-design-picture-id1211547141?k=20&m=1211547141&s=612x612&w=0&h=KiZX3NBZVCK4MlSh4BJ8hZNSJcTIMbNSSV2yusw2NmM=' }}
                            style={{
                                height: 150, width: 200
                            }} />
                        <View style={{
                            display: 'flex',
                            flexDirection: 'column',
                            marginLeft: 30
                        }}>
                            <Text style={{ marginLeft: '20%' }} >{property?.name}</Text>
                            <Text style={{ marginLeft: '20%', marginTop: 20 }}>{property?.address}</Text>
                            <View style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                top: '10%',
                            }}>
                                {/* <TextInput
                                    value={mobile_no}
                                    onChangeText={mobile_no => setNumber({ mobile_no })}
                                    placeholder={'Enter Mobile to Send WhatsApp Message'}
                                    style={styles.input1}
                                    keyboardType={'numeric'}
                                /> */}
                                <Pressable
                                    style={{
                                        backgroundColor: 'black',
                                        borderRadius: 36,
                                        borderColor: 'white',
                                        borderWidth: 2,
                                        top: '200%',
                                        right: '50%'
                                    }}
                                    onPress={requestHouse}>
                                    <Text
                                        style={{ color: 'white', textAlign: 'center', padding: 15 }}
                                    // onPress={() => {
                                    //     Linking.openURL(
                                    //         'http://api.whatsapp.com/send?phone=923324650989'
                                    //     );
                                    // }}>
                                    >
                                        Send Request
                                    </Text>
                                </Pressable>
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
        margin: 20
    },
    container: {
        backgroundColor: 'white',
        height: '100%',
    },
    input1: {
        alignSelf: 'center',
        width: 250,
        height: 44,
        padding: 10,
        right: '20%',
        top: '120%',
        backgroundColor: '#D3D3D3',

    }
});
