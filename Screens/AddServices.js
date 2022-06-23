import React, { useState, useEffect } from "react";
import {
    View, Text, TextInput, Button, Image, StyleSheet, Pressable
} from "react-native";
import 'react-native-gesture-handler'
import { SafeAreaView } from "react-native-safe-area-context";
import edit from '../assets/edit.png';
import server from '../Component/server'
import * as Location from 'expo-location';
import AsyncStorage from "@react-native-async-storage/async-storage";
import MyKitchen from "./MyKitchen";
// import Checkbox from 'expo-checkbox';
export default function AddServices({ params }) {
    const [userId,setUserId] = useState();
    const [locationServiceEnabled, setLocationServiceEnabled] = React.useState(false);
    const [address, setAddress] = React.useState([]);

    let [kitchen, setKitchen] = useState('');
    let [service, setService] = useState('');
    let [charges, setCharges] = useState('');
    let [dish, setDish] = useState('');
    const [isChecked, setChecked] = useState(false);

    const addKitchen = async () => {
        CheckIfLocationEnabled();
        let id = await AsyncStorage.getItem('userId');
        const _id = JSON.parse(id);
       setUserId(_id);
               
    }
    const CheckIfLocationEnabled = async () => {
        let enabled = await Location.hasServicesEnabledAsync();

        if (!enabled) {
            setLocationServiceEnabled(enabled);
            GetCurrentLocation();

        } else {
            setLocationServiceEnabled(enabled);
            GetCurrentLocation();
        }
    };


    // create the handler method

    const GetCurrentLocation = async (values) => {
        let { status } = await Location.requestForegroundPermissionsAsync();

        if (status !== 'granted') {
            alert(
                'Permission not granted',
                'Allow the app to use location service.',
                [{ text: 'OK' }],
                { cancelable: false }
            );
        }

        let { coords } = await Location.getCurrentPositionAsync();

        if (coords) {
            const { latitude, longitude } = coords;
            let response = await Location.reverseGeocodeAsync({
                latitude,
                longitude
            });

            console.log(response)
            // const dis = getDistance(
            //     { latitude: latitude, longitude: longitude },
            //     { latitude: 51.4663848, longitude: -0.3759137, }
            // );
            // console.log(`Distance\n\n${dis} Meter\nOR\n${dis / 1000} KM`);
            // if (dis > 4828.03) {
            //     alert("We are Sorry, but we do not deliver at your location");
            //     navigation.navigate("Home");
            // }


            // console.log(response);
            for (let item of response) {
                const location = `${item.district}, ${item.city}`;

                setAddress(location);
                const data = {
                    name: kitchen,
                    address: address,
                };
                // console.log("DATA:", data);

                let values = {
                    user: userId,
                    longitude: longitude,
                    lattitude: latitude,
                    name: kitchen,
                    address: location
                }
                console.log(values);
                const response = await server.post('Kitchen/', values);
                if(response.status === 200)
{
    alert('Kitchen added Successfully')
}
                // if (address.length > 0) {
                // navigation.navigate('paypall', { item: data });


                // navigation.navigate("paypall", {
                //   totalPrice: totalPrice,
                //   data:data
                // }); 
                // };
            }
        }
    }

    useEffect(() => {
        // CheckIfLocationEnabled();
        // alert(JSON.stringify(cart))
        // GetUserId();

    }, []);


    return (
        <>
            <SafeAreaView>
        <View style={{
            flex:2,
            height:'100'
        }}>
        <MyKitchen/>
        </View>
                <View
                    style={{
                        backgroundColor: "#FFFFFF",
                        height: '100%'
                    }}
                >
                    <View style={{
                        top: '2%'
                    }}>
                        <Image
                            style={{
                                alignSelf: 'center'
                            }}
                            source={edit}
                        />
                    </View>
                    <View style={{
                        width: '90%',
                        alignSelf: 'center',
                        margin: 10
                    }}>

                        <TextInput
                            style={styles.input}
                            onChangeText={setKitchen}
                            value={kitchen}
                            placeholder="Enter Kitchen Name"
                        />
                        <TextInput
                            style={styles.input}
                            onChangeText={setService}
                            value={service}
                            placeholder="Enter Address"
                        />
                        {/* <TextInput
                            style={styles.input}
                            onChangeText={setCharges}
                            value={charges}
                            placeholder="Monthly Charges"
                        />
                        <View style={{
                            width: '40%'
                        }}>
                            <TextInput
                                style={styles.input}
                                onChangeText={setDish}
                                value={dish}
                                placeholder="+ Add Dish"
                            />
                        </View> */}

                    </View>
                    <View style={{
                        height: '20%',
                        backgroundColor: '#FFFFFF',
                        justifyContent: 'center'
                    }}>
                        <Pressable style={{
                            width: '40%',
                            alignSelf: 'center',
                            backgroundColor: '#FBC62C',
                            height: 42,
                            borderRadius: 25
                        }}
                            onPress={addKitchen}>
                            <Text
                                style={{
                                    color: '#000000', alignSelf: 'center', marginTop: '6%', fontSize: 16, fontWeight: 'bold', alignContent: 'center'
                                }}
                            >Save </Text>
                        </Pressable>
                    </View>
                </View>

            </SafeAreaView>
        </>

    );
}
const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        padding: 10,
        backgroundColor: '#E5E5E5',
        borderRadius: 25,
        paddingLeft: 20,
        color: '#575757'
    },
    inputRow: {
        height: 40,
        margin: 14,
        padding: 10,
        backgroundColor: '#E5E5E5',
        borderRadius: 25,
        width: '45%'
    },
    section: {
        width: '60%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center',
        margin: 10
    },
    paragraph: {
        fontSize: 15,
    },
    checkbox: {
        margin: 8,
    },
    navbar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20
    },
});
