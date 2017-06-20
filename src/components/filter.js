import React, { Component } from 'react';
import {
  View,
  Text, 
  TouchableOpacity,
} from 'react-native';

import FilterButton from './filterButton';

class Filter extends Component{

  constructor(props){
    super(props);
    this.state = {

    };
  }


  render(){

    return(
        
      <View style={ styles.Wrapper}>


          <View style={{padding: 5,}}>
              <Text style={{fontSize:15}}>{this.props.title}</Text>
          </View>
          <View style={styles.selection}>
              {
                this.props.itemList.map((item) => (
                    <View>
                        <FilterButton
                           title={item.title}
                           bTouch ={this.props.bTouch}  />

                    </View>
                    
            ))}
               
          </View>


      </View>
    )
  }
}

const styles = {
  Wrapper: {
    paddingHorizontal: 12,
    flexDirection: 'row',
  },
  selection:{
      flexDirection: 'row',
      paddingHorizontal:10
  }

}

export default Filter;
