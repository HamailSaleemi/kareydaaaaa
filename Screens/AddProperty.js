import React, { useState, useEffect } from "react";
import {
    View, Text, TextInput, Button, Image, StyleSheet, Pressable
} from "react-native";
import 'react-native-gesture-handler'
import { SafeAreaView } from "react-native-safe-area-context";
import server from "../Component/server";
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function AddProperty({ navigation }) {
    const [userData, setUserData] = useState([]);
    const [providor, setProvidor] = useState([]);


    // const gooo = async()=>{
    //     await AsyncStorage.removeItem("userId");
    //     navigation.navigate('Signup')
    // }

    const getUser = async () => {

        let id = await AsyncStorage.getItem('userId');
        let _id = JSON.parse(id);
        const data = {
            id: _id
        }
        const response = await server.post('User/GetById', data)
        console.log(response.data);

        setUserData(response.data);
        if(!(response.data.providor === [])){
            setProvidor(response.data.providor)
            // console.log(providor);
            
        }
    }

    useEffect(() => {
        getUser();

    }, []);


    const becomeProvider = async () => {
        let id = await AsyncStorage.getItem('userId');
        let _id = JSON.parse(id);
        const data = {
            user: _id
        }
        const response = await server.post('MessProviderRequest/', data);
        console.log(response.data);
        alert(response.data);
    }

    const becomePropertyProvider = async () => {
        let id = await AsyncStorage.getItem('userId');
        let _id = JSON.parse(id);
        const data = {
            user: _id
        }
        const response = await server.post('PropertyProviderRequest/', data);
        console.log(response.data);
        alert(response.data);
    }
    return (
        <>
            <SafeAreaView>
                <View style={styles.container}>


                    {providor.includes('Mess') ?
                        (

                            <View>
                                <Pressable style={{
                                    backgroundColor: '#E5E5E5',
                                    borderRadius: 36,
                                    width: '60%',
                                    alignSelf: 'center',
                                    top: '5%'
                                }}
                                    onPress={() => { navigation.navigate('Kitchen') }}
                                >
                                    <Text style={{
                                        color: '#575757',
                                        textAlign: 'center',
                                        padding: 10
                                    }}>
                                        Go To Kitchen
                                    </Text>

                                </Pressable>
                            </View>

                        ) : (
                            <View>
                                <Pressable style={{
                                    backgroundColor: '#E5E5E5',
                                    borderRadius: 36,
                                    width: '60%',
                                    alignSelf: 'center',
                                    top: '5%'
                                }}
                                    onPress={becomeProvider}
                                >
                                    <Text style={{
                                        color: '#575757',
                                        textAlign: 'center',
                                        padding: 10
                                    }}>
                                        Become Mess Providor
                                    </Text>

                                </Pressable>
                            </View>)}



                    {providor.includes('Property') ? (
                        <View style={{
                            margin: 20
                        }}>
                            <Pressable style={{
                                backgroundColor: '#E5E5E5',
                                borderRadius: 36,
                                width: '60%',
                                alignSelf: 'center',
                                top: '5%'
                            }}
                                onPress={()=>{navigation.navigate('AddingProperty')}}
                            >
                                <Text style={{
                                    color: '#575757',
                                    textAlign: 'center',
                                    padding: 10
                                }}>
                                    Go to Property
                                </Text>

                            </Pressable>
                        </View>

                    ) : (
                        <View style={{
                            margin: 20
                        }}>
                            <Pressable style={{
                                backgroundColor: '#E5E5E5',
                                borderRadius: 36,
                                width: '60%',
                                alignSelf: 'center',
                                top: '5%'
                            }}
                                onPress={
                                    becomePropertyProvider
                                }
                            >
                                <Text style={{
                                    color: '#575757',
                                    textAlign: 'center',
                                    padding: 10
                                }}>
                                    Become Property Provider

                                </Text>

                            </Pressable>
                        </View>)}
                        {/* <Pressable style={{
                                    backgroundColor: '#E5E5E5',
                                    borderRadius: 36,
                                    width: '60%',
                                    alignSelf: 'center',
                                    top: '5%'
                                }}
                                    onPress={gooo}
                                >
                                    <Text style={{
                                        color: '#575757',
                                        textAlign: 'center',
                                        padding: 10
                                    }}>
                                        Become Mess Providor
                                    </Text>

                                </Pressable> */}

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
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
    }
});
