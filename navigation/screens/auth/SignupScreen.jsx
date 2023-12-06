import { KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './signupscreen.style'
import { auth, db } from '../../../firebase/config';
import { createUserWithEmailAndPassword, onAuthStateChanged, updateProfile } from "firebase/auth";
import { useNavigation } from '@react-navigation/core';
import { serverTimestamp, setDoc, doc } from 'firebase/firestore';

const SignupScreen = () => {

    const [error, setError] = useState(null);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName:'',
        email: '',
        password: ''
    })

    const {firstName, lastName, email, password } = formData;

    const navigation = useNavigation();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (authUser) => {
            if(authUser) {
                navigation.replace("MainContainer");
            }
        });

        return unsubscribe;
    }, [])


    handleChange = (name, value) => {
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
      };

    handleSignUp = () => { 
        if (firstName === "" || lastName === "" || email === "" || password === "") {
            setError("All fields are required");
            return;
        } else {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log("Registered with: ", user.email);

            updateProfile(auth.currentUser, {
                displayName: firstName + " " + lastName
            })

            const formDataCopy = { ...formData };
            delete formDataCopy.password;
            formDataCopy.timestamp = serverTimestamp();

            setDoc(doc(db, "users", user.uid), formDataCopy);

        })
        .catch((error) => alert(error.message)); 
     }
    }

    handleClick = () => { 
        navigation.navigate("LoginScreen");
    }

  return (
    <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
    >
        <View style={styles.inputContainer}>
            <TextInput 
                style={styles.input} 
                placeholder="First Name"
                placeholderTextColor="gray"
                name="firstName"
                value={firstName}
                onChangeText={(value) => handleChange("firstName", value)}
            /> 
            <TextInput 
                style={styles.input} 
                placeholder="Last Name"
                placeholderTextColor="gray"
                name="lastName"
                value={lastName}
                onChangeText={(value) => handleChange("lastName", value)}
            /> 
            <TextInput 
                style={styles.input} 
                placeholder="Email Address"
                placeholderTextColor="gray"
                name="email"
                value={email}
                onChangeText={(value) => handleChange("email", value)}
            /> 
            <TextInput 
                style={styles.input} 
                placeholder="Password"
                placeholderTextColor="gray"
                name="password"
                value={password}
                onChangeText={(value) => handleChange("password", value)}
                secureTextEntry
            /> 
            {error ? <Text style={{ color: 'red' }}>&nbsp; {error}</Text> : null}
        </View>
        <View style={styles.buttonContainer}>
            <TouchableOpacity 
                style={styles.button}
                onPress={handleSignUp}
            >  
                <Text style={styles.buttonText}>Sign up</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={[styles.button, styles.buttonOutline]}
                onPress={handleClick}
            >
                <Text style={styles.buttonOutlineText}>Login</Text>
            </TouchableOpacity>
        </View>
    </KeyboardAvoidingView>
  )
}

export default SignupScreen
