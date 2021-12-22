import React, {useState} from 'react';
import {View, Text, TextInput } from 'react-native';
import { styles } from './styles';
//import { useState } from 'react';
export function SignIn(){
    const [text, setText] = useState('');
  return(
    <View style={styles.container}>
    <Text>Testand novamente!</Text>
    
    <TextInput
     style={styles.input}
     onChangeText = {setText}
     />

     <Text>
         você digitou: { text }
    </Text>
    </View>

  );
};