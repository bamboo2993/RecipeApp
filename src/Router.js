import React from 'react';
//import { Button, ScrollView } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon, Tile } from 'react-native-elements';

// tab-bar page
import HomeScreen from './pages/HomePage';
import Balance from './pages/BalanceSearchPage';
import LikeScreen from './pages/MyFavouritePage';
import MyPersonalScreen from './pages/MyPersonalPage';


import RecipeDetailScreen from './pages/RecipeDetailPage';

//import SearchResult from './components/SearchResult';
//import RecipeContent from './components/RecipeContent';
//import Subscribe from './components/SubscribePage';

//import All from './components/All';



//tab-bar components for recipe in my favourite
import All from './components/filterSection';
import Ingredient from './components/filterSection';
import Procedure from './components/filterSection';
import Comments from './components/filterSection';


// tab-bar components for recipe detail
import recipeIntro from './components/recipeIntro';
import recipeIngredients from './components/recipeIngredients';
import recipeProcedure from './components/recipeProcedure';
import recipeComment from './components/recipeComment';

//==============================================
// router for recipe detail

export const RecipeDetailStack = StackNavigator({
  RecipeDetailScreen: {
    screen: RecipeDetailScreen,
    navigationOptions: {
      header: ({ state }) => ({
        title: `${state.params.title}`,
        titleStyle: {color: 'white',},
        style:{backgroundColor: '#f0be38'} ,
        right: (
          <Icon
            name='favorite-border'
            iconStyle={{ marginRight: 10, color:'white' }}
            //onPress={() => navigate('DrawerOpen')}
            //onPress={() => onPress}

          />
        ),

        left: (
          <Icon
            name='navigate-before'
            iconStyle={{ marginLeft: 10, color: '#796f47' }}
            //onPress={() => goBack()}
          />
        ),
      })
    },
  },



 },{

});




//===============================================

//recipe detail TabRouter


export const DescriptionStack = StackNavigator({
  Description: {
    screen: recipeIntro,
    headerMode: 'screen',
    headerVisible: false
  },

},{
        headerMode: 'none',
        
    }
);


export const IngredientStack = StackNavigator({
  Ingredient: {
    screen: recipeIngredients,
    headerMode: 'screen',
    headerVisible: false
  },

},{
        headerMode: 'none',
        
    }
);


export const ProcedureStack = StackNavigator({
  Procedure: {
    screen: recipeProcedure,
    headerMode: 'screen',
    headerVisible: false
  },

},{
    headerMode: 'none',}
);


export const CommentStack = StackNavigator({
  Comments: {
    screen: recipeComment,
    headerMode: 'screen',
    headerVisible: false
  },

},{
        headerMode: 'none',
        
    }
);

//-----------------------------

export const RecipeDetailRouter = TabNavigator(
  {
    DescriptionStack: {
      screen: DescriptionStack,
      navigationOptions: {
        tabBar: {
          label: '簡介',
        },
      },
    },

    IngredientStack: {
      screen: IngredientStack,
      navigationOptions: {
        tabBar: {
          label: '食材',
        },
      },
    },


    ProcedureStack: {
      screen: ProcedureStack,
      navigationOptions: {
        tabBar: {
          label: '步驟',
        },
      },
    },


    CommentStack: {
      screen: CommentStack,
      navigationOptions: {
        tabBar: {
          label: '留言',
        },
      },
    },



  },  

  {
    animationEnabled: 'true',
    tabBarPosition: 'top',
    swipeEnabled: 'true',
    tabBarOptions: {
      activeTintColor: 'white',
      inactiveTintColor: '#796f47',
      labelStyle: { fontSize: 15, padding:10 },
      style: {  backgroundColor:'#f0be38', marginTop:0},
      indicatorStyle:{
        backgroundColor:'white'
      }
    }


    

  }
);







//---------------------------------------------------

export const HomeStack = StackNavigator({
  HomeScreen: {
    screen: HomeScreen,
  },

  RecipeDetailStack: {
    screen: RecipeDetailStack,
  },


},{
      headerMode: 'none',
        
  }

);



export const BalanceStack = StackNavigator({
  Balance: {
    screen: Balance,
    navigationOptions: {
      header: ({ navigate }) => ({
        title: '秤量器',
        titleStyle: {color: '#796f47',},
        style:{backgroundColor: '#f1cc5e'} ,
        right: (
            <Icon
              name='create'
              iconStyle={{ marginRight: 10, color:'#796f47' }}
              //onPress={() => navigate('DrawerOpen')}
             // onPress={() => onPress}

            />
        ),
      })
    },
  },





},{
    headerMode: 'none',
        
  }

);





export const LikeStack = StackNavigator({
  LikeScreen: {
    screen: LikeScreen,
    navigationOptions: {
      header: ({ navigate }) => ({
        title: '收藏',
        titleStyle: {color: '#796f47',},
        style:{backgroundColor: '#f1cc5e'} ,
        right: (
          <Icon
            name='create'
            iconStyle={{ marginRight: 10, color:'#796f47' }}
            //onPress={() => navigate('DrawerOpen')}
            //onPress={() => onPress}

          />
        ),
      })
    },
  },
  RecipeDetailStack: {
    screen: RecipeDetailStack,
  },


},{
      headerMode: 'none',}
);



export const MyPersonalStack = StackNavigator({
  MyPersonalScreen: {
    screen: MyPersonalScreen,
    navigationOptions: {
      header: ({ navigate }) => ({
        title: '我',
        titleStyle: {color: '#796f47',},
        style:{backgroundColor: '#f1cc5e'} ,
        right: (
          <Icon
            name='create'
            iconStyle={{ marginRight: 10, color:'#796f47' }}
            //onPress={() => navigate('DrawerOpen')}
            //onPress={() => onPress}

          />
        ),
      })
    },
  },

},
{
  headerMode: 'none',}
);


export const CreateStack = StackNavigator({
  CreateScreen: {
    screen: MyPersonalScreen,
    navigationOptions: {
      header: ({ navigate }) => ({
        title: '寫食譜',
        titleStyle: {color: '#796f47',},
        style:{backgroundColor: '#f1cc5e'} ,
        right: (
          <Icon
            name='create'
            iconStyle={{ marginRight: 10, color:'#796f47' }}
            //onPress={() => navigate('DrawerOpen')}
            //onPress={() => onPress}

          />
        ),
      })
    },
  },

},{
        headerMode: 'none',
        
});




export const TabRouter = TabNavigator(
  {
    HomeStack: {
      screen: HomeStack,
      navigationOptions: {
        tabBar: {
          label: '首頁',
          icon: ({ tintColor }) => <Icon name="home" size={35} color={tintColor} />
        },
      },
    },
 
  BalanceStack: {
      screen: BalanceStack,
      navigationOptions: {
        tabBar: {
          label: '秤量器',
          icon: ({ tintColor }) => <Icon name= {require( "./assets/balance-icon.png" )} size={35} color={tintColor} />
        },
      },
    },

  CreateStack: {
      screen: CreateStack,
      navigationOptions: {
        tabBar: {
          label: ' ',
          icon: ({ tintColor }) => <Icon name= "add-circle" size={35} color={'#f0be38'} />
        },
        
      },
    },


  
    LikeStack: {
      screen: LikeStack,
      navigationOptions: {
        tabBar: {
          label: '收藏',
          icon: ({ tintColor }) => <Icon name="favorite" size={35} color={tintColor} />
        },
      },
    },


    MyPersonalStack: {
      screen: MyPersonalStack,
      navigationOptions: {
        tabBar: {
          label: '我',
          icon: ({ tintColor }) => <Icon name="person" size={35} color={tintColor} />
        },
      },
    },

  },  
  {
    animationEnabled: 'true',
    tabBarOptions: {
    activeTintColor: '#f0be38',
    inactiveTintColor: ' rgb(179, 181, 185)',
    style: { backgroundColor: '#efeff4',}


    }

  }
);














//======================================
//router for my favourate filer


export const FilterStack = StackNavigator({
  All: {
    screen: All,
    headerMode: 'screen',
    headerVisible: false
  },

},{
    headerMode: 'none',
        
    }
);





export const FavoriteRouter = TabNavigator(
  {
    AllStack: {
      screen: FilterStack,
      navigationOptions: {
        tabBar: {
          label: 'All',
        },
      },
    },

    MainDishStack: {
      screen: FilterStack,
      navigationOptions: {
        tabBar: {
          label: '主食',
        },
      },
    },


    DissertStack: {
      screen: FilterStack,
      navigationOptions: {
        tabBar: {
          label: '甜點',
        },
      },
    },


    DrinkStack: {
      screen: FilterStack,
      navigationOptions: {
        tabBar: {
          label: '飲料',
        },
      },
    },

    SnackStack: {
      screen: FilterStack,
      navigationOptions: {
        tabBar: {
          label: '嘴饞',
        },
      },
    },  

    

  },  

  {
    animationEnabled: 'true',
    tabBarPosition: 'top',
    swipeEnabled: 'true',
    tabBarOptions: {
      activeTintColor: 'white',
      inactiveTintColor: '#796f47',
      labelStyle: { fontSize: 15, padding:10 },
      style: {  backgroundColor:'#f0be38',}

    }


    

    

  }
);






