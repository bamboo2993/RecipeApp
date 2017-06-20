import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  ScrollView,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';


import RecipeCard from '../components/recipeCard';
import recipe from './../json/healthyChoice';


class FilterSection extends Component {

    constructor () {
        super()
        this.state = {
            recipe:recipe,
        }
    }


    render () {
        
        return (
            <View style={{flexWrap: 'wrap',}}>
                <RecipeCard
                    width={180}
                    height={130}
                    goToRecipeDetailPage={this.goToRecipeDetailPage}
                    //itemList={this.state.healthyChoice}
                    itemList={this.state.recipe}
                    vertical
                />
            </View>
               

        );
    }

    
        
};


const styles = StyleSheet.create({
    viewStyle: {
        
        flexWrap: 'wrap',
        //paddingTop: 2,
        paddingHorizontal: 20,


    },

    boxStyle: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',


    },


    imgStyle: {
        height: 200,
        width: 155,
        padding: 10,
        
    },

});





export default FilterSection;