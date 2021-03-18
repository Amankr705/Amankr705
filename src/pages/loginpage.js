import React, { useState } from 'react';
import { Text, View, TextInput, Picker, Button   } from 'react-native';  

const loginpage = ({navigation}) => {
    const [selectedValue, setSelectedValue] = useState("java");
    const [email,setemail]=React.useState('');
    const [password,setpassword]=React.useState('');
    const submitlogin=async()=>
    {
        const res= await fetch("http://192.168.1.7:3000/users/login",
        {
            method:"POST",
            headers:
            {
              'Content-Type':'application/json'
            },
            body:JSON.stringify(
          {
           email:email,
           password:password,
          })
        })
        const data = await res.json();
        return data.token;
    }
 const storeData = async (token) => 
{
    try
    {
      await AsyncStorage.setItem(
        'token',
        token,
      );
      console.log('saving')
    } catch (error) 
    {
      console.log(error)
    }
};

    return(
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center",backgroundColor:"#455a64" }}>
        <Text style={{ fontSize:35,color:"black",}} >
           
        </Text>
        <TextInput style={{height:40, width:120, borderWidth:5, borderColor:"white", padding:7,paddingHorizontal:25}}
               underlineColorAndroid = "red"
               placeholder = "Email"
               placeholderTextColor = "black"
               autoCapitalize = "none"
               value={email}
               onChangeText={setemail}
               />
               <TextInput style={{height:40, width:120, borderWidth:5, borderColor:"white", padding:7,paddingHorizontal:25}}
               underlineColorAndroid = "red"
               placeholder = "password"
               placeholderTextColor = "black"
               autoCapitalize = "none"
               value={password}
               onChangeText={setpassword}
               />
         
         <Picker
             selectedValue={selectedValue}
             style={{ height: 50, width: 150 }}
             onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
         >
             <Picker.Item label="MALE" value="M" />
             <Picker.Item label="FEMALE" value="F" />
         </Picker>
         
         





         </View> 
    );

}
export default loginpage