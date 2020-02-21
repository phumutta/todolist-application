import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Image,} from "react-native";
import Constants from "expo-constants";
import { Container, Header, Title, Button, Icon, Content, InputGroup, Input } from 'native-base';
// import ActionButton from 'react-native-action-button';

import { LinearGradient } from 'expo-linear-gradient';


export default class Forest extends Component {
  onPressBack(){
    this.props.navigation.navigate('Main1')
 }
    render() {
        return (


          <LinearGradient
          colors={['#030B0D', '#4B15B8']}
          style={{
            flex:1,
            // position: 'absolute',
            // left: 0,
            // right: 0,
            // top: 0,
            // height: 500,
          }}
        >
          
          <Header >
              <View style = { styles.MainContainer1}>
                <Button transparent onPress={()=>this.onPressBack()}>
                    <Icon name='close' style={{color:'#DBDBDB'}} />
                </Button>
              </View>
              <View style = { styles.MainContainer2 }>
                <Title>Forest</Title>
              </View>
              <View style={{flex: 1, alignItems: 'center',justifyContent: 'center', left: 15}}>
                {/* <Image style={{width: 20, height: 20}}
                source={{uri: 'https://sv1.picz.in.th/images/2020/01/22/RCoeNt.png' }}
              /> */}
              </View>
            </Header>

            <View style={{flex: 15,alignItems: 'center',justifyContent: 'center' }}>
                <Image style={{ width: 200, height: 152.77, }} source={{ uri: 'https://sv1.picz.in.th/images/2020/01/23/RusVQS.png' }}/>
              </View>

            </LinearGradient>
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
  flexRow: {
    flexDirection: "row"
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
  listArea: {
    backgroundColor: "transparent",
    flex: 1,
    // paddingTop: 16
  },
  sectionContainer: {
    marginBottom: 16,
    marginHorizontal: 16
  },
  sectionHeading: {
    fontSize: 18,
    marginBottom: 8
  },
  nameInput: {
        alignItems: 'center',
        height:50,
        backgroundColor: 'transparent',
        padding: 5,
        margin:5,
        borderRadius: 50,
        borderColor:'white',
        borderWidth : 1,
        fontSize:20,
    },
    buttonText: {
        alignItems: 'center',
        height:50,
        backgroundColor: '#86A8E7',
        padding: 10,
        margin:5,
        borderRadius: 50,
        borderColor:'white',
        borderWidth : 1,
        fontSize:30,
        color:'#ffffff'
    },
    touchableUser:{
      alignItems: 'center',
      padding:10,
      borderRadius: 50,
      borderColor:'white',
      borderWidth : 1,
      margin:5,
      marginTop:2,
    },
    btn:{
      alignItems: 'center',
      height:50,
      backgroundColor: '#86A8E7',
      padding: 10,
      margin:10,
      borderRadius: 50,
      borderColor:'white',
      borderWidth : 1
    },
    txt:{
      textAlign: 'center',
      fontSize:50
    },

    txtIn2: {
      alignItems: 'center',
      width:350,
      height:55,
      backgroundColor: 'transparent',
      padding: 16,
      marginLeft:16,
      marginRight:16,
      borderColor: '#5B3E96',
      borderWidth: 2.2,
      borderRadius: 55,

    },

    btn_register:{
      alignItems: 'center',
      width:50,
      height:50,
      backgroundColor: '#000000',
      padding: 16,
      marginRight:16,
      borderRadius: 50,
      borderColor:'#000000',
      borderWidth : 1
    },

    MainContainer1:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      right: 10  
    },
      
    MainContainer2:{
      flex: 4,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 5
    },
    
    Text2:{
      color:"#5B3E96",
      fontSize: 17,
      marginTop:5,
      marginLeft : 2,
      marginEnd : 2,
      alignItems: 'center',
      justifyContent: 'center'
    },

    photo3: {
      height: 25,
        width: 25,
        marginRight:5,
        marginLeft:5,
        marginTop:5, 
      alignItems: 'center',
      justifyContent: 'center'
    
    
    },

});
