import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Image,} from "react-native";
import Constants from "expo-constants";
import { Container, Header, Title, Button, Icon, Content, InputGroup, Input } from 'native-base';
// import ActionButton from 'react-native-action-button';




export default class Edit_Reminder extends Component {
  onPressBack(){
    this.props.navigation.navigate('Main1')
 }
    render() {
        return (
            <Container>
            <Header >
              <View style = { styles.MainContainer1}>
                <Button transparent onPress={()=>this.onPressBack()}>
                    <Icon name='ios-arrow-back' style={{color:'#DBDBDB'}} />
                </Button>
              </View>
              <View style = { styles.MainContainer2 }>
                <Title>Edit</Title>
              </View>
              
              <View style={{flex: 1, alignItems: 'center',justifyContent: 'center', left: 15}}>
                <Image style={{width: 20, height: 20}}source={{uri: 'https://sv1.picz.in.th/images/2020/01/24/RrBuNt.png' }}/>
              </View>
            </Header>
            {/* <ActionButton buttonColor="rgba(75,21,184,2)" position="center"></ActionButton> */}






        <View style={{flex:1,flexDirection:'column',backgroundColor:'#F6F6F6'}} >


          <TouchableOpacity  style={{flex:0.08,flexDirection:'row',marginTop:20,backgroundColor:'#ffffff', alignItems:'center'}}>
                <Image style={{marginLeft:30, marginRight:10 ,width:25,height:25}} source={{uri:'https://sv1.picz.in.th/images/2020/01/24/Rr9eWe.png'}}/>
                  <View style={{flexDirection: 'column'}} >
                    <Text style={{fontSize:20,fontWeight:'bold' ,color:'#171D33',marginLeft:10,marginEnd:3,alignItems:'center',justifyContent:'center'}}>Get a Haircut</Text>
                  </View>
                  <Text style={{fontSize:16 , color:'#D4D4D4', marginLeft:140}}></Text>
                  <Image style={{marginLeft:30, marginRight:10 ,width:15,height:15}} source={{uri:'https://sv1.picz.in.th/images/2020/01/24/RrTgsz.png'}}/>
          </TouchableOpacity>

          <TouchableOpacity  style={{flex:0.08,flexDirection:'row',marginTop:20,backgroundColor:'#ffffff', alignItems:'center'}}>
                <Image style={{marginLeft:25, marginRight:10 ,width:28,height:28}} source={{uri:'https://sv1.picz.in.th/images/2020/01/24/RrkimE.png'}}/>
                  <View style={{flexDirection: 'column'}} >
                    <Text style={{fontSize:18,color:'#171D33',marginLeft:10,marginEnd:3,alignItems:'center',justifyContent:'center'}}>Pomodoro Number</Text>
                  </View>
                  <Text style={{fontSize:16 , color:'#D4D4D4', marginLeft:135}}>1</Text>
            </TouchableOpacity>

            <TouchableOpacity  style={{flex:0.08,flexDirection:'row', backgroundColor:'#ffffff', alignItems:'center'}}>
                <Image style={{marginLeft:25, marginRight:10 ,width:30,height:30}} source={{uri:'https://sv1.picz.in.th/images/2020/01/24/Rr3Loy.png'}}/>
                  <View style={{flexDirection: 'column'}} >
                    <Text style={{fontSize:18,color:'#171D33',marginLeft:10,marginEnd:3,alignItems:'center',justifyContent:'center'}}>Due Date</Text>
                  </View>
                  <Text style={{fontSize:16 , color:'#D4D4D4', marginLeft:170}}>Tomorrow</Text>
            </TouchableOpacity>





            <TouchableOpacity  style={{flex:0.08,flexDirection:'row',backgroundColor:'#ffffff', alignItems:'center'}}>
                <Image style={{marginLeft:25, marginRight:10 ,width:25,height:25}} source={{uri:'https://sv1.picz.in.th/images/2020/01/24/Rr3eJD.png'}}/>
                  <View style={{flexDirection: 'column'}} >
                    <Text style={{fontSize:18,color:'#171D33',marginLeft:10,marginEnd:3,alignItems:'center',justifyContent:'center'}}>Reminder</Text>
                  </View>
                  <Text style={{fontSize:16 , color:'#D4D4D4', marginLeft:100}}>26/01/2563   5:38 AM</Text>
            </TouchableOpacity>

            <TouchableOpacity  style={{flex:0.1,flexDirection:'column',marginTop:20,backgroundColor:'#F6F6F6', alignItems:'center'}}>
                  <View style={{flexDirection: 'column'}} >
                    <Text style={{fontSize:18,color:'#0000000',marginLeft:10,marginEnd:3,alignItems:'center',justifyContent:'center'}}>26/01/2563   5:38 AM</Text>
                    <Text style={{fontSize:15,color:'#A2A2A2',marginLeft:15,marginEnd:3,alignItems:'center',justifyContent:'center'}}>27/01/2563        5:39 AM</Text>
                    <Text style={{fontSize:12,color:'#D4D4D4',marginLeft:21,marginEnd:3,alignItems:'center',justifyContent:'center'}}>26/01/2563            5:40 AM</Text>
                  </View>
                 
            </TouchableOpacity>

            <TouchableOpacity  style={{flex:0.08,flexDirection:'row',backgroundColor:'#ffffff', alignItems:'center'}}>
                <Image style={{marginLeft:25, marginRight:10 ,width:25,height:25}} source={{uri:'https://sv1.picz.in.th/images/2020/01/24/Rr3F5J.png'}}/>
                  <View style={{flexDirection: 'column'}} >
                    <Text style={{fontSize:18,color:'#171D33',marginLeft:10,marginEnd:3,alignItems:'center',justifyContent:'center'}}>Repeat</Text>
                  </View>
                  <Text style={{fontSize:16 , color:'#D4D4D4', marginLeft:210}}>None</Text>
            </TouchableOpacity>


            <TouchableOpacity  style={{flex:0.08,flexDirection:'row',marginTop:20,backgroundColor:'#ffffff',alignItems:'center'}}>
                  <Text style={{fontSize:18 , color:'#D4D4D4', marginLeft:25, }}>Add a note...</Text>
            </TouchableOpacity>

        </View>





            </Container>
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


});
