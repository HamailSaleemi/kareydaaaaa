import { NavigationContainer } from "@react-navigation/native";
import React, { useState, useEffect, useDebugValue } from "react";
import {
    View, Text, TextInput, Button, Image, StyleSheet, Pressable
} from "react-native";
import 'react-native-gesture-handler'
import { SafeAreaView } from "react-native-safe-area-context";
import server from "../Component/server";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function MyKitchen({ navigation }) {
    const [kitchen, setKitchen] = useState([]);

    const getKitchen = async () => {
        let id = await AsyncStorage.getItem('userId');
        const _id = JSON.parse(id);
        const data = {
            user: _id
        }
        // console.log(da)
        const response = await server.post('Kitchen/UserKitchen', data);
        console.log(response.data)
        setKitchen(response.data)
    }
    useEffect(() => {
        // CheckIfLocationEnabled();
        // alert(JSON.stringify(cart))
        getKitchen();

    }, []);


    return (
        <>
            <SafeAreaView>
                <View style={styles.container}>
                    <Text style={{
                        marginTop: '6%',
                        marginLeft: '3%',
                        justifyContent: 'center',
                        fontSize: 18,
                        fontWeight: '800',
                        textAlign: 'center'
                    }}>My Kitchen </Text>
                    <View style={{ flex: 1 }}>
                        {kitchen.map((data, index) => (
                            <View key={index}>
                                <View style={{
                                    marginBottom: 20
                                }}>
                                    <View style={{ alignSelf: 'center', margin: 15 }}
                                    >
                                        <Pressable onPress={() => { navigation.navigate('PendingRequestScreen', { kitchenId: data._id }) }}>
                                            <Image
                                                source={{ uri: 'https://media.istockphoto.com/photos/modern-restaurant-interior-design-picture-id1211547141?k=20&m=1211547141&s=612x612&w=0&h=KiZX3NBZVCK4MlSh4BJ8hZNSJcTIMbNSSV2yusw2NmM=' }}
                                                style={{ width: 300, height: 150 }}
                                            />
                                        </Pressable>
                                    </View>
                                    <View style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        left: '10%',
                                        alignSelf: 'center'
                                    }}>
                                        <Text style={{
                                        }}>{data.name}</Text>
                                        <Text style={{
                                        }}>{data.address}</Text>
                                    </View>
                                </View>
                            </View>
                        ))}
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
