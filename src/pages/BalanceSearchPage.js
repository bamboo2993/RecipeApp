import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  Text,
} from 'react-native';

import Ingredients from '../components/ingredients';

class BalanceSearchPage extends Component {
      static route = {
        navigationBar: {
        visible: false,
        },
      };

    constructor () {
        super()
        this.state = {

        }

    }



    render () {
        const{container,buttonText,button,image}=styles;
        return (
            <View style={container}>
                <Image style={image} source={require('../assets/balance.png')}>
                    <ScrollView style={{marginTop:30}}>
                        <Ingredients/>
                        <Ingredients/>
                        <Ingredients/>
                    </ScrollView>
                    <TouchableOpacity style={button} onPress={function(){ console.log('按到我了') }}>
                        <Text style={buttonText}>Weigh!</Text>
                    </TouchableOpacity>
                </Image>
            </View>

        );
    }

    
        
}


const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#efeff4',
  },
  button: {
    margin: 40,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#406E9F',
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  image:{
    width:365,
    height:580,
    position:'absolute',
    top:45
  }

});

export default BalanceSearchPage;