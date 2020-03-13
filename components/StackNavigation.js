import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import GroupDetail from './GroupDetail'
import Temporary2 from './Temporary2'


import { createStackNavigator } from 'react-navigation-stack';

import { createAppContainer } from 'react-navigation';

const stack = createStackNavigator({
  
GroupDetail:{screen:GroupDetail,navigationOptions: {
  title: 'GroupDetail',headerShown:false}},
  Temporary2:{screen:Temporary2,navigationOptions: {
    title: 'Temporary2',headerShown:false}},

});

export default createAppContainer(stack);
