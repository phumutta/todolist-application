import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert, TextInput, ScrollView, AsyncStorage, FlatList, Modal, StatusBar, ActivityIndicator, Platform } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
// import { Card } from 'react-native-shadow-cards';
import { Container, Header, Title, Button, Icon, Content, InputGroup, Input, Card, CardItem } from 'native-base';
import Item_note from './Item_note'
import database2 from './Database2'
import Constants from "expo-constants";
import ActionButton from 'react-native-action-button';
import * as firebase from 'firebase';
import '@firebase/firestore';
import database from './Database3';
import CardView from 'react-native-cardview'
// import  Card  from 'galio-framework';
// import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { CardViewWithImage, CardViewWithIcon } from 'react-native-simple-card-view'

export default class Note extends React.Component {
  state = {
    email: '',
    message: '',
    time: '',
    Date: '',
    Priority: '',
    name: '',
    last: '',
    uri: "https://sv1.picz.in.th/images/2020/01/23/RuEI4z.png"

  };

  //   onFocusFunction = async () => {

  //     // const value =await AsyncStorage.getItem('@email');
  //     // this.setState({email:value})
  //     // database.readdata(this.state.email,this.read_Account_success,this.read_Account_fail)
  //     // console.log("test")
  //     // console.log(this.state.email)

  //     const name_store = await AsyncStorage.getItem('@name');
  //     console.log(name_store)
  //     const last_store = await AsyncStorage.getItem('@last');
  //     const uri_store = await AsyncStorage.getItem('@uri');
  //     if (uri_store == null) {
  //       this.setState({ uri: "https://sv1.picz.in.th/images/2020/01/23/RuEI4z.png" })
  //       this.setState({ name: name_store })
  //       this.setState({ last: last_store })
  //     }
  //     else {
  //       this.setState({ name: name_store })
  //       this.setState({ last: last_store })
  //       this.setState({ uri: uri_store })
  //     }
  //   }


  //   // read_Account_success=async(doc)=>{
  //   //   this.setState({name:doc.name})
  //   //   this.setState({email:doc.email})
  //   //   this.setState({last:doc.last})
  //   //   console.log(this.state.name);

  //   //   await AsyncStorage.setItem('@name',this.state.name);
  //   //   await AsyncStorage.setItem('@last',this.state.last);
  //   // }

  //   // read_Account_fail=async()=>{
  //   //   console.log("error")


  //   // }
  //   componentDidMount() {

  //     this.onFocusFunction();


  //   }
  //   onPressBack(){
  //     this.props.navigation.navigate('Main1')
  //  }


  onFocusFunction = async () => {
    this.setState({ email: await AsyncStorage.getItem('@email') })
    this.update()
  }
  // update (){
  //   this.todo.update();

  // };

  componentDidMount() {

    this.onFocusFunction();
    let date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds
    // this.setState({time:hours+":"+min+":"+sec})
    // console.log(this.state.time)
    this.setState({ time: firebase.firestore.FieldValue.serverTimestamp() })
    this.setState({ Date: date + '/' + month + '/' + year })



  }


  onChangeText = message => this.setState({ message });

  onPressAdd = async () => {
    await this.addText();
    this.setState({ text: null });

    this.textInput.clear()
  };
  addText = async () => {

    Message = {
      message: this.state.message,
      time: this.state.time,
      Date: this.state.Date,
      status: '1',

      id: ''
    }
    console.log(this.state.email)
    await database.addMessageToday(this.state.email, Message, this.addMessageSuccess, this.addMessageFail)

  }
  addMessageSuccess = async (id) => {

    console.log("Successsssssssss");
    await database.updateID(id, this.state.email, this.updateSuccess, this.updateFail)
    this.update();
    // await database.readMessage(this.state.email,this.state.Date,this.readMessageSuccess,this.readMessageFail)


  }
  addMessageFail = async () => {

    console.log("addMessageFail");
  }
  async updateSuccess() {

    console.log("updateID");
    await this.update();
  }
  updateFail() {
    console.log("FailUpdate");
  }
  delete_Complete = async (id) => {
    await database.updateStatus(id, this.state.email, this.updateSuccess, this.updateFail)
    // await database.deleteTask(this.state.email,id,this.deleteSuccess,this.deleteFail);
    //this.onPressTrack();
    await this.update();


  }
  deleteSuccess() {

    console.log("del success")
  }
  deleteFail() {
    console.log("del fail")
  }


  readMessageSuccess = async (doc) => {
    console.log("message :" + doc.message);

  }
  readMessageFail = async () => {
    console.log("read F");
  }
  async update() {
    await this.note.update();

  };




  onPressBack() {
    this.props.navigation.navigate('Main1')
  }
  onPressEdit() {
    this.props.navigation.navigate('Edit')


  }





  render() {
    return (
      <Container>
        <Header>
          <View style={styles.MainContainer1}>
            <Button transparent onPress={() => this.onPressBack()}>
              <Icon name='ios-arrow-back' style={{ color: '#DBDBDB' }} />
            </Button>
          </View>
          <View style={styles.MainContainer2}>
            <Title>Note</Title>
          </View>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', left: 15 }}>
            {/* <Image style={{ width: 20, height: 20 }}
              source={{ uri: 'https://sv1.picz.in.th/images/2020/01/22/RCoeNt.png' }}
            /> */}
          </View>
        </Header>






        <LinearGradient colors={['#FFFFFF', '#4B15B8']} style={{flex:1}}>

            <View style={styles.container}>
              <View style={styles.item}>
                <ScrollView style={styles.item2}>
                  <Item_note ref={note => (this.note = note)} />
                </ScrollView>
              </View>


              <ActionButton buttonColor="rgba(75,21,184,2)" position="right">
                {/* <ActionButton.Item buttonColor='#000000' title="New Task" onPress={() => this.props.navigation.navigate('AddTask')}>
                  <Icon name="md-create" style={{ color: 'white' }} />
                </ActionButton.Item>
                <ActionButton.Item buttonColor='#CCCCCC' title="Group" onPress={() => this.props.navigation.navigate('Group')}>
                  <Icon name="md-people" style={styles.actionButtonIcon} />
                </ActionButton.Item> */}
                <ActionButton.Item buttonColor='#ffffff' title="New Note" onPress={() => this.props.navigation.navigate('AddNote')}>
                  <Icon name="md-save" style={styles.actionButtonIcon} />
                </ActionButton.Item>
              </ActionButton>

          </View>

        </LinearGradient> 

      

        



        {/* <View style={{ flex: 1,  backgroundColor: '#ffffff', flexDirection: 'row',alignItems:'center'}} >   
          <View style={{flexDirection: 'row', justifyContent: 'center',alignContent :'center',}}>

            <ScrollView style={{backgroundColor: '#transparent',  padding:'6%', marginLeft:'2%'}}>
              <View style={{marginBottom:'10%'}}>
              <Item_note ref={note => (this.note = note)} />
              </View>
            </ScrollView>


          </View>

          <View>
              <FlatList style={{margin:5}}
              // data={this.state.items}
              numColumns={2}
              // keyExtractor={(item, index) => item.id }
              // renderItem={(item) => <Card image={item.item.gallery_image_url} text={item.item.name}/> 
              renderItem={(item) => <Item_note ref={note => (this.note = note)} />
            }
            />
          </View>

         

          <ActionButton buttonColor="rgba(75,21,184,2)" position="right">
            <ActionButton.Item buttonColor='#000000' title="New Task" onPress={() => this.props.navigation.navigate('AddTask')}>
              <Icon name="md-create" style={{ color: 'white' }} />
            </ActionButton.Item>
            <ActionButton.Item buttonColor='#CCCCCC' title="Group" onPress={() => this.props.navigation.navigate('Group')}>
              <Icon name="md-people" style={styles.actionButtonIcon} />
            </ActionButton.Item>
            <ActionButton.Item buttonColor='#ffffff' title="New Note" onPress={() => this.props.navigation.navigate('AddNote')}>
              <Icon name="md-save" style={styles.actionButtonIcon} />
            </ActionButton.Item>
          </ActionButton>
        </View> */}








      </Container>


    );
  }
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    // marginRight: "4%",
    // marginLeft:"4%",
    // paddingTop: "6%",
    // margin:"2%",
    // marginBottom: 5,
    // backgroundColor: 'transparent',
    // backgroundColor: 'black',
    // marginBottom:33,
  },
  // container: {
  //   flex: 1,
  //   flexDirection: 'row',
  //   flexWrap: 'wrap',
  //   // alignItems: 'flex-start', // if you want to fill rows left to right
  //   justifyContent: 'center',
  //   alignContent :'center',
  //   margin:'5%',
  // },
  item: {
    width: '100%', // is 50% of container width
    paddingTop: "2%",
    // paddingLeft:"4%",
    // marginBottom:33,
  },
  item2: {
    paddingRight: "5%",
    paddingLeft:"5%",
    paddingTop:"7%",
    // paddingBottom:"50%",
    // marginBottom:33

  },
  title: {
    fontSize: 16,
    color: '#FFFFFF',
  },
  container_text: {
    flex: 1,
    flexDirection: 'column',
    borderRadius: 10,
    paddingLeft: 5,
    justifyContent: 'center',
    backgroundColor: '#1F9BF1',
  },

  Text: {
    color: "#5B3E96",
    fontSize: 17,
    marginTop: 5,
    marginLeft: 2,
    marginEnd: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },

  Text2: {
    color: "#5B3E96",
    fontSize: 22,
    alignItems: 'center',
    justifyContent: 'center'
  },

  TTT: {
    color: "#666666",
    fontSize: 25,
    // marginTop: 5,
    // marginLeft: 2,
    // marginEnd: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  under: {
    color: "#666666",
    fontSize: 11,
    marginTop: 5,

    marginEnd: 2,
    alignItems: 'center',

  },
  Icon: {
    height: 25,
    width: 25,
    marginRight: 5,
    marginLeft: 5,
    // marginTop:5,


    alignItems: 'center',
    justifyContent: 'center'

  },

  MainContainer1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    right: 10
  },

  MainContainer2: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5
  },

  listArea: {
    backgroundColor: "transparent",
    padding: 20,
    flex: 1,
    marginTop: 16,
  },
  MainContainer: {

    flex: 1,
    backgroundColor: '#F5FCFF',
    // justifyContent: 'center',
    alignItems: 'center',

  },

  cardViewStyle: {

    width: 250,
    height: 150,

  },

  cardView_InsideText: {

    fontSize: 20,
    color: '#000000',
    textAlign: 'center',
    marginTop: 50

  },
  row: {
    flex: 1,
    justifyContent: "space-around"
}
});
