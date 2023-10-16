import React from 'react'
import SendInvite from '../../../components/common/refercomponents/sendinvite/SendInvite'
import { Stack } from 'expo-router'
import { ScrollView } from 'react-native-gesture-handler'
import ShareLink from '../../../components/common/refercomponents/shareyourlink/ShareLink'

const ReferScreen = ({navigation}) => {
  return (
    <ScrollView style={{ flex: 1, color:"gray" }}>
      <Stack.Screen options={{headerShown: false, statusBarColor:"#FFF" }} />
      <SendInvite />
      <ShareLink />
    </ScrollView>
  )
}

export default ReferScreen