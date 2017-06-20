import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import { Icon , Divider} from 'react-native-elements';
import SectionTitle from './sectionTitle';
//import Tags from './tags';
class RecipeIntro extends Component{
  constructor(props){
    super(props);

    const {
      title,
      thumbnail_image,
      descriptions,
      recipe_info,
     
    } = this.props.screenProps;
    this.state = {
      title: title,
      thumbnail_image: thumbnail_image,
      descriptions: descriptions,
      recipe_info:recipe_info,
    }

  }
  render(){
    
    return(
        <ScrollView style={styles.container}>  
          <View style={{justifyContent: 'center',alignItems: 'center'}}>
              <View style={{borderRadius:8,backgroundColor:'white', width: Dimensions.get('window').width/20*18,height:300,alignItems: 'center'}}>
                <Image 
                  style={styles.image} 
                  source={{uri:this.state.thumbnail_image}}
                />

                <View style={{paddingLeft:15,justifyContent: 'space-between',alignItems: 'flex-end', flexDirection:'row',height:50, width: Dimensions.get('window').width/20*18,}}>
                    
                    <Text style={styles.dish_title}>{this.state.title}</Text>
                    <View style={styles.title_icons_auth}>

                      <Image style={styles.ic_balance} source={require('../assets/icon/ic_balance.png')}/>
                      <Image style={styles.ic_love} source={require('../assets/icon/ic_star.png')}/>
                      <View style={{justifyContent: 'flex-end',marginBottom:5}}>
                          <Text style={{fontSize:14,color:' rgb(179, 181, 185)',paddingHorizontal:15}}>{this.state.recipe_info.userName}</Text>
                      </View>

                    </View>
                </View>

              </View>

              <View style={styles.tags}>
                {this.state.recipe_info.recipe_tag.map((item)=>(
                  <View style={{marginHorizontal:5,flexDirection:'row',alignItems:'center',paddingHorizontal:15,height:25, borderRadius:5, backgroundColor:'#fff'}}>
                    <Image style={styles.ic_tags} source={require('../assets/icon/tag.png')}/>
                    <Text style={{color:' rgb(179, 181, 185)',fontSize:14,marginHorizontal:5,}}>{item}</Text>
                  </View>
                ))}
              </View>
               
              <Divider style={{ height: 1, backgroundColor: 'blue' }} />

              <View style={styles.intro}>
                <Text style={{fontSize:18,color: '#5a5a5c'}}>{this.state.descriptions && this.state.descriptions.replace(/↵/g,"\n")}</Text>
              </View>


              

          </View>    

         



        </ScrollView>
          


      
    )
  }
}
const styles = {
container: {
    backgroundColor:"#efeff4",
    paddingVertical:20
    
  },
  image:{
    //margin:15,
    //marginTop:5,
    backgroundColor:'transpaarent',
    width: Dimensions.get('window').width/20*18,
    height:250,
    //borderRadius:8
  },
  dish_title:{
    color: '#5a5a5c',
    fontSize:25,
    marginBottom:5

  },
  ic_balance:{
    //marginLeft:10,
    width:30,
    height:30
  },
  ic_love:{
    marginLeft:5,
    width:25,
    height:25
  },
  ic_tags:{
    width:10,
    height:10,
    marginTop:2,
    //marginLeft:10,
    //marginRight:5
   // backgroundColor:'red'
  },
  tags:{
    paddingVertical:15,
    //backgroundColor:'blue',
    width: Dimensions.get('window').width/20*18,
    flexDirection:'row'

    
  },
  intro:{
    width: Dimensions.get('window').width/20*18,
    backgroundColor:"#fff",
    marginVertical:10,
    padding:15,
    borderRadius:5
  },
  title_icons_auth:{
    flexDirection:'row',
  }
}

export default  RecipeIntro;
