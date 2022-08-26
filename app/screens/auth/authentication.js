import { Stack, TextInput, IconButton, Button  } from "@react-native-material/core"
import { useEffect, useRef, useState } from "react"
import { Image, Text, View } from "react-native"
import useAuthFormState from "./useAuthFormState"
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { Snackbar } from "react-native-paper"

export default function Authentification(){
    const {password,visible,  email, handleLogin, loading, toast, submit} = useAuthFormState()
    const onDismissSnackBar =()=>{
        visible.set(false)
    }
      const toastUi = ()=>{
        return(
 
                <Snackbar
                    visible={visible.value}
                    onDismiss={onDismissSnackBar}
                    action={{
                    label: 'Ferme',
                    onPress: () => {

                    },
                    }}>
                        <Text>

                        {toast.message}
                        </Text>
                </Snackbar>
                       
        )
      }

    // useEffect(() => {
    //     Animated.timing(animationProgress.current, {
    //       toValue: 1,
    //       duration: 5000,
    //       easing: Easing.linear,
    
    //     }).start();
    //   }, [])
    return(
        <View style={{height:'100%'}}>
    <Stack spacing={2} style={{ margin: 16 }}>
        <TextInput
        label="Email"
        leading={props => <Icon name="account" {...props} />}
        color='#0F1527'
        onChangeText={newText => email.set(newText)}


        />
        <TextInput
        label="Passwod"
        onChangeText={newText => password.set(newText)}
        color='#0F1527'
        leading={props => <Icon name="lock-off" {...props} />}
        type="password"
        trailing={props => (
            <IconButton icon={props => <Icon name="eye" {...props} />} />
          )}
        />
            <Button colo title="Connexion" color="#0F1527" onPress={handleLogin} />

    </Stack>
    {toastUi()}
    </View>
    );
}