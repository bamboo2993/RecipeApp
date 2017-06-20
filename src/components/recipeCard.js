import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { Icon} from 'react-native-elements';
import SectionTitle from './sectionTitle';
//import Tags from './tags';
class RecipeCard extends Component{
  constructor(props){
    super(props);
    this.state = {};
  }
  render(){
    
    return(
      <View style={{paddingVertical:10, backgroundColor:'#efeff4'}}>

        {this.props.vertical  &&
          <View >
            {this.props.title &&         
                <SectionTitle
                    title={this.props.title}
                    titleButton={this.props.showViewTitleButton}
                />}

            <ScrollView
               style={{ flexWrap: 'wrap'}}
            >
                <View style={styles.cardList}>
                {
                     this.props.itemList.map((item) => (
                        <View style={styles.card}>
                            <TouchableOpacity
                                key={item.title}
                                onPress={()=>this.props.goToRecipeDetailPage(item)}
                            >
                                <View>
                                    <Image
                                        source={{uri:item.thumbnail_image}}
                                        style={[styles.cardImg, {width: this.props.width, height: this.props.height}]}
                                    />

                                    <View style={styles.detail}>
                                        <Text numberOfLines={this.props.SetNameTwoLine ? 2 : 1} style={{ lineHeight: 20,color: ' rgb(179, 181, 185)', fontSize:15}}>
                                            {item.title}
                                        </Text>
                                        <Text style={{ lineHeight: 20,color: ' rgb(179, 181, 185)', fontSize:15}}>
                                            {item.recipe_info.userName}
                                        </Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            
                            

                            

                            <View style={styles.addFavourite}>
                                <Text numberOfLines={this.props.SetNameTwoLine ? 2 : 1} style={{marginRight: 5, lineHeight: 20,color: ' rgb(179, 181, 185)', fontSize:12}}>
                                    {item.recipe_info.number_of_likes}
                                </Text>
                                <TouchableOpacity 
                                    onPress ={() => this._addFavorite()}
                                     >
                                    <Icon   name= {'favorite'} color='#f1be38'/>
                                </TouchableOpacity>
                            </View>


                        </View>
                ))}




                </View>
            </ScrollView>
          </View>
       }

        {this.props.horizontal  &&
          <View >
            {this.props.title &&         
                <SectionTitle
                    title={this.props.title}
                    titleButton={this.props.showViewTitleButton}
                />}

            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                automaticallyAdjustContentInsets={false}
            >
                <View style={styles.cardListHorizontal}>
                {
                     this.props.itemList.map((item) => (
                        <View style={styles.cardHorizontal}>
                            <TouchableOpacity
                                key={item.title}
                                onPress={()=>this.props.goToRecipeDetailPage(item)}
                            >
                                <View>
                                    <Image
                                        source={{uri:item.thumbnail_image}}
                                        style={[styles.cardImg, {width: this.props.width, height: this.props.height}]}
                                    />

                                    <View style={styles.detail}>
                                        <Text numberOfLines={this.props.SetNameTwoLine ? 2 : 1} style={{ lineHeight: 20,color: ' rgb(179, 181, 185)', fontSize:15}}>
                                            {item.title}
                                        </Text>
                                        <Text style={{ lineHeight: 20,color: ' rgb(179, 181, 185)', fontSize:15}}>
                                            {item.recipe_info.userName}
                                        </Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            
                            

                            

                            <View style={styles.addFavourite}>
                                <Text numberOfLines={this.props.SetNameTwoLine ? 2 : 1} style={{marginRight: 5, lineHeight: 20,color: ' rgb(179, 181, 185)', fontSize:12}}>
                                    {item.recipe_info.number_of_likes}
                                </Text>
                                <TouchableOpacity 
                                    onPress ={() => this._addFavorite()}
                                     >
                                    <Icon   name= {'favorite'} color='#f1be38'/>
                                </TouchableOpacity>
                            </View>


                        </View>
                ))}




                </View>
            </ScrollView>
          </View>
       }
       

      </View>
    )
  }
}
const styles = {
  cardList: {
    backgroundColor:'#efeff4',
    padding:2,
    paddingVertical:10,
    marginTop: 5,
    marginBottom: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  card:{
    marginHorizontal:2,
    
    marginBottom:10,
    backgroundColor:'white',
    overflow: 'hidden',
    borderRadius: 8,
    height:240,
    
  },

 cardListHorizontal: {
    backgroundColor:'#efeff4',
    padding:2,
    //paddingVertical:10,
    marginTop: 5,
    //marginBottom: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },

  cardHorizontal:{
    marginHorizontal:5,
    
    marginBottom:10,
    backgroundColor:'white',
    overflow: 'hidden',
    borderRadius: 8,
    height:240,
    
  },
  cardImg: {
    //borderRadius: 8,
  },
  detail:{
      padding:12,
      paddingBottom:0,
     // backgroundColor:'yellow',
  },

  addFavourite:{
    padding:10,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    flexDirection: 'row',
    //backgroundColor:'purple',
  }
}

export default RecipeCard;
