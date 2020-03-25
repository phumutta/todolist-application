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
import database from './Database3';
import { CardViewWithImage, CardViewWithIcon } from 'react-native-simple-card-view'
// import { Card } from 'react-native-shadow-cards';
// import Tomorrow from "./Tomorrow";
import TouchableScale from 'react-native-touchable-scale';
// import LinearGradient from 'react-native-linear-gradient';
import { Avatar } from 'react-native-elements';
import CardView from 'react-native-cardview'
import { Card } from "@paraboly/react-native-card";
export default class Item_note extends React.Component {
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
    database.readNote(this.state.email, this.get_text_success, this.get_text_fail);
    
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
      <View style={{marginBottom:"21%"}}> 
          
          {items.map (({id,note,time, time2, time3}) => (
        //      <CardViewWithImage
        //      source={ {uri: 'https://placeimg.com/640/480/nature'} }
        //      content={ note }
        //      title={ time }
        //      imageWidth={ '0%' }
        //      imageHeight={ '0%' }
        //      roundedImage={ false }
        //      onPress={() => console.log("CardViewWithImage Clicked!")}
        //      width={"40%"}
        //      contentFontSize={'13'}
        //     //  bgColor={'#1f1f1f'}
        //     //  shadowColor={'#1f1f1f'}
        //  />
        //  <Card
        //     iconDisable
        //     title= {time}
        //     content={ note }
        //     content="Main Content"
        //     bottomRightText="30"
        //     onPress={() => console.log("CardViewWithImage Clicked!")}
        //   />

          <Card
              title={time}
              titleColor="#4B15B8"
              iconName="home"
              defaultTitle=""
              iconType="Entypo"
              // iconSize="16"
              iconDisable={true}
              defaultContent=""
              onPress={() => console.log("CardViewWithImage Clicked!")}
              topRightText="03/26/2020"
              bottomRightText="TH"
              content={ note }
              style={styles.container}
              // containerHeight={20}
              // borderRadius={15}

            />


          ))}
        
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    padding:'3%',
    margin:'2%',
    borderRadius:16,
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
