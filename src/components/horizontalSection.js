import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { Icon} from 'react-native-elements';
import SectionTitle from './sectionTitle';
//import Tags from './tags';
class HorizontalGroup extends Component{
  constructor(props){
    super(props);
    this.state = {};
  }
  render(){
    
    return(
      <View style={{paddingVertical:10, backgroundColor:'#efeff4'}}>
        <SectionTitle
          title={this.props.title}
          titleButton={this.props.showViewTitleButton}
        />

          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            automaticallyAdjustContentInsets={false}
          >
            <View style={styles.cardList}>
              {
                
                this.props.itemList.map((item) => (

                  <View style={styles.card}>
                                     
                    <View style={ {flexDirection: 'row'}}> 
                      <TouchableOpacity
                        key={item.title}
                        onPress={()=>this.props.goToRecipeDetailPage(item)}
                      >
                        <Image
                          source={{uri:item.thumbnail_image}}
                          style={[styles.cardImg, {width: this.props.width, height: this.props.height}]}
                        />
                      </TouchableOpacity>


                      <TouchableOpacity 
                        onPress ={() => this._addFavorite()}
                        style ={{ justifyContent: 'flex-end'}} >
                        <Icon style={ { margin: 5, marginLeft: -27, justifyContent: 'flex-end',}}  name= {'favorite'} color='#f1be38'/>
                      </TouchableOpacity>

                    </View>
                    


                    <TouchableOpacity
                      key={item.title}
                      onPress={()=>this.props.goToRecipeDetailPage(item)}
                    >
                      
                      <View style={[styles.cardContent, {width: this.props.width}]}>
                        <Text numberOfLines={this.props.SetNameTwoLine ? 2 : 1} style={{marginRight: 5, lineHeight: 20,color: ' rgb(179, 181, 185)', fontSize:15}}>
                          {item.title}
                        </Text>
                        

                      </View>
                    </TouchableOpacity>
                  </View>
                    
              ))}
            </View>
          </ScrollView>

      </View>
    )
  }
}
const styles = {
  cardList: {
    backgroundColor:'#efeff4',
    marginTop: 5,
    marginBottom: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: 12,
    justifyContent: 'space-between'
  },
  card:{
    backgroundColor:'#efeff4',
    marginRight: 12,
    overflow: 'hidden'
  },
  cardImg: {
    borderRadius: 5,
  },
  cardContent: {
    paddingVertical: 5,
    paddingHorizontal:5,
    
  },
}

export default HorizontalGroup;
