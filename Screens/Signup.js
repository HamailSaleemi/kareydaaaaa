import React, { useState } from "react";
import {
    View, Text, TextInput, Button, Image, StyleSheet, Pressable, Alert
} from "react-native";
import 'react-native-gesture-handler'
import { SafeAreaView } from "react-native-safe-area-context";
// import server from '../Component/server';
import server from '../Component/server'
import curve from '../assets/curve.png';
export default function Signup({ navigation }) {
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let [firstName, setFirstName] = useState('');
    let [lastName, setLastName] = useState('');

    const signUp = async () => {
        const params = {
            email: email,
            firstName: firstName, //...?
            lastName: lastName,
            password: password
        }
        console.log(params);
        // console.log(server);
        const response = await server.post('User/register', params);
        if (response.status == 200) {
            console.log("if is running with okey status")
            navigation.navigate("Login");
        }
        else {
            alert("Sign up Failed")
        }
        console.log("response is ", response);
    }




    return (
        <>
            <SafeAreaView>
                <View
                    style={{
                        backgroundColor: "#FFFFFF",
                        height: '100%'
                    }}
                >
                    <View style={{ display: 'flex' }}>
                        <Image
                            source={curve}
                        />

                        <Text style={{ fontSize: 40, fontWeight: "bold", position: 'absolute', alignSelf: 'center', justifyContent: 'center', marginTop: '20%' }}>
                            Register now
                        </Text>
                        <Text style={{ color: '#FFFFFF', marginTop: '35%', position: 'absolute', alignSelf: 'center' }}>Create your new account</Text>

                        <View style={{
                            width: '90%',
                            alignSelf: 'center'
                        }}>
                            <TextInput
                                style={styles.input}
                                onChangeText={setFirstName}
                                // value={firstName}
                                placeholder="First Name"
                            />
                            <TextInput
                                style={styles.input}
                                onChangeText={setLastName}
                                // value={lastName}
                                placeholder="Last Name"
                            />

                            <TextInput
                                style={styles.input}
                                onChangeText={setEmail}
                                // value={email}
                                placeholder="Email"
                            />
                            <TextInput
                                style={styles.input}
                                onChangeText={setPassword}
                                // value={password}
                                placeholder="Password"
                            />
                            <Pressable style={{
                                width: '90%',
                                alignSelf: 'center',
                                marginTop: '10%',
                                backgroundColor: '#FBC62C',
                                height: 42,
                                borderRadius: 25
                            }}
                                onPress={signUp}>
                                <Text
                                    style={{
                                        color: '#000000', alignSelf: 'center', marginTop: '3%', fontSize: 16, fontWeight: 'bold'
                                    }}
                                >Signup </Text>
                            </Pressable>
                            <Text style={{
                                margin: 10,
                                alignSelf: 'center'
                            }}
                            >Already have an account?
                            </Text>
                            <Pressable onPress={() => { navigation.navigate('Login') }}><Text>Login</Text></Pressable>

                        </View>
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
        borderRadius: 25
    },
});
