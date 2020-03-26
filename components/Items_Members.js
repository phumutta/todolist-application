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
import TouchableScale from 'react-native-touchable-scale';
// import LinearGradient from 'react-native-linear-gradient';
import { Avatar } from 'react-native-elements';
// import AvatarGroup from '@material-ui/lab/AvatarGroup';
// import { AvatarGroup } from '@material-ui/lab';

// import Avatar from '@material-ui/core/Avatar';
// import AvatarGroup from '@material-ui/lab/AvatarGroup';
export default class Items_Members extends React.Component {
  state = {
    items: [],
    email: '',
     group: '',
  };

  onFocusFunction = async () => {
    this.setState({ email: await AsyncStorage.getItem('@email') })
    this.setState({ group: await AsyncStorage.getItem('@group') })
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
    database.readIMGUserGroup(this.state.group, this.get_text_success, this.get_text_fail);
    
  }
  // onPressGroupDetail() {
  //   this.props.navigation.navigate('GroupDetail')
  // }

  onPressRegister(){
    this.props.navigation.navigate('Register')
  }

  render() {
    
    const { items } = this.state;
    const heading = "group";

    if (items === null || items.length === 0) {
      return null;
    }
     console.log(this.state.items)
   
    return (
      
        <Card style={{ flex:0.15, flexDirection: 'row',alignItems:'center',  marginBottom:'2%'}} >

            <Text style={{color:'#666666',fontSize:18,fontWeight:'bold', textAlight:'left', marginLeft: '3%', marginRight:'8%'}}>Members</Text>

            {items.map (({id, email,uri,admin}) => (
                
                <Avatar rounded containerStyle={{marginLeft:'-3%', borderWidth:2, borderColor:'#FFFFFF'}} source={{uri:uri}} activeOpacity={0.7}/>

              ))}
      
        </Card>

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
