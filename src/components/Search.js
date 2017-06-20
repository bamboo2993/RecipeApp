import React, { Component } from 'react';
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  Image,
  TouchableOpacity,
  Animated,
  LayoutAnimation,
  Dimensions,

  
} from 'react-native';


import { Icon } from 'react-native-elements';
import Filter from './filter';


class Search extends Component{
    componentWillMount() {
        LayoutAnimation.spring();
       
    }



    _onPress() {
        //LayoutAnimation.spring();
        this.state.bTouch == 0 ? this.setState( { h: 150 ,bTouch: 1}) : this.setState( { h: 0, bTouch: 0})
        
        
    }

    

    constructor( props ) {
        super( props );
        this.state = { searchText: '' ,
                        h: 0,
                        w: Dimensions.get('window').width,
                        bTouch: 0,
                        opacity: 0,
                    };

    }


    render() {
        return (

            <View >
                <View style ={styles.viewStyle}>

                    <View style ={styles.searchAreaStyle}>
                        <Icon  name= 'search' color= '#796f47'/>

                        <TextInput
                            style ={ styles.textStyle} 
                            onChangeText ={ (input) => this.setState({searchText: input})} 
                            placeholder= {'Search'} 
                            placeholderTextColor = {'#E3E5CC'}
                            value={this.state.searchText}
                        />

                        
                    </View>
                    
                    <TouchableOpacity 
                        onPress ={() => this._onPress()}
                        style ={{ flex: 1}}
                    >
                    <Icon  name= 'tune' color= '#796f47' />

                    </TouchableOpacity>
                </View>

                <View style ={ {height: this.state.h, backgroundColor: '#f0be38'}}>
                    <Filter
                        title={'範圍'}
                        itemList={[{"title": "包括"},{"title": "只有"}]}
                        bTouch ={this.state.bTouch}
                    />

                    <Filter
                        title={'種類'}
                        itemList={[{"title": "食材"},{"title": "菜名"}]}
                        bTouch ={this.state.bTouch}
                    />

                    <Filter
                        title={'標籤'}
                        itemList={[{"title": "主食"},{"title": "飲料"},{"title": "甜點"},{"title": "嘴饞"}]}
                        bTouch ={this.state.bTouch}
                    />

                    <Filter
                        title={'人數'}
                        itemList={[{"title": "1~2"},{"title": "3~4"},{"title": "5~6"}]}
                        bTouch ={this.state.bTouch}
                    />
                    
                </View>

                
            </View>

        );
    }

    
    
    
};


const styles = StyleSheet.create({
    viewStyle: {

        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor:'#f0be38',
        height: 94,
        paddingLeft: 8.5,
        paddingRight: 8.5,
        alignItems: 'center',
    },


    searchAreaStyle: {
        height: 30,
        width:320,
        backgroundColor: 'white',

        borderRadius: 5,
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center',
    

    },
    searchIconStyle: {
        height: 18,
        width: 18,

    },


    textStyle : {
        width: 280,
        
        fontSize: 15,
        color: '#5a5a5c',
    },

    imgStyle: {
       
        height: 33,
        width: 33,




    },


    menuStyle: {
        
    },

    choiceStyle: {
        flexDirection: 'row',
        paddingTop:3,
        
    },

    text2Style: {
        padding: 2.5,
        alignSelf: 'center',

    }

});


export default Search;
