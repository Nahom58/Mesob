import { KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './loginscreen.style'
import { auth } from '../../../firebase/config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from '@react-navigation/core';

const LoginScreen = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigation = useNavigation();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (authUser) => {
            if(authUser) {
                navigation.replace("MainContainer");
            }
        });

        return unsubscribe;
    }, [])


    handleClick = () => { 
        navigation.navigate("SignupScreen");
    }

    handleLogin = () => { 
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log("Logged in with: ", user.email);
        })
        .catch((error) => alert(error.message));
    }

  return (
    <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
    >
        <View style={styles.inputContainer}>
            <TextInput 
                style={styles.input} 
                placeholder="Email Address"
                placeholderTextColor="gray"
                value={email}
                onChangeText={(text) => setEmail(text)}
            /> 
            <TextInput 
                style={styles.input} 
                placeholder="Password"
                placeholderTextColor="gray"
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry
            /> 
        </View>
        <View style={styles.buttonContainer}>
            <TouchableOpacity 
                style={styles.button}
                onPress={handleLogin}
            >  
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={[styles.button, styles.buttonOutline]}
                onPress={handleClick}
            >
                <Text style={styles.buttonOutlineText}>Signup</Text>
            </TouchableOpacity>
        </View>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen
