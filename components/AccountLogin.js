import React, { Component } from 'react';
import { Container, Header, Title, Button, Icon, Content, InputGroup, Input } from 'native-base';
import { StyleSheet, Text, View,TouchableOpacity,Image, Alert, TextInput, ScrollView } from 'react-native';
import Constants from "expo-constants";

export default class Setting extends React.Component {


  onPressBack(){
    this.props.navigation.navigate('Main1')
 }
  render() {
    return (
        <Container>
          <Header >
              <View style = { styles.MainContainer1}>
                <Button transparent onPress={()=>this.onPressBack()}>
                    <Icon name='ios-arrow-back' style={{color:'#CCCCCC'}} />
                </Button>
              </View>
              <View style = { styles.MainContainer2 }>
                <Title>Account Details</Title>
              </View>
              <View style={{flex: 1, alignItems: 'center',justifyContent: 'center', left: 15}}>
                {/* <Image style={{width: 20, height: 20}}
                source={{uri: 'https://sv1.picz.in.th/images/2020/01/22/RCoeNt.png' }}
              /> */}
              </View>
            </Header>

        <View style={{flex:1,flexDirection:'column',backgroundColor:'#F6F6F6'}} >

          <TouchableOpacity style={{flex:0.08,flexDirection:'row',marginTop:20,backgroundColor:'#ffffff', alignItems:'center'}} >
            <Text style={{flex:1, fontSize:20,marginLeft:30}}>Avatar</Text>
            <Image source={{ uri: "https://sv1.picz.in.th/images/2020/01/23/RuAgpJ.png" }} style={styles.photo4} />
          </TouchableOpacity>

          <TouchableOpacity style={{flex:0.08,flexDirection:'row',backgroundColor:'#ffffff',alignItems:'center'}} >
            <Text style={{flex:1, fontSize:20,marginLeft:30}}>Username</Text>
            <Text style={{flex:1, fontSize:20,marginLeft:20, color:"#C4C4C4",}}>phattaraphon.c@ku.th</Text>
            <Image source={{ uri: "https://sv1.picz.in.th/images/2020/01/23/RuAgpJ.png" }} style={styles.photo4} />
          </TouchableOpacity>

          <TouchableOpacity style={{flex:0.08,flexDirection:'row',backgroundColor:'#ffffff',alignItems:'center'}} >
            <Text style={{flex:1, fontSize:20,marginLeft:30}}>Account</Text>
            <Text style={{flex:1, fontSize:20,marginLeft:20, color:"#C4C4C4",}}>phattaraphon.c@ku.th</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={{flex:0.08,flexDirection:'row',backgroundColor:'#ffffff',alignItems:'center'}} >
            <Text style={{flex:1, fontSize:20,marginLeft:30}}>Change Password</Text>
            <Image source={{ uri: "https://sv1.picz.in.th/images/2020/01/23/RuAgpJ.png" }} style={styles.photo4} />
          </TouchableOpacity>

          <TouchableOpacity style={{flex:0.08,flexDirection:'row',marginTop:17,backgroundColor:'#ffffff', alignItems:'center', justifyContent: 'center',}} >
            <Text style={{fontSize:20, color:'#5B3E96'}}>LOGOUT</Text>
          </TouchableOpacity>

        </View>

        </Container>

    );
  }
}

const styles = StyleSheet.create({
  // container: {
  //     alignItems:'flex-start',
  //     flex: 1,
  //     flexDirection: 'row',
  //     marginRight:16,
  //     marginTop: 5,
  //     marginBottom: 5,
  //     paddingTop: Constants.statusBarHeight
  // },

  container: {
    backgroundColor: "#fff",
    flex: 1,
    paddingTop: Constants.statusBarHeight
  },

  title: {
      fontSize: 16,
      color: '#FFFFFF',
  },
  container_text: {
      flex: 1,
      flexDirection: 'column',
      borderRadius:10,
      paddingLeft:5,
      justifyContent: 'center',
      backgroundColor:'#1F9BF1',
  },
  description: {
      fontSize: 11,
      fontStyle: 'italic',
      color: '#FFFFFF',
  },
  photo2: {
    height: 30,
    width: 30,
    marginRight:5,
    marginLeft:5,
    marginTop:5,
    borderWidth:1,
    borderRadius: 1,

  alignItems: 'center',
  justifyContent: 'center'

}, photo3: {
  height: 25,
    width: 25,
    marginRight:5,
    marginLeft:5,
    marginTop:5,
  alignItems: 'center',
  justifyContent: 'center'


},
  photo: {
      height: 45,
      width: 45,
      marginRight:5,
      marginLeft:5,
      marginTop:5,
      borderWidth:10,
      borderRadius: 50,
      flex:1,
    alignItems: 'center',
    justifyContent: 'center'

  },
  Text:{
    color:"#000000",
    fontSize: 15,
    marginTop:5,
    marginLeft : 2,
    marginEnd : 2,
    alignItems: 'center',
    justifyContent: 'center'

  },Text2:{
    color:"#5B3E96",
    fontSize: 17,
    marginTop:5,
    marginLeft : 2,
    marginEnd : 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  MainContainer1:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
  },
    
  MainContainer2:{
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5
  },
  photo4: {
    height: 18,
      width: 18,
      marginRight:20,
      flexDirection: 'row-reverse',
      alignItems:'center'

  
  
  },



});
