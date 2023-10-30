import { Stack } from 'expo-router';
import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import TodaysMenuCard from '../../../components/common/cards/todaysmenu/TodaysMenuCard';
import ScreenHeaderbtn from '../../../components/common/header/ScreenHeaderBtn';
import icons from '../../../constants/icons';

import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../../firebase/config';

const HomeScreen = ({navigation}) => {

  const [foodMenus, setFoodMenus] = useState([]);
  const [ loading, setLoading ] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
        try {
            const foodMenusRef = collection(db, 'food_menus');
            const snapshot = await getDocs(foodMenusRef);
            let foodMenusData = [];

            snapshot.docs.forEach((doc) => {
                foodMenusData.push({ ...doc.data(), id: doc.id });
            });

            setFoodMenus(foodMenusData);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false); // Handle loading state even in case of an error
        }
    };
    fetchData();
  }, []);


  return (
    <View>
      <Stack.Screen options={{
        headerShown: true,
        headerTitle: "Today's Menu",
        headerLeft: ()  => (  
          <ScreenHeaderbtn iconUrl={icons.filter64} dimension="80%"/>
        )}
      } 
     />

     <View showsVerticalScrollIndicator={false}>
      { loading ? 
        <View>
          <Text>Loading...</Text>
        </View>: 
      foodMenus && foodMenus.length > 0 ? 
        <FlatList 
          data={foodMenus} 
          keyExtractor={item => item.id} 
          renderItem={({item}) => 
            <TodaysMenuCard  
              foodName={item.foodName}
              restaurantName={item.restaurantName}
              restaurantAddress={item.restaurantAdress}
              />} 
        />: 
        <View> 
          <Text>No Food Menus Available</Text> 
        </View>}
     </View>
    </View>
  )
}

export default HomeScreen;