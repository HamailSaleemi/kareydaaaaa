import React, { useState, useEffect } from "react";
import {
    View, Text, TextInput, Image, StyleSheet, Pressable
} from "react-native";
import 'react-native-gesture-handler'
import SelectBox from 'react-native-multi-selectbox';
import Modal from "react-native-modal";
import SelectDropdown from "react-native-select-dropdown";
import { Button } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import back from '../assets/back.png';
import setting from '../assets/setting.png';
import edit from '../assets/edit.png';
import { ScrollView } from "react-native-gesture-handler";
import navTop from '../assets/navTop.png';
import navBar from '../assets/navBar.png';
import { Divider } from "react-native-paper";
import server from '../Component/server'
import * as Location from 'expo-location';
import ShowProperty from "./ShowProperty";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import Checkbox from 'expo-checkbox';
export default function EditKitchen({ route }) {
 const [selectedItems,setSelectedItems] = useState([]);
    const K_OPTIONS = [
        {
          item: "Monday",
          id: "1",
        },
        {
          item: " Tuesday",
          id: "2",
        },
        {
          item: "Wed",
          id: "3",
        },
        {
          item: "Thur",
          id: "4",
        },
        {
          item: "Fri",
          id: "5",
        },
        {
          item: "Sat",
          id: "6",
        },
        {
          item: "Sun",
          id: "7",
        }
      ];
      
      const onMultiChange = () => {
        console.log(selectedItems);
        return (item) => setSelectedItems((selectedItems, [item], "id"));
      };

    const [isModalVisible, setModalVisible] = useState(false);
    const countries = ["Lunch", "Dinner", "Breakfast"];
    const toggleModal = () => {
      setModalVisible(!isModalVisible);
    };
    const [service,setService] = useState(false)
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [time, setTime] = useState('')
    const [days, setDays] = useState('')
    const [availability, setAvalaible] = useState('')
    const [price, setPrice] = useState('')
    const [userKitchen,setUserKitchen] = useState('')
    const { kitchenId } = route.params;
    const ShowKitchen = async()=>{
        const data = {
                id:kitchenId
        }
        const response = await server.post('Kitchen/ById',data);
        setUserKitchen(response.data);
    }   
    const addDish = async () => {
        const data = {
            name: name,
            discription: description,
            time: time,
            days: days,
            avalability: availability,
            price: price,
            kitchenId: kitchenId
        }
        const response = await server.post('Dish/', data);
        if (response.status === 200) {
            alert("Dish added successfully");
        }
    }
   
    let [kitchen, setKitchen] = useState('');

                // console.log("DATA:", data);
                // let values = {
                //     user: '62a4b42431d35380350f0fcb',
                //     longitude: longitude,
                //     lattitude: latitude,
                //     name: kitchen,
                //     address: location
                // }
                // const response = await server.post('Kitchen/', values);

                // if (address.length > 0) {
                // navigation.navigate('paypall', { item: data });


                // navigation.navigate("paypall", {
                //   totalPrice: totalPrice,
                //   data:data
                // }); 
                // };


            

    useEffect(() => {
        // CheckIfLocationEnabled();
        // alert(JSON.stringify(cart))
        ShowKitchen();
        // console.log(params)

    }, []);


    return (
        <>
            <SafeAreaView>

                <View
                    style={{
                        backgroundColor: "#FFFFFF",
                        height: '100%'
                    }}
                >
                        <Image
                            style={{
                                alignSelf: 'center',
                                width: 90, height: 90,
                                borderRadius: 36

                            }}
                            source={{ uri: 'https://media.istockphoto.com/photos/modern-restaurant-interior-design-picture-id1211547141?k=20&m=1211547141&s=612x612&w=0&h=KiZX3NBZVCK4MlSh4BJ8hZNSJcTIMbNSSV2yusw2NmM=' }}
                        />
                
                        <TextInput
                            style={styles.input}
                            onChangeText={setKitchen}
                            value={kitchen}
                            placeholder={`${userKitchen.name}`}
                        />
                        <TextInput
                            style={styles.input}
                            onChangeText={setService}
                            value={service}
                            placeholder={`${userKitchen.address}`}
                        />
                        <TextInput
                            style={styles.input}
                            onChangeText={setPrice}
                            value={kitchen}
                            placeholder="Kitchen Charges"
                        />
 
        <Pressable 
        style={{
            width: '40%',
            alignSelf: 'center',
            backgroundColor: '#FBC62C',
            height: 42,
            borderRadius: 25
        }}
        onPress={toggleModal} >
<Text style={{
    textAlign:'center',
    fontWeight:'bold',
    top:'15%'
}}>
+ Add Dish
</Text>
<Modal isVisible={isModalVisible}>
  
        <View style={{
                        width: '68%',
                        alignSelf: 'center',
                        marginTop: 50
                    }}>

                        <TextInput
                            style={styles.input}
                            onChangeText={setName}
                            value={name}
                            placeholder="Dish Name"
                        />
                        <TextInput
                            style={styles.input}
                            onChangeText={setDescription}
                            value={description}
                            placeholder="Description"
                        />

                        <TextInput
                            style={styles.input}
                            onChangeText={setDays}
                            value={days}
                            placeholder="Days"
                        />
                        <TextInput
                            style={styles.input}
                            onChangeText={setAvalaible}
                            value={availability}
                            placeholder="Enter Availability"
                        />

                        <TextInput
                            style={styles.input}
                            onChangeText={setPrice}
                            value={price}
                            placeholder="Enter Price "
                        />
                        
<SelectDropdown
                                data={countries}
                                onSelect={(selectedItem, index) => {
                                    setTime(selectedItem)
                                }}
                                buttonStyle={{
                                    margin: 0,
                                    borderRadius: 36,
                                    width:200,
                                    height:40
                                }}
                                dropdownStyle={{

                                }}
                                defaultButtonText={'Timings'}
                                buttonTextAfterSelection={(selectedItem, index) => {
                                    // text represented after item is selected
                                    // if data array is an array of objects then return selectedItem.property to render after item is selected
                                    return selectedItem
                                }}
                                rowTextForSelection={(item, index) => {
                                    // text represented for each item in dropdown
                                    // if data array is an array of objects then return item.property to represent item in dropdown
                                    return item
                                }}
                            />
                            <SelectBox
              label="Selected Tags"
              options={K_OPTIONS}
              selectedValues={selectedItems}
              onMultiSelect={onMultiChange()}
              onTapClose={onMultiChange()}
              isMulti
            />
    <Pressable
     style={{
        width: '40%',
        alignSelf: 'center',
        backgroundColor: '#FBC62C',
        height: 42,
        borderRadius: 25
    }}
    onPress={toggleModal}    >
        <Text style={{
        textAlign:'center',
        fontWeight:'bold',
        top:'20%'
    }}>Add</Text></Pressable>
  </View>
</Modal>
</Pressable>


{/* 
         <Pressable style={{
                            width: '40%',
                            alignSelf: 'center',
                            backgroundColor: '#FBC62C',
                            height: 42,
                            borderRadius: 25
                        }}
                            onPress={}>
            <Text style={{
                textAlign:'center',
                top:'20%',
                fontWeight:'bold'
}}>+ Add DISH</Text>
         </Pressable> */}
     
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
                            onPress={addDish}
                            >
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






// import React, { useState, useEffect } from "react";
// import {
//     View, Text, TextInput, Button, Image, StyleSheet, Pressable
// } from "react-native";
// import 'react-native-gesture-handler'
// import { SafeAreaView } from "react-native-safe-area-context";
// import back from '../assets/back.png';
// import setting from '../assets/setting.png';
// import edit from '../assets/edit.png';
// import { ScrollView } from "react-native-gesture-handler";
// import navTop from '../assets/navTop.png';
// import navBar from '../assets/navBar.png';
// import { Divider } from "react-native-paper";
// import server from '../Component/server'
// import * as Location from 'expo-location';

// // import Checkbox from 'expo-checkbox';
// export default function AddDish({ params }) {
    

//                 <View
//                     style={{
//                         backgroundColor: "#FFFFFF",
//                         height: '100%'
//                     }}
//                 >
//                     <Text style={{
//                         fontWeight: 'bold',
//                         fontSize: 30,
//                         textAlign: 'center',
//                         top: '5%'
//                     }}>
//                         Add Dish
//                     </Text>
//                     <View style={{
//                         width: '68%',
//                         alignSelf: 'center',
//                         marginTop: 50
//                     }}>

//                         <TextInput
//                             style={styles.input}
//                             onChangeText={setName}
//                             value={name}
//                             placeholder="Dish Name"
//                         />
//                         <TextInput
//                             style={styles.input}
//                             onChangeText={setDescription}
//                             value={description}
//                             placeholder="Description"
//                         />

//                         <TextInput
//                             style={styles.input}
//                             onChangeText={setTime}
//                             value={time}
//                             placeholder="Timings"
//                         />

//                         <TextInput
//                             style={styles.input}
//                             onChangeText={setDays}
//                             value={days}
//                             placeholder="Days"
//                         />
//                         <TextInput
//                             style={styles.input}
//                             onChangeText={setAvalaible}
//                             value={availability}
//                             placeholder="Enter Availability"
//                         />

//                         <TextInput
//                             style={styles.input}
//                             onChangeText={setPrice}
//                             value={price}
//                             placeholder="Enter Price "
//                         />
//                         {/* <TextInput
//                             style={styles.input}
//                             onChangeText={setCharges}
//                             value={charges}
//                             placeholder="Monthly Charges"
//                         />
//                         <View style={{
//                             width: '40%'
//                         }}>
//                             <TextInput
//                                 style={styles.input}
//                                 onChangeText={setDish}
//                                 value={dish}
//                                 placeholder="+ Add Dish"
//                             />
//                         </View> */}

//                     </View>
//                     <View style={{
//                         height: '20%',
//                         backgroundColor: '#FFFFFF',
//                         justifyContent: 'center'
//                     }}>
//                         <Pressable style={{
//                             width: '40%',
//                             alignSelf: 'center',
//                             backgroundColor: '#FBC62C',
//                             height: 42,
//                             borderRadius: 25
//                         }}
//                             onPress={addDish}>
//                             <Text
//                                 style={{
//                                     color: '#000000', alignSelf: 'center', marginTop: '6%', fontSize: 16, fontWeight: 'bold', alignContent: 'center'
//                                 }}
//                             >Save </Text>
//                         </Pressable>
//                     </View>
//                 </View>

//             </SafeAreaView>
//         </>

//     );
// }