import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
    Navigator,
    View,
    Dimensions
    } from 'react-native';

import {Tile, Icon} from 'react-native-elements';

import SectionTitle from './sectionTitle';

//import Recipies from '../json/recipe.json'

import Swiper from 'react-native-swiper';

class hello extends Component {


    state = {Recipies: [] };

    componentWillMount() {
   //     this.setState({ Recipies });
    }

  //  goToSeachResult = (Recipies) => {
  //      this.props.navigation.navigate ('SearchResult', { ...album });

  //  };



    

  render() {
    return (


        <View style ={ {height: 370, backgroundColor:'#efeff4'}}>
            <SectionTitle
              title={this.props.title}
              titleButton={this.props.showViewTitleButton}
            />
 



            <Swiper 
              style={styles.wrapper} 
              showsButtons={false} 
              autoplay  
              autoplayTimeout = {4} 
              height = {270} 
              dotStyle = {{marginBottom: -110}} 
              activeDotStyle = {{marginBottom: -110, backgroundColor:'#f1be38'}}
              //nextButton = { <Text style ={{color: 'white' }} > </Text>}
              >
                {
                  this.props.itemList.map((item) => (
                   <View style={styles.slide1}>
                     <Tile
                      imageSrc = {{uri:item.thumbnail_image}}
                      title = {item.title}
                      featured
                      caption = {item.descriptions_short} 
                      containerStyle  = {{ justifyContent: 'center', alignItems: 'center',borderRadius: 15,}} 
                      imageContainerStyle = {{ width: Dimensions.get('window').width -20, height: 270 -30, justifyContent: 'center', alignItems: 'center',borderRadius: 10,}}                  
                      titleStyle = {{ fontSize:18,paddingLeft:5}}
                      captionStyle = {{width: 230, lineHeight: 0,fontSize:15,marginBottom:-28 }}
                      onPress={()=>this.props.goToRecipeDetailPage(item)}
                    />
        

                    <TouchableOpacity 
                      onPress ={() => this.onPress}
                      style ={{ position: 'absolute', alignItems: 'flex-end', alignSelf: 'flex-end', padding: 20,paddingBottom:40}} >

                      <Icon name= 'favorite-border' color= 'white' size= '30'  />
                    </TouchableOpacity>


                  </View>
                    
                ))}
  
                
            </Swiper>
            
        
        
        </View>
      
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
      paddingTop:3

  },
  slide1: {
    justifyContent: 'flex-end',
    
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
});


export default hello;
