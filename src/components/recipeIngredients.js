import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
} from 'react-native';
import { Icon} from 'react-native-elements';
//import Tags from './tags';
class RecipeIntro extends Component{
  constructor(props){
    super(props);

    const {
     ingredients,
     
    } = this.props.screenProps;
    this.state = {
      ingredients:ingredients,
    }

  }
  render(){
    
    return(
        <ScrollView style={styles.container}>      
           {
              this.state.ingredients.map((Item)=>(
                <View style={styles.ingredient}>
                  <Text style={styles.ingredient_text}>{Item}</Text>
                </View>
            ))}
        </ScrollView>
          


      
    )
  }
}
const styles = {
  container: {
    backgroundColor:"#efeff4",
    flex: 1,
  },
  ingredient:{
    borderRadius:8,
    marginLeft:15,
    marginRight:15,
    marginTop:15,
    backgroundColor:"#FFF",
  },
  ingredient_text:{
      padding:35,
      backgroundColor:"transparent",
      fontSize:25,
      textAlign:'center'
  }
}

export default  RecipeIntro;
