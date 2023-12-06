import MainContainer from "../navigation/MainContainer";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { router, useRouter } from "expo-router";
import LoginScreen from "../navigation/screens/auth/LoginScreen";
import SignupScreen from "../navigation/screens/auth/SignupScreen";

const Home = () => {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen options={{headerShown: false }} name="LoginScreen" component={LoginScreen} />
            <Stack.Screen options={{headerShown: false }} name="SignupScreen" component={SignupScreen} />
            <Stack.Screen options={{headerShown: false }} name="MainContainer" component={MainContainer} />
        </Stack.Navigator>

    );
}

export default Home;