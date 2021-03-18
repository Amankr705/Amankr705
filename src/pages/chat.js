import React, { useState } from 'react';
import { Text, View, TextInput, Picker, Button, StatusBar,  } from 'react-native';  

const chat = ({navigation}) => {   
    const [message,setmessage]=React.useState('');
    return (   
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center",backgroundColor:"#455a64" }}>
            <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#00BCD4" translucent = {true}/>
            <Text style={{ fontSize:20,color:"white", justifyContent: "center", alignItems: "center", }} >
            </Text>
            <TextInput style={{height:40, width:120, borderWidth:5, borderColor:"white", padding:7,paddingHorizontal:25}}
               underlineColorAndroid = "red"
               placeholder = "Type your message"
               placeholderTextColor = "black"
               autoCapitalize = "none"
               value={message}
               onChangeText={setmessage}
               />
                <Button
             onPress = {() => {}}
             title = "send"
             color = "green"/>
                 
  
            
         
        </View>
    ); 
  
  }   

  export default chat