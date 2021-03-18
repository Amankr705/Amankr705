import React, { Component } from 'react';
import { Text, View, TextInput, StatusBar, Button, } from 'react-native';  
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import home from './src/pages/homescreen';
import loginpage from './src/pages/loginpage';
import chat from './src/pages/chat';
// import drawerscreen from './src/pages/drawerscreen';


// const Stack = createStackNavigator();

// const YourApp = () => {   
//   return (   
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen name="Home" component={home} />
//         <Stack.Screen name="Login" component={loginpage} />
//         <Stack.Screen name="chat" component={chat} />
//         {/* <Stack.Screen name="drawerscreen" component={drawerscreen} /> */}

//       </Stack.Navigator>
//     </NavigationContainer>
//   ); 

// }


const drawerScreen = () => {   
const Drawer = createDrawerNavigator();


{
    return(
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="home">
                <Drawer.Screen name="home" component={home} />
                <Drawer.Screen name="loginPage" component={loginpage} />
                <Drawer.Screen name="chat" component={chat} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}
}

export default drawerScreen;

// export default YourApp