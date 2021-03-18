import React, { Component } from 'react';
import { Text, View, TextInput, StatusBar, Button, StyleSheet, } from 'react-native';  




const home = ({navigation}) => {  
  
    return (   
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center",backgroundColor:"#455a64" }}>
            <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#00BCD4" translucent = {true}/>
            <Text style={{ fontSize:20,color:"white", justifyContent: "center", alignItems: "center", }} >
              welcome to the app
            </Text>
            <Button
             onPress = {() => {navigation.navigate('loginPage')}}
             title = "LOGIN"
             color = "red"/>
             <Button
             onPress = {() => {navigation.navigate('chat')}}
             title = "CHAT"
             color = "red"/>
             
             <Button 
             onPress = {() => {navigation.navigate('drawerscreen')}}
             title = "MENU"
             color = "grey"/>
             

                 
     
          
            
         
        </View>
    ); 
  
    };
  
  
  export default home