import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons  from 'react-native-vector-icons/Ionicons';

//Screens
import HomeScreen from './screens/home/HomeScreen';
import PastOrdersScreen from './screens/pastorders/PastOrdersScreen';
import MapScreen from './screens/map/MapScreen';
import ReferScreen from './screens/refer/ReferScreen';
import AccountScreen from './screens/account/AccountScreen';
import { useNavigation } from "@react-navigation/core";

//Screen Names
const homeScreenName = "Home";
const pastOrdersScreenName = "PastOrders";
const mapScreenName = "Map";
const referScreenName = "Refer";
const accountScreenName = "Account";

const Tab = createBottomTabNavigator();

function MainContainer() {

    navigation = useNavigation();

  return (
    <NavigationContainer independent={true}>
        <Tab.Navigator
        initialRouteName={homeScreenName}
        screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
                let iconName;
                if(route.name === homeScreenName) {
                    iconName = focused ? 'home' : 'home-outline';
                } else if(route.name === pastOrdersScreenName) {
                    iconName = focused ? 'receipt' : 'receipt-outline';
                } else if(route.name === mapScreenName) {
                    iconName = focused ? 'map' : 'map-outline';
                } else if(route.name === referScreenName) {
                    iconName = focused ? 'gift' : 'gift-outline';
                } else if(route.name === accountScreenName) {
                    iconName = focused ? 'person' : 'person-outline';
                }
                return <Ionicons name={iconName} size={size} color={color} />
            },
            tabBarStyle: { height: 90 },
            tabBarActiveTintColor: "crimson",
            tabBarInactiveTintColor: "gray",
            tabBarLabelStyle: {
                "paddingBottom": 10
            }
        })}
        >
            <Tab.Screen name={homeScreenName} component={HomeScreen} />
            <Tab.Screen name={pastOrdersScreenName} component={PastOrdersScreen} />
            <Tab.Screen name={mapScreenName} component={MapScreen} />
            <Tab.Screen name={referScreenName} component={ReferScreen} />
            <Tab.Screen name={accountScreenName} component={() => <AccountScreen navigation={navigation} />} />
        </Tab.Navigator>
    </NavigationContainer>
  )
}

export default MainContainer