import React, {useState} from 'react';
import {View, Text, Image, TextInput } from 'react-native';
import IllustrationImg from '../assets/illustration.png';
import { styles } from './styles';
//import { useState } from 'react';
export function SignIn(){
    const [text, setText] = useState('');
  return(
    <View style={styles.container}>
         <Image source={IllustrationImg} style={styles.image}/>
    </View>

    <View style={styles.content}>
      <Text style={styles.tecx}></Text>

    </View>

  );
};