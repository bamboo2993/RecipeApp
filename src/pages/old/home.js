import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  ScrollView
} from 'react-native';

import SearchBar from '../components/Search';
import Banner from '../components/Banner';
import Group from '../components/Group'


// Make a component
class Home extends Component {
    //state = { albums: [] };

    //componentWillMount() {
   //     this.setState({ albums });
    //}



    render() {

        return (
        <ScrollView style ={styles.container}>
            <StatusBar barStyle ='light-content' />

            <SearchBar />
            <Banner />
            <Group />
            <Group />
            
        </ScrollView>

        );

    }
    
    
}


const styles = StyleSheet.create({
    container: {
        flex: 1,

    },

});


export default Home;