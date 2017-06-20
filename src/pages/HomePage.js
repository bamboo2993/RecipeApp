import React, { Component } from 'react';
import {
  View,
  ScrollView,
  StatusBar,
  Dimensions
} from 'react-native';
import HorizontalSection from './../components/horizontalSection';
import Banner from './../components/Banner';
import SearchBar from '../components/Search';
//Games JSON Data
import healthyChoice from './../json/healthyChoice';
import recommend from './../json/recommend';
import fiveMinutesDish from './../json/fiveMinutesDish';
//import recipe from './../json/healthyChoice';


class HomePage extends Component{
  constructor(props){
    super(props);
    this.state = {
      healthyChoice: healthyChoice,
      recommend: recommend,
      fiveMinutesDish: fiveMinutesDish,

      //  recipe:recipe,
        
    };
  }
  goToRecipeDetailPage = (data)=>{
    this.props.navigation.navigate('RecipeDetailStack', {...data});
  }

  
  render(){
     //             console.log(`recipe title ccc= ${item.thumbnail_image}`);
    return(
      <View style={{backgroundColor:'#efeff4'}}>
          <StatusBar barStyle ='dark-content' color='#f0be38'/>
          <SearchBar />
          <ScrollView style={styles.container}>
            <View style={{marginVertical: 5, backgroundColor: '#fff',}}>



              <Banner
                title={'熱門推薦'}
                showViewTitleButton={true}
                SetNameTwoLine={true}
                goToRecipeDetailPage={this.goToRecipeDetailPage}
                itemList={this.state.recommend}
              />

              <HorizontalSection
                title={'健康養身'}
                width={180}
                height={150}
                showViewTitleButton={true}
                SetNameTwoLine={true}
                goToRecipeDetailPage={this.goToRecipeDetailPage}
                itemList={this.state.healthyChoice}
              />


              <HorizontalSection
                title={'五分鐘上菜'}
                width={180}
                height={150}
                showViewTitleButton={true}
                SetNameTwoLine={true}
                goToRecipeDetailPage={this.goToRecipeDetailPage}
                itemList={this.state.fiveMinutesDish}
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
    flexWrap: 'wrap',
    marginTop: -20,
    backgroundColor:'#efeff4',

    height:Dimensions.get('window').height/5*4+ Dimensions.get('window').height/40,
  },
}

export default HomePage;
