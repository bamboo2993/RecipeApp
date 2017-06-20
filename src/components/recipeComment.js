import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  Image,
} from 'react-native';
import { Icon} from 'react-native-elements';
//import Tags from './tags';
class RecipeIntro extends Component{
  constructor(props){
    super(props);

    const {
     comment,
     
    } = this.props.screenProps;
    this.state = {
      comment:comment,
    }

  }
  render(){
    
    return(
        <ScrollView style={styles.container}>      
           {this.state.comment.map((item) =>(
              <View style={styles.commentCard}>
                <Image 
                    style={styles.BH} 
                    source={{uri:item.thumbnail_image}}/>
                <View style={styles.comment_content}>
                  <View>
                    <Text style={styles.text}>{item.comment}</Text>
                  </View>
                  <View style={styles.date}>  
                    <Text style={{alignSelf:'flex-end'}}>{item.time_stamp}</Text>              
                  </View>
                </View>
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
  commentCard:{
    flexDirection:'row',
    backgroundColor:"#FFE58C",
    marginBottom:10
  },
  BH:{
    width:65,
    height:65,
    margin:15
  },
  comment_content:{
    flex:1,
    padding:10,
    paddingLeft:0,
    backgroundColor:"#fff"
  },
  text:{
    padding:10,
    fontSize:16
  },
  date:{
    position:'absolute',
    bottom:10,
    right:15,
    backgroundColor:"#fff",
    alignItems:'flex-end'
  }
}

export default  RecipeIntro;
