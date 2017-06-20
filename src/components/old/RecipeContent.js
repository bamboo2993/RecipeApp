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

import { Card, Icon} from 'react-native-elements';

import SearchResult from '../components/SearchResult'



class List extends Component {

    constructor () {
        super()
        this.state = {
        }
    }


    render () {
        
        return (
                <ScrollView Style ={styles.viewStyle}>

                    <View style={styles.boxStyle}>
                        <Card  
                            containerStyle={styles.imgStyle} 
                            image= { require( '../assets/recipe_img/1.jpg')}
                            imageStyle={{height: 100}}	>
                            <Text>地瓜西谷米 </Text>
                            <Text style={{fontSize: 9,opacity:0.7,paddingTop:15}}>小強 </Text>
                            <TouchableOpacity 
                            onPress ={() => this.onPress}
                            style ={{ alignItems: 'flex-end', alignSelf: 'flex-end', position:'absolute',marginTop:35, padding:2.5}} >

                                    <Icon name= 'favorite' color= 'gray' size= '30'  />
                            </TouchableOpacity>

                        </Card>

                        <Card  
                            containerStyle={styles.imgStyle} 
                            image= { require( '../assets/recipe_img/3.jpg')}
                            imageStyle={{height: 100}}	>
                            <Text>香菇雞湯 </Text>
                            <Text style={{fontSize: 9,opacity:0.7,paddingTop:15}}>小強 </Text>
                            <TouchableOpacity 
                            onPress ={() => this.onPress}
                            style ={{ position: 'absolute', alignItems: 'flex-end', alignSelf: 'flex-end',marginTop:35, padding:2.5}} >

                                    <Icon name= 'favorite' color= 'gray' size= '30'  />
                            </TouchableOpacity>

                        </Card>


                        <Card  
                            containerStyle={styles.imgStyle} 
                            image= { require( '../assets/recipe_img/5.jpg')}
                            imageStyle={{height: 100}}	>
                            <Text>芒果優格雪酪</Text>
                            <Text style={{fontSize: 9,opacity:0.7,paddingTop:15}}>小強 </Text>
                            <TouchableOpacity 
                            onPress ={() => this.onPress}
                            style ={{ position: 'absolute', alignItems: 'flex-end', alignSelf: 'flex-end',marginTop:35, padding: 2.5}} >

                                    <Icon name= 'favorite' color= 'gray' size= '30'  />
                            </TouchableOpacity>

                        </Card>


                        <Card  
                            containerStyle={styles.imgStyle} 
                            image= { require( '../assets/recipe_img/2.jpg')}
                            imageStyle={{height: 100}}	>
                            <Text>蔥爆杏鮑菇</Text>
                            <Text style={{fontSize: 9,opacity:0.7,paddingTop:15}}>小強 </Text>
                            <TouchableOpacity 
                            onPress ={() => this.onPress}
                            style ={{ position: 'absolute', alignItems: 'flex-end', alignSelf: 'flex-end',marginTop:35, padding: 2.5}} >

                                    <Icon name= 'favorite' color= 'gray' size= '30'  />
                            </TouchableOpacity>

                        </Card>


                        <Card  
                            containerStyle={styles.imgStyle} 
                            image= { require( '../assets/recipe_img/4.jpg')}
                            imageStyle={{height: 100}}	>
                            <Text>日式馬鈴薯沙拉</Text>
                            <Text style={{fontSize: 9,opacity:0.7,paddingTop:15}}>小強 </Text>
                            <TouchableOpacity 
                            onPress ={() => this.onPress}
                            style ={{ position: 'absolute', alignItems: 'flex-end', alignSelf: 'flex-end',marginTop:35, padding: 2.5}} >

                                    <Icon name= 'favorite' color= 'gray' size= '30'  />
                            </TouchableOpacity>

                        </Card>

        
            
            
            
                    </View>
                </ScrollView>

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





export default List;