import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Image,AppRegistry,} from "react-native";
import Constants from "expo-constants";
import { Container, Header, Title, Button, Icon, Content, InputGroup, Input } from 'native-base';
// import ActionButton from 'react-native-action-button';
import CalendarStrip from 'react-native-calendar-strip';
import moment from 'moment';
import PropTypes from "prop-types";


export default class Completed extends Component {

  state = {
    uri:"http://example.com/image.png",
  };

  // let datesWhitelist = [{
  //   start: moment(),
  //   end: moment().add(3, 'days')  // total 4 days enabled
  // }];
  // let datesBlacklist = [ moment().add(1, 'days') ]; // 1 day disabled

  // let customDatesStyles = [];
  // let startDate = moment();
  // for (let i=0; i<6; i++) {
  //   customDatesStyles.push({
  //       startDate: startDate.clone().add(i, 'days'), // Single date since no endDate provided
  //       dateNameStyle: styles.dateNameStyle,
  //       dateNumberStyle: styles.dateNumberStyle,
  //       // Random color...
  //       dateContainerStyle: { backgroundColor: `#${(`#00000${(Math.random() * (1 << 24) | 0).toString(16)}`).slice(-6)}` },
  //     });
  // }



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
                <Title>Completed</Title>
              </View>
              <View style={{flex: 1, alignItems: 'center',justifyContent: 'center', left: 15}}>
                <TouchableOpacity>
                  <Image style={{width: 20, height: 20}}source={{uri: 'https://sv1.picz.in.th/images/2020/02/24/xsbgt2.png' }}/>
                </TouchableOpacity>
              </View>
            </Header>

            <View style={styles.container1}>
                <CalendarStrip 
                style={{height:'20%', paddingTop: '5%', paddingBottom: 10,}} 
                calendarHeaderStyle={{color: 'grey'}} 
                calendarColor={'#white'}
                dateNumberStyle={{color: 'grey'}}
                dateNameStyle={{color: 'grey'}}
                highlightDateNumberStyle={{color: 'black'}}
                highlightDateNameStyle={{color: 'black'}}
                disabledDateNameStyle={{color: 'grey'}}
                disabledDateNumberStyle={{color: 'grey'}}
                // datesWhitelist={datesWhitelist}
                // datesBlacklist={datesBlacklist}
                // iconLeft={require('./img/left-arrow.png')}
                // iconRight={require('./img/right-arrow.png')}
                iconContainer={{flex: 0.2}}
                // showDayNumber={{}}
                markedDatesStyle={{}}
                />
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

  container1: {
    backgroundColor: "#fff",
    flex: 1,

    // paddingTop: Constants.statusBarHeight
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
