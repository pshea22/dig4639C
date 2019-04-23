import React from "react";
import { TabNavigator } from "react-navigation";

import Home from '../views/Home';
import First from '../views/First';

export const Tab = TabNavigator({
  Home: {
    screen: Home,
  },
  First: {
    screen: First,
  }
}, {
  tabBarPosition: 'bottom',
  swipeEnabled: true,
  tabBarOptions: {
    activeTintColor: '#f2f2f2',
    activeBackgroundColor: "#2EC4B6",
    inactiveTintColor: '#666',
    labelStyle: {
      fontSize: 22,
      padding: 12
    }
  }
});