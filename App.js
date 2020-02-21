import React from 'react';
import { View,Text,Image ,StyleSheet,TouchableOpacity, Alert} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {Card} from 'react-native-shadow-cards';
import { Container, Header, Title, Button, Icon } from 'native-base';
 import Main1 from './components/main'
// import Main2 from './components/main2'
// import Setting from './components/Setting'
// import Account from './components/Account'
// import AccountLogin from './components/AccountLogin'
 import Today from './components/Today'

import StackNavigation from './components/StackNavigation'
import SwitchNavigator from './components/SwitchNavigator'
import Page1 from './components/Page1'

import Setting from './components/Setting'
import Account from './components/Account'
import AccountLogin from './components/AccountLogin'
import Forest from './components/Forest'
import Page3 from './components/Page3'
import Time from './components/Time'
import Today2 from './components/Today2'
import Graph from './components/Graph'
export default class App extends React.Component {
  render() {
    return (
        <View style={{flex:1}}>
          {/* <Today/> */}
          {/* <Page1/> */}
          {/* <Main1/> */}
          {/* <Account/> */}
          {/* <Page3/> */}
          <SwitchNavigator/>

          
          
          
          {/* <Today2/> */}
        </View>
    );
  }
}
