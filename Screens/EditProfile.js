import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  StyleSheet,
  Pressable,
} from "react-native";
import "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
// import setting from '../assets/setting.png';
// import edit from '../assets/edit.png';
import { ScrollView } from "react-native-gesture-handler";
import CheckBox from "@react-native-community/checkbox";
import { useNavigation } from "@react-navigation/native";
import server from "../Component/server";
import back from "../assets/back.png";
import setting from "../assets/setting.png";
import edit from "../assets/edit.png";
// import Checkbox from 'expo-checkbox';
export default function EditProfile() {
  let [email, setEmail] = useState("");
  let [DOB, setDOB] = useState("");
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [phoneNumber, setPhoneNumber] = useState("");
  let [CNIC, setCNIC] = useState("");
  const [isChecked, setChecked] = useState(false);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [toggleCheckBox1, setToggleCheckBox1] = useState(false);
  const [toggleCheckBox2, setToggleCheckBox2] = useState(false);
  const [toggleCheckBox3, setToggleCheckBox3] = useState(false);
  const [toggleCheckBox4, setToggleCheckBox4] = useState(false);

  const editProfile = async () => {
    const data = {
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      dob: DOB,
      email: email,
    };
    console.log(data);
    const response = await server.post("User/editProfile", data);
    console.log(response);
  };
  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <View
            style={{
              backgroundColor: "#FFFFFF",
              height: "100%",
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "90%",
                alignSelf: "center",
                marginTop: "5%",
              }}
            >
              <Image source={back} />
              <Image source={setting} />
            </View>
            <Image
              style={{
                alignSelf: "center",
              }}
              source={edit}
            />
            <View
              style={{
                width: "90%",
                alignSelf: "center",
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "90%",
                }}
              >
                <TextInput
                  style={styles.inputRow}
                  onChangeText={setFirstName}
                  value={firstName}
                  placeholder="First Name"
                />
                <TextInput
                  style={styles.inputRow}
                  onChangeText={setLastName}
                  value={lastName}
                  placeholder="Last Name"
                />
              </View>
              <TextInput
                style={styles.input}
                onChangeText={setEmail}
                value={email}
                placeholder="Email Address"
              />
              <TextInput
                style={styles.input}
                onChangeText={setPhoneNumber}
                value={phoneNumber}
                placeholder="Phone Number"
              />
              <TextInput
                style={styles.input}
                onChangeText={setCNIC}
                value={CNIC}
                placeholder="CNIC"
              />

              <TextInput
                style={styles.input}
                onChangeText={setDOB}
                value={DOB}
                placeholder="DD/MM/YYYY"
              />

              <View style={styles.section}>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    left: "15%",
                  }}
                >
                  <CheckBox
                    disabled={false}
                    value={toggleCheckBox}
                    onValueChange={(newValue) => setToggleCheckBox(newValue)}
                  />
                  <Text
                    style={{
                      marginLeft: 10,
                      top: "6%",
                    }}
                  >
                    Male
                  </Text>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    left: "30%",
                  }}
                >
                  <CheckBox
                    disabled={false}
                    value={toggleCheckBox1}
                    onValueChange={(newValue) => setToggleCheckBox1(newValue)}
                  />
                  <Text
                    style={{
                      marginLeft: 10,
                      top: "6%",
                    }}
                  >
                    Female
                  </Text>
                </View>
              </View>

              <View style={styles.section}>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    left: "15%",
                  }}
                >
                  <CheckBox
                    disabled={false}
                    value={toggleCheckBox2}
                    onValueChange={(newValue) => setToggleCheckBox2(newValue)}
                  />
                  <Text
                    style={{
                      marginLeft: 10,
                      top: "6%",
                    }}
                  >
                    Dependant
                  </Text>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    left: "20%",
                  }}
                >
                  <CheckBox
                    disabled={false}
                    value={toggleCheckBox3}
                    onValueChange={(newValue) => setToggleCheckBox3(newValue)}
                  />
                  <Text
                    style={{
                      marginLeft: 10,
                      top: "6%",
                    }}
                  >
                    Independant
                  </Text>
                </View>
              </View>
              {/* 
                            <View >
                                <CheckBox
                                    disabled={false}
                                    value={toggleCheckBox}
                                    onValueChange={(newValue) => setToggleCheckBox(newValue)}
                                />
                                <Text>Dependant</Text>
                                <CheckBox
                                    disabled={false}
                                    value={toggleCheckBox}
                                    onValueChange={(newValue) => setToggleCheckBox(newValue)}
                                />
                                <Text>Independant</Text>
                            </View> */}
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  top: "1%",
                  width: "90%",
                }}
              >
                <CheckBox
                  disabled={false}
                  value={toggleCheckBox4}
                  onValueChange={(newValue) => setToggleCheckBox4(newValue)}
                />
                <Text
                  style={{
                    alignSelf: "center",
                  }}
                >
                  By signing in, you agree to our terms and privacy policy
                </Text>
              </View>
            </View>
            <Pressable
              style={{
                width: "90%",
                alignSelf: "center",
                backgroundColor: "#FBC62C",
                height: 42,
                borderRadius: 25,
                margin: 10,
              }}
              onPress={editProfile}
            >
              <Text
                style={{
                  color: "#000000",
                  alignSelf: "center",
                  marginTop: "3%",
                  fontSize: 16,
                  fontWeight: "bold",
                }}
              >
                Save{" "}
              </Text>
              {/* <Button style={{}} onPress={() =>SignOut()}>SignOut</Button> */}
            </Pressable>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    padding: 10,
    backgroundColor: "#E5E5E5",
    borderRadius: 25,
  },
  inputRow: {
    height: 40,
    margin: 14,
    padding: 10,
    backgroundColor: "#E5E5E5",
    borderRadius: 25,
    width: "45%",
  },
  section: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
  },
  paragraph: {
    fontSize: 15,
  },
  checkbox: {
    margin: 8,
  },
});
