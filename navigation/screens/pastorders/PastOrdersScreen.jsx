import { Stack } from 'expo-router'
import React from 'react'
import { View, Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

import PastOrderCard from '../../../components/common/cards/pastorder/PastOrderCard'
import { Header } from '@react-navigation/stack'

const PastOrdersScreen = ({}) => {
  return (
    <View style={{ flex: 1, paddingTop: 40 }}>
      <Stack.Screen options={{headerShown: false}} />
      <ScrollView showsVerticalScrollIndicator={true}>
          <View style={{ flex: 1, fontSize: 50, padding: 25 }}>
            <Text style={{ fontSize: 16 }}>Your Past Orders</Text>
          </View>
        <PastOrderCard />
        <PastOrderCard />
        <PastOrderCard />
        <PastOrderCard />
        <PastOrderCard />
        <PastOrderCard />
        <PastOrderCard />
        <PastOrderCard />
        <PastOrderCard />
      </ScrollView>
    </View>
  )
}

export default PastOrdersScreen