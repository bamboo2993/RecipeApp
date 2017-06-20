import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
} from 'react-native';

import { RecipeDetailRouter } from '../Router';

class RecipeDetailPage extends Component {

    constructor () {
        super()
        this.state = {

        }

    }



    render () {
        {console.log(`title===${this.props.navigation.state.params.title}`)}
        return (
            <View  style ={styles.container}>
                <StatusBar  />
                <RecipeDetailRouter
                    screenProps={
                        /* this prop will get passed to the screen components as this.props.screenProps */
                        this.props.navigation.state.params }
                />
            </View>

        );
    }

    
        
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        
        backgroundColor:'#efeff4',

    },

});

export default RecipeDetailPage;