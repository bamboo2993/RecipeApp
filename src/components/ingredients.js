import React, { Component } from 'react';
import {
  View,
  Text, 
  TextInput,
  TouchableOpacity,

} from 'react-native';


class Ingredients extends Component{

  constructor(props){
    super(props);
    this.state = {text: ''};
  }


  render(){
    const {ingredient,typeIn}=styles;
    return(
      <View style={ingredient}>
            <TextInput
              style={[{width:110},typeIn]}
              placeholder="食材"
              onChangeText={(text) => this.setState({text})}
            />
            <TextInput
              style={[{width:80},typeIn]}
              placeholder="數量"
              onChangeText={(text) => this.setState({text})}
            />
          <TextInput
            style={[{width:60},typeIn]}
            placeholder="單位"
            onChangeText={(text) => this.setState({text})}
          />
      </View>
    )
  }
}

const styles = {
  ingredient:{
      flexDirection:'row',
      borderRadius:15,
      marginLeft:30,
      marginRight:30,
      marginBottom:15,
      padding:15,
      backgroundColor:"#fff",
      opacity:0.7
    },
    typeIn:{
      height: 40,
      backgroundColor:"#fff",
      marginRight:10,
      padding:10}

}

export default Ingredients;
