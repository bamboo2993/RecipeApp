import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { Icon} from 'react-native-elements';
//import Tags from './tags';
class RecipeIntro extends Component{
  constructor(props){
    super(props);

    const {
     steps,
     
    } = this.props.screenProps;
    this.state = {
      steps:steps,
    }

  }
  render(){
    
    return(
        <ScrollView style={styles.container}>      
           {this.state.steps.map((item)=>(
              <View style={styles.card}>
                <Image
                    style={styles.image} 
                    source={{uri: item.thumbnail_image}}/>
                <Text style={styles.StepText}> {item.description}</Text>
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
  card:{
    borderRadius:8,
    margin:15,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:"#fff"
  },
  StepText:{
    fontSize:20,
    padding:20
  },
  image:{
    borderRadius:8,
    width:345,
    height:230,
    backgroundColor:"transparent"
  }
}

export default  RecipeIntro;
