import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import StackNavigation from './StackNavigation'

export default class App extends React.Component {
  render() {
    return (
        <View style={{flex:1,marginTop:10}}>
          <StackNavigation/>
        </View>
    );
  }
}
