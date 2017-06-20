import React, { Component } from 'react';
import {
  Button,
  TextInput,
  ScrollView,
  Text,
  View,
  Image
} from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';


const balance = () => {
    const {container,
            photo,
            materials,
            material,
            text
            ,menu
            ,menu_text
            ,menu_dropdownStyle} = styles;



            
    return (
      <ScrollView>
        <View style={container}>
            <View style={{height:300,alignSelf:'center'}}>
                <Image style={photo} source ={  require( "../assets/balance.png")} ></Image>

            </View>
            

            <View style={materials}>
                <View style={material}>
                    <Text style={text}>輸入食材              輸入量  </Text>
                    <ModalDropdown defaultValue={'單位'} dropdownStyle={menu_dropdownStyle} textStyle={menu_text} style={menu} options={['根  ', '碗  ', '杯  ']}/>            
                </View>
                <View style={material}>
                    <Text style={text}>輸入食材              輸入量  </Text>
                    <ModalDropdown defaultValue={'單位'} dropdownStyle={menu_dropdownStyle} textStyle={menu_text} style={menu} options={['根  ', '碗  ', '杯  ']}/>            
                </View>
                <View style={material}>
                    <Text style={text}>輸入食材              輸入量  </Text>
                    <ModalDropdown defaultValue={'單位'} dropdownStyle={menu_dropdownStyle} textStyle={menu_text} style={menu} options={['根  ', '碗  ', '杯  ']}/>            
                </View>
            </View>




            <Button
             onPress={function(){console.log('按到我了')}}
             title="幫我秤！"
             color="#666"
             />
        </View>
      </ScrollView>      
    );
};
const styles={
    menu_text:{
        fontSize:15,
        color: '#45aab3',
    },
    menu:{
        backgroundColor:'#fff',
        padding:10,
        width:55,
        marginLeft: 25,
    },
    text:{
        padding:10,
        fontSize:15,
        color: '#45aab3',
    },
    material:{
        flexDirection:'row',
        padding:10,
        backgroundColor:'white',
    },
    materials:{
        backgroundColor:'#666',
        flex:1,
    },
    photo:{
        
        height:200,
        width:250,
        
        margin:50
        
    },
    container:{
       // height:480,
       // backgroundColor:"#ffe58c",

    }
}
export default balance;