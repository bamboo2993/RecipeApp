import React, { Component } from 'react';
import {
  View,
  Text, 
  TouchableOpacity,
} from 'react-native';


class FilterButton extends Component{
  state = { bTouch: 0,
          textColor:''};

  constructor(props){
    super(props);
    this.state = {
        textColor:'#796f47',
        bTouch: 0,
    };
  }


    _onPress() {
        this.state.bTouch ?   this.setState( { textColor: '#796f47', bTouch: 0}) : this.setState( { textColor: 'white', bTouch: 1,}) 
        
    }


  render(){

    return(
      <View>
      {this.props.title &&
        <View style={[styles.Wrapper]}>
          <TouchableOpacity 
            style={styles.headerBtnWrapper}
            onPress ={() => this._onPress()}>
            <Text style={{color: this.state.textColor,fontSize:15}}>{this.props.title}</Text>
          </TouchableOpacity>
        </View>
      }

      </View>
    )
  }
}

const styles = {
  Wrapper: {
    padding: 5,
    width: 70,
    flexWrap: 'wrap',
//    backgroundColor:'red',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    
  },
  headerTitle: {
    lineHeight: 32,
    
    //color: this.state.textColor,

  },

}

export default FilterButton;
