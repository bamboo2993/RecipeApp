import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import { Icon , Divider} from 'react-native-elements';

class BigHead extends Component{
  constructor(props){
    super(props);
    this.state = {};
  }
  render(){
    return(    
      <View style={styles.profile}>
            <Image style={styles.head} source={require('../assets/account_thumbnail/GH2.png')} />
            <View>
              <Text style={styles.profileName}>胚兒啾啾</Text>
              <Text style={styles.profileText}>一個吃貨，只是喜歡煮</Text>
            </View>
      </View>
    )
  }
}

const styles = {
 profile:{
   
   justifyContent: 'center',
   alignItems: 'center',
    flexDirection:'row',
   // paddingTop:30,
   // paddingVertical:20,
    height:Dimensions.get('window').height/40*11,
    backgroundColor:'#f0be38',
  },
  head:{
    marginTop:10,
   // marginLeft:50,
    marginRight: Dimensions.get('window').width/10,
    width:100,
    height:100,
    //backgroundColor:'red'
  },
  profileName:{
    fontSize:19,
    //paddingTop:40,
    color:"#fff",
    //backgroundColor:'blue'
  },
  profileText:{
    color:"#fff",
    paddingTop:10,
    //backgroundColor:'grey'
  }
}

export default BigHead;
