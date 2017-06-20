import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  ScrollView
} from 'react-native';

import { FavoriteRouter } from '../Router';

class MyFavouritePage extends Component {

    constructor () {
        super()
        this.state = {

        }

    }



    render () {
        
        return (
            <View  style ={styles.container}>
                <StatusBar  />
                <FavoriteRouter
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
        paddingTop:24,
        backgroundColor:'#f0be38',

    },

});

export default MyFavouritePage;