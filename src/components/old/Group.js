import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  ScrollView,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';

import {ListItem, List, Divider, Tile, Icon} from 'react-native-elements';


import Recipes from '../json/recipe.json'


class Group extends Component {

    state = {Recipies: [],
             title:''};
    
    componentWillMount() {
        this.setState({ Recipes, title:'健康養身' });
    }

     _addFavorite() {
         if(this.state.bTouch == 0)   this.setState( { _icon: 'favorite' , bTouch: 1})
           
        else   this.setState( {  _icon: 'favorite-border' , bTouch: 0 })
        
        
    }

   goToPageTwo = (SearchResult) => {
    this.props.navigation.navigate('SearchResult', { ...SearchResult });
  };



    constructor( props ) {
        super( props );
        this.state = {  
                        bTouch: 0,
                        _icon: 'favorite-border'
                    };

    }

    render() {

        return (
            <View style ={ {height: 300}}>

            
                <ListItem 
                    key = {0}
                    title = {'健康養身'}
                    RightIcon
                    containerStyle ={ {width : Dimensions.get('window').width /7*3} }
                    titleStyle = {{fontWeight: 'bold', padding: 10, color: '#2E9593'}}
                    onPress={() => this.goToPageTwo(title)}
                />

        

                <Divider />

                <ScrollView horizontal contentContainerStyle ={{ width:790}}>
                    <List style={ {height: 150, width: 130, margin: 10, flexDirection:'row'}}>

                        {this.state.Recipes.map((recipe) => (
                            <View style={ {margin: 3,padding:5}} >

                                <View style={ {flexDirection: 'row'}}>
                                    <Image style={ {height: 120, width: 150 }} source ={{ uri: recipe.image }} />
                                     
                                    <TouchableOpacity 
                                        onPress ={() => this._addFavorite()}
                                        style ={{ justifyContent: 'flex-end'}} >

                                        <Icon style={ { margin: 5, marginLeft: -27, justifyContent: 'flex-end',}}  name= {'favorite'} color='#45aab3'/>
                                   

                                    </TouchableOpacity>
                                
                                
                                </View>

                                <View style={ {height: 50, padding: 10, marginTop:5  }} >
                                    <Text style={ { fontWeight: 'bold' ,fontSize:15, padding:2, color: '#796f47'}} >{recipe.title}</Text>
                                    <Text style={{padding:2, fontSize:11, lineHeight:12, color: '#796f47'}} >{recipe.description}</Text>
                                </View>

                            </View>
                        
                    ))}

                    </List>



                
                </ScrollView>

            </View>

        );
    }
    
};


const styles = StyleSheet.create({
    container: {
        flex: 1,

    },

    picture: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    }

});


export default Group;