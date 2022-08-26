import { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Stack, TextInput, IconButton, Button  } from "@react-native-material/core"
import { useLogin } from "../../context";

export default function HomeAdmin(){
    const { loggedin, setLoggedin } = useLogin()

    console.log('Admin----------------------------------------');
    return(
        <View >
            <Text >Bienvenu admin</Text>
            <Text >Liste de pojets</Text>

                <Button colo title="Logout" color="#0F1527" onPress={()=>{ AsyncStorage.clear(); setLoggedin(false)}} />
        </View>
    );
}