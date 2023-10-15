import { Stack } from 'expo-router';
import React from 'react'
import { View, Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import TodaysMenuCard from '../../../components/common/cards/todaysmenu/TodaysMenuCard';
import ScreenHeaderbtn from '../../../components/common/header/ScreenHeaderBtn';
import icons from '../../../constants/icons';

const HomeScreen = ({navigation}) => {
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

     <ScrollView showsVerticalScrollIndicator={false}>
       
      <TodaysMenuCard />
      <TodaysMenuCard />
      <TodaysMenuCard />
      <TodaysMenuCard />
      <TodaysMenuCard />

     </ScrollView>
    </View>
  )
}

export default HomeScreen;