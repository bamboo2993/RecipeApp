import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  ScrollView
} from 'react-native';

import { ButtonGroup} from 'react-native-elements';

import SearchResult from '../components/SearchResult'
//import Card from '../components/Cards'


import { FavoriteRouter } from '../Router';

class Like extends Component {

    constructor () {
        super()
        this.state = {

        }

    }



    render () {
        
        return (
            <View  style ={styles.container}>
                <StatusBar  />
                <FavoriteRouter />
            </View>

        );
    }

    
        
}


const styles = StyleSheet.create({
    container: {
        flex: 1,


    },

});

export default Like;