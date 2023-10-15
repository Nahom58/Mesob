import React, { useState } from 'react';
import { View, Text, TextInput, Image } from 'react-native';
import styles from './sendinvite.style';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { icons } from '../../../../constants';


const SendInvite = () => {

    const [email, setEmail] = useState('');


  const handleEmailSubmit = () => {
    console.log('Email submitted:', email);
  };

  return (
    <View style={styles.container}>
        <Image
          source={icons.gift100}
          resizeMode='contain'
          style={styles.giftImage}
        />
        <Text style={styles.referTitle}>
            Refer a Friend
          </Text>
          <Text style={styles.referMessage}>
            Invite friends to Mesob so they can skip the waitlist!
          </Text>
        <TextInput style={styles.emailAddressContainer}
        placeholder="Email Address"
        placeholderTextColor="gray"
        keyboardType="email-address"
        onChangeText={setEmail}
        value={email}
        />
        <TouchableOpacity style={styles.sendInviteTouchableOpacity} onPress={handleEmailSubmit}>
          <Text style={styles.sendInviteText}>
            Send invite 
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.inviteFromContactTouchableOpacity} onPress={handleEmailSubmit}>
          <Text style={styles.inviteFromContactText}>
            Invite from contacts
          </Text>
        </TouchableOpacity>
  </View>
  );
};

export default SendInvite;