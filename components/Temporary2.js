import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import StackNavigation from './StackNavigation'
import Group from './Group'

export default class App extends React.Component {
  render() {
    return (
        <View style={{flex:1,marginTop:10}}>
          <Group/>
        </View>
    );
  }
}
