import React, { useState } from "react";
// import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import Favourite from "./Screens/Favourite";
import {
  createDrawerNavigator,
  DrawerContent,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider as PaperProvider, DefaultTheme } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { Image, Pressable } from "react-native";
import Signup from "./Screens/Signup";
import Login from "./Screens/Login";
import Home from "./Screens/Home";
import HomePage from "./Screens/HomePage";
import RequestScreen from "./Screens/RequestScreen";
import AddProperty from "./Screens/AddProperty";
import AddingProperty from "./Screens/AddingProperty";
import AddServices from "./Screens/AddServices";
import AllProperty from "./Screens/AllProperty";
import ShowProperty from "./Screens/ShowProperty";
import ActiveService from "./Screens/ActiveServices";
import MyKitchen from "./Screens/MyKitchen";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import EditKitchen from "./Screens/EditKitchen";
import { useNavigation } from "@react-navigation/native";
import EditProfile from "./Screens/EditProfile";
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const navigation = useNavigation();
const Tab = createMaterialBottomTabNavigator();

// const SignOut = async () => {
//   console.log("clicked!!!!!");
//   await AsyncStorage.removeItem("userId");
//   navigation.navigate("Login");
// };


export default function Routes() {
  const [userToken, setUserToken] = useState()
  const onReady = async () => {
    try {
      const user_id = await AsyncStorage.getItem("userId");
    //   if (user_id) {
        const id = await JSON.parse(user_id);
        setUserToken(id);
      
    //   console.log(userToken);
    } catch (e) {
      console.error("Error:", e);
    }
  };

  return (
    <NavigationContainer onReady={onReady}>
      {userToken === null ? <AuthNavigator /> : <DrawerNavigator />}
      {/* <AuthNavigator/> */}
    </NavigationContainer>
  );
}
