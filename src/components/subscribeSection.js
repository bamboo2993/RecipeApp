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
class SubscribeSection extends Component{
  constructor(props){
    super(props);
    this.state = {
        img: ''
    };
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
                {this.props.itemList.map((item) => (
                    
                    <View style={styles.card}>

                        <TouchableOpacity
                            key={item.title}
                            onPress={()=>this.props.goToRecipeDetailPage(item)}
                        >
                            <View>
                                <Image
                                    //source={require(item.thumbnail_image)}
                                    source={{uri:item.thumbnail_image}}
                                    style={[styles.cardImg, {width: this.props.width, height: this.props.height}]}
                                />
                                <Text numberOfLines={this.props.SetNameTwoLine ? 2 : 1} style={styles.textstyle}>
                                    {item.userName}
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
   // borderRadius: 50,
  },
  textstyle: {
    paddingVertical: 5,
    marginRight: 5, 
    lineHeight: 20,
    color: ' rgb(179, 181, 185)', 
    fontSize:15,
    textAlign:'center'
  },
}

export default SubscribeSection;
