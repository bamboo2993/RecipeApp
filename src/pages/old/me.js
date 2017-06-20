import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';

import {  Avatar, Icon} from 'react-native-elements';
import Group from '../components/Group'


class Me extends Component {

    constructor () {
        super()
        this.state = {

        }

    }


    render () {
        
        return (

            <ScrollView  >
                <StatusBar />
                <View style ={{ height:330, justifyContent: 'center', alignItems: 'center', backgroundColor: 'grey'}}> 

                    <View style={{
                        // backgroundColor:'yellow',
                        flexDirection:'row' , 
                        width : 150, height : 150,
                        justifyContent: 'center', alignSelf: 'center'}}>
                        <Avatar
                            xlarge
                            rounded
                            source ={require("../assets/account_thumbnail/Tom.jpg")}
                            containerStyle ={{flex:1,}}
                        />
                        <TouchableOpacity 
                            onPress ={() => this.onPress}
                            style ={{flex:1, alignSelf: 'flex-end', justifyContent: 'flex-end',position:'absolute'}}
                        >

                            <Icon style ={{marginLeft:80}} size ={32} name= {'photo-camera'} color='white'/>
                                   

                        </TouchableOpacity>
                        
                    </View>
                       
                    <View style ={{/*backgroundColor: 'yellow',*/ width:330,  alignItems: 'center'}}>
                        <Text style ={{fontWeight: 'bold',fontSize: 24, padding: 10, color:'white'}}> 小強 </Text>
                        <Text style ={{fontSize: 15, padding: 5, color: 'white'}}>吃貨一個謝謝</Text>
                            
                        
                        <TouchableOpacity 
                            onPress ={() => this.onPress}
                            style ={{alignSelf: 'flex-end'}}
                        >

                            <Icon name= 'settings' style ={{alignSelf:'flex-end'}} color= '#f1cc5e' />
                                   

                        </TouchableOpacity>
                        
                    </View>
                        
                </View>
                        
                <View style ={{justifyContent: 'space-around',alignItems: 'center',height: 80, flexDirection: 'row', backgroundColor:'white'}}>
                    <View style ={{padding:5,}}>
                        <Text style ={{ fontSize: 18,fontWeight: 'bold', color:'#45aab3'}}> 食譜 </Text>
                        <Text style ={{ fontSize: 15, alignSelf: 'center', padding: 4, color:'#cbe1dc'}}> 18 </Text>
                    </View>

                    <View style ={{padding:5,}}>
                        <Text style ={{ fontSize: 18,fontWeight: 'bold', color:'#45aab3'}}> 收藏</Text>
                        <Text style ={{ fontSize: 15, alignSelf: 'center', padding: 4, color:'#cbe1dc'}}> 20 </Text>
                    </View>

                    <View style ={{padding:5,}}>
                        <Text style ={{ fontSize: 18,fontWeight: 'bold', color:'#45aab3'}}> 訂閱 </Text>
                        <Text style ={{ fontSize: 15, alignSelf: 'center', padding: 4, color:'#cbe1dc'}}> 10 </Text>
                    </View>

                    <View style ={{padding:5,}}>
                        <Text style ={{ fontSize: 18,fontWeight: 'bold', color:'#45aab3'}}> 粉絲 </Text>
                        <Text style ={{ fontSize: 15, alignSelf: 'center', padding: 4, color:'#cbe1dc'}}> 9 </Text>
                    </View>
                </View>

                <Group />

                    
            </ScrollView>

        );
    }

    
        
};


const styles = StyleSheet.create({
    container: {
        flex: 1,

        paddingTop: 25,

    },

});






export default Me;