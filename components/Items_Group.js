import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput, Image,
  TouchableOpacity,
  AsyncStorage
} from "react-native";
import * as firebase from 'firebase';
import '@firebase/firestore';
import Constants from "expo-constants";

import * as SQLite from 'expo-sqlite';
import database from './Database';

import { Card } from 'react-native-shadow-cards';
// import Tomorrow from "./Tomorrow";



export default class Items_Group extends React.Component {
  state = {
    items: [],
    email: '',
    // group: '',
  };

  onFocusFunction = async () => {
    this.setState({ email: await AsyncStorage.getItem('@email') })
    this.update();
  }

  componentDidMount() {
    this.onFocusFunction();
  }

  get_text_success = async (arr) => {
    this.setState({ items: arr })
    console.log(this.state.items)
  }

  get_text_fail = async () => {
    // console.log(error);
  }

  update() {
    // console.log(this.state.email)
    database.readMyGroup(this.state.email, this.get_text_success, this.get_text_fail);
    
  }

  render() {
    
    const { items } = this.state;
    const heading = "group";

    if (items === null || items.length === 0) {
      return null;
    }
     console.log(this.state.items)
   
    return (
      <View>
      {items.map (({id, email,uri}) => (

    
      <TouchableOpacity style={{height:75,flexDirection:"row",backgroundColor:"#ffffff",marginTop:"2%"}}>
          <TouchableOpacity style={{ flex:1, alignContent: 'center',justifyContent: 'center',marginLeft: "5%"}}>
             <Image style={{  alignContent: 'center',alignItems: 'center',justifyContent: 'center',marginLeft: "5%", width: 65, height: 65,borderRadius:10 }} source={{ uri: uri }} />   
          </TouchableOpacity>
          <TouchableOpacity key={id} style={{flex:3, backgroundColor:'#ffffff',alignItems: 'flex-start',justifyContent: 'center', alignContent:'center'}}>
              <Text style={{fontSize:30 , color:'#666666',marginLeft:'3%'}}>{id}</Text>
          </TouchableOpacity>

      </TouchableOpacity>

      
      ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    paddingTop: Constants.statusBarHeight
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center"
  },
  input: {
    borderColor: "#4630eb",
    borderRadius: 4,
    borderWidth: 1,
    flex: 1,
    height: 48,
    margin: 16,
    padding: 8
  },
});
