import React, { Component } from 'react';
import {
  View,
  ScrollView,
  StatusBar,
  Dimensions
} from 'react-native';

import RecipeCard from '../components/recipeCard';
import SubscribeSection from '../components/subscribeSection';
import Head from '../components/bigHead';
//Games JSON Data
import healthyChoice from './../json/healthyChoice';
import recommend from './../json/recommend';
import fiveMinutesDish from './../json/fiveMinutesDish';
import userInfo from './../json/userInfo';


//import recipe from './../json/healthyChoice';


class MyPersonalPage extends Component{
  constructor(props){
    super(props);
    this.state = {
      healthyChoice: healthyChoice,
      recommend: recommend,
      fiveMinutesDish: fiveMinutesDish,
      userInfo: userInfo,
      //  recipe:recipe,
        
    };
  }
  goToRecipeDetailPage = (data)=>{
    this.props.navigation.navigate('RecipeDetailStack', {...data});
  }

  goToSubPage= (data)=>{
    this.props.navigation.navigate('z', {...data});
  }
  
  render(){
     //             console.log(`recipe title ccc= ${item.thumbnail_image}`);
    return(
      <View style={{backgroundColor:'#efeff4'}}>
          <Head />
          <ScrollView style={styles.container}>
            <View style={{marginVertical: 5, backgroundColor: '#fff',}}>

              <RecipeCard
                    title={'我的食譜'}
                    showViewTitleButton={true}
                    width={180}
                    height={130}
                    goToRecipeDetailPage={this.goToRecipeDetailPage}
                    //itemList={this.state.healthyChoice}
                    itemList={this.state.recommend}
                    horizontal
                />


              <SubscribeSection
                title={'我的訂閱'}
                width={80}
                height={80}
                showViewTitleButton={true}
                SetNameTwoLine={false}
                goToRecipeDetailPage={this.goToSubPage}
                itemList={this.state.userInfo.my_subscription}
              />


                <RecipeCard
                    title={'我的收藏'}
                    showViewTitleButton={true}
                    width={180}
                    height={130}
                    goToRecipeDetailPage={this.goToRecipeDetailPage}
                    //itemList={this.state.healthyChoice}
                    itemList={this.state.healthyChoice}
                    horizontal
                />

              
            
            </View>
          </ScrollView>
      </View>
      
    );
  }
}

const styles = {
  container: {
    //flex: 1,
    //flexWrap: 'wrap',
    height:Dimensions.get('window').height/3*2 + Dimensions.get('window').height/40,
    marginTop: -20,
    backgroundColor:'#efeff4'

  },
}

export default MyPersonalPage;
