import { Stack } from 'expo-router'
import React from 'react'
import { Text } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import Profile from '../../../components/common/accountcomponents/profile/Profile'
import YourPlan from '../../../components/common/accountcomponents/yourplan/YourPlan'
import IonIcons from 'react-native-vector-icons/Ionicons'
import styles from './accountscreen.style'
import { signOut } from 'firebase/auth'
import { auth } from '../../../firebase/config'

const AccountScreen = ({ route, navigation }) => {

  const handleSignOut = () => {
    signOut(auth)
    .then(() => {
      navigation.replace("LoginScreen");
    })
    .catch((error) => {
      alert(error.message);
    });
  }

  return (
    <ScrollView style={{ flex: 1, color:"gray" }}>
      <Stack.Screen options={{headerShown: false, statusBarColor:"#FFF" }} />
      <Profile />
      <YourPlan />
      <TouchableOpacity style={styles.touchableOpacity} >
        <IonIcons name="filter-outline" size={24} color="crimson" />
          <Text style={styles.text}>
            Preferences
          </Text>
        <IonIcons name="chevron-forward-outline" size={24} color="gray" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchableOpacity} >
        <IonIcons name="calendar-outline" size={24} color="crimson" />
          <Text style={styles.text}>
            Plan
          </Text>
        <IonIcons name="chevron-forward-outline" size={24} color="gray" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchableOpacity} >
        <IonIcons name="card-outline" size={24} color="crimson" />
          <Text style={styles.text}>
            Payment
          </Text>
        <IonIcons name="chevron-forward-outline" size={24} color="gray" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchableOpacity} >
        <IonIcons name="location-outline" size={24} color="crimson" />
          <Text style={styles.text}>
            Location
          </Text>
        <IonIcons name="chevron-forward-outline" size={24} color="gray" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchableOpacity} >
        <IonIcons name="call-outline" size={24} color="crimson" />
          <Text style={styles.text}>
            Help
          </Text>
        <IonIcons name="chevron-forward-outline" size={24} color="gray" />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSignOut} style={styles.touchableOpacity} >
        <IonIcons name="log-out-outline" size={24} color="crimson" />
          <Text style={styles.text}>
            Log out
          </Text>
        <IonIcons name="chevron-forward-outline" size={24} color="gray" />
      </TouchableOpacity>
    </ScrollView>
  )
}

export default AccountScreen