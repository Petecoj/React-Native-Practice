import React from 'react';
import { createStackNavigator } from 'react-navigation';

import Home from './Home';
import Info from './Info';


  const Nav = createStackNavigator({
    home: {
        screen: Home
    },
    info: {
        screen: Info
    },
    flex: {
        screen: FlexPractice,
        initialScreen: true,
        
    }
  })
  
  export default Nav;