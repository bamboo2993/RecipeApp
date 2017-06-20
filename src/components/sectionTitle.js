import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Icon , Divider} from 'react-native-elements';

class ViewTitle extends Component{
  constructor(props){
    super(props);
    this.state = {};
  }
  render(){
    return(    
      <View style={{backgroundColor:'#efeff4'}}>
      {this.props.title && this.props.titleButton &&
        <View style={styles.headerWrapper}>
          
          <TouchableOpacity style={styles.headerBtnWrapper}>
              <Text style={styles.headerTitle}>{this.props.title}</Text>
               <Icon style={{paddingVertical: 5,paddingHorizontal: 10}} name= 'chevron-right' color= '#f1be38' />
          </TouchableOpacity>

        </View>
      }


      {this.props.title &&  !this.props.titleButton &&
        <View style={styles.headerWrapper}>
          <Text style={styles.headerTitle}>{this.props.title}</Text>
        </View>
      }

                  <Divider />
      </View>
    )
  }
}

const styles = {
  headerWrapper: {
    padding: 12,
    height: 53,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    lineHeight: 32,
    color: '#5a5a5c',
    fontWeight: 'bold',
    fontSize:18
  },
  headerBtnWrapper: {
    flexDirection: 'row',
    paddingVertical: 5,
    paddingHorizontal: 10,

    
  },
}

export default ViewTitle;
