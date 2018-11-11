import React from 'react';
import { createStackNavigator } from 'react-navigation';

import Home from './Home';
import Info from './Info';
import FlexPractice from './FlexPractice';


  const Nav = createStackNavigator({
    home: {
        screen: Home,
    },
    info: {
        screen: Info,
    },
    flex: {
        screen: FlexPractice,
    },
  }, {
      initialRouteName: 'home',
  });

  export default Nav;