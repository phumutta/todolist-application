import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert, TextInput, ScrollView, AsyncStorage, SafeAreaView, Dimensions, List, Picker} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
// import { Card } from 'react-native-shadow-cards';
import { Container, Header, Title, Button, Icon, Content, InputGroup, Input, Card, CardItem } from 'native-base';
import Items2 from './Items2'
import database2 from './Database2'
import Constants from "expo-constants";
import ActionButton from 'react-native-action-button';
import * as firebase from 'firebase';
import '@firebase/firestore';
import database from './Database3';
// import  Card  from 'galio-framework';
// import { Card, ListItem, Button, Icon } from 'react-native-elements'
import moment from 'moment';

let {width, height} = Dimensions.get('window')

export default class AddNote extends React.Component {
  state = {
    email: '',
    message:'',
    time:'',
    Date:'',
    Priority:'',
    name: '',
    last: '',
    uri: "https://sv1.picz.in.th/images/2020/01/23/RuEI4z.png",
    date: '',
    note:'',
    noteTime:''

  };


  onPressBack(){
    this.props.navigation.navigate('Note')
 }


onFocusFunction=async()=>{
  this.setState({email:await AsyncStorage.getItem('@email')})

  
}
// update (){
//   this.todo.update();

// };

// componentDidMount(){

//   this.onFocusFunction();
//   let date = new Date().getDate(); //Current Date
//   var month = new Date().getMonth() + 1; //Current Month
//   var year = new Date().getFullYear(); //Current Year
//   var hours = new Date().getHours(); //Current Hours
//   var min = new Date().getMinutes(); //Current Minutes
//   var sec = new Date().getSeconds(); //Current Seconds
//   // this.setState({time:hours+":"+min+":"+sec})
//   // console.log(this.state.time)
//   this.setState({time:firebase.firestore.FieldValue.serverTimestamp()})
//   this.setState({Date:date + '/' + month + '/' + year})
  

 
// }


onChangeText = message => this.setState({ message });

onPressAdd = async() => {
  await this.addText();
  this.setState({ text:null});

  this.textInput.clear() 
};
addText=async()=>{
  
  Message={
    message:this.state.message,
    time: this.state.time,
    Date:this.state.Date,
    status:'1',
    
    id:''
  }
  console.log(this.state.email)
 await  database.addMessageToday(this.state.email,Message,this.addMessageSuccess,this.addMessageFail)

}
addMessageSuccess=async(id)=>{

console.log("Successsssssssss");
await database.updateID(id,this.state.email,this.updateSuccess,this.updateFail)
this.update();
// await database.readMessage(this.state.email,this.state.Date,this.readMessageSuccess,this.readMessageFail)


}
addMessageFail=async()=>{

console.log("addMessageFail");
}
async updateSuccess(){

console.log("updateID");
await this.update();
}
updateFail(){
console.log("FailUpdate");
}
delete_Complete=async (id)=>{
await database.updateStatus(id,this.state.email,this.updateSuccess,this.updateFail)
// await database.deleteTask(this.state.email,id,this.deleteSuccess,this.deleteFail);
//this.onPressTrack();
await this.update();


}
deleteSuccess(){

console.log("del success")
}
deleteFail(){
console.log("del fail")
}
  

readMessageSuccess=async(doc)=>{
  console.log("message :" +doc.message);

}
readMessageFail=async()=>{
  console.log("read F");
}
async update(){
  await this.todo.update();

};




onPressBack(){
  this.props.navigation.navigate('Main1')
}
onPressEdit(){
this.props.navigation.navigate('Edit')


}


static navigationOptions = ({navigation}) => {
  return {
      title:'ADD NOTE',
      headerTitleStyle: {
          textAlign: 'center',
          flexGrow:1
      },
      headerRight: (
          <TouchableOpacity onPress={navigation.getParam('addNotes')}>
              <Icon name="check-circle-o" style={{marginRight:width/15, fontSize:30, color:'green'}}/>
          </TouchableOpacity>)
  }
}
constructor(props){
  super(props);
  this.state ={
      title: '',
      note: '',
      categoryId: ''
  };
}
componentDidMount(){
  this.onFocusFunction()
  this.props.navigation.setParams({addNotes:this.addNotes})
  var now = moment().format();
  let time =moment(now).format('MMMM Do YYYY, h:mm a')
  this.setState({noteTime:time})
}
// dummyCategory = () => {
//     let dummyCtgy = []
//     for(let a=0;a<DummyCategory.length;a++){
//         dummyCtgy.push(
//             <Picker.Item key={a} label={DummyCategory[a].category} value={DummyCategory[a].id}/>
//         )
//     }
//     return dummyCtgy;
// }
addNotes = () => {
  const {title,note,categoryId} = this.state
  if(!title.length||!note.length||!categoryId.length){
      this.props.dispatch(addNote({title,note,categoryId}))
      this.props.dispatch(getNotes())
      this.props.navigation.goBack()
  }
  else {
      alert('You must enter title, note and category');
  }
}
getCategoryBtn = () =>{
  return this.props.categories.categories && this.props.categories.categories.map(item=>(
      <Picker.Item key={item.id} label={item.name} value={item.id}/>  
  ))
}
async onPressOK(){
  
  console.log(this.state.noteTime)
  console.log(this.state.note)
  console.log(this.state.email)
   Message= await{
    note: this.state.note,
    time:this.state.noteTime,
    id:''
  }
  console.log(Message)
  await database.addNote(this.state.email,Message,this.addNote_S,this.addNote_F)


}
addNote_S(){

}
addNote_F(){

}



onChangeText = note => this.setState({ note });

  render() {

    // var now = moment().format();
    // let time =moment(now).format('MMMM Do YYYY, h:mm a')
    // // this.setState({noteTime:time})

    return (
      <Container>
        <Header>
          <View style={styles.MainContainer1}>
            <Button transparent onPress={() => this.onPressBack()}>
              <Icon name='ios-arrow-back' style={{ color: '#DBDBDB' }} />
            </Button>
          </View>
          <View style={styles.MainContainer2}>
            <Title>AddNote</Title>
          </View>
          <TouchableOpacity   onPress={()=>this.onPressOK()}>
                  <View  style={{flex: 1, alignItems: 'center',justifyContent: 'center', marginRight:'8%'}}>
                    {/* <Image style={{width: 20, height: 20}}source={{uri: 'https://sv1.picz.in.th/images/2020/01/26/RHjrif.png' }}/> */}
                    <Text style={{ fontSize: 15, color: '#4B15B8', textAlign: 'center' , fontWeight:"bold"}} >Save</Text>
                  </View>
                </TouchableOpacity>
        </Header>


      
        <View style={{flex:1, backgroundColor:'#ffffff'}}>
              <View style={{flex:1}}>
                  <ScrollView style={{flex:1,width:'100%'}}>
                      <SafeAreaView forceInset={{top:'always',horizontal:'never'}} >
                          <View style={{flex:1,marginTop:'8%',height:700,alignItems:'center',zIndex:1}}>
                            <Text style={{width:'80%', fontSize:18, marginTop:'3%', color:'#696969'}}>{this.state.noteTime}</Text>
                            <TextInput underlineColorAndroid='#4CAF50' style={{width:'80%', fontSize:23, marginTop:'5%'}} multiline={true} numberOfLines={10} placeholder='Description... ' onChangeText={this.onChangeText}/>
                          </View>
                      </SafeAreaView>
                  </ScrollView>
              </View>
          </View>  



      
      </Container>


    );
  }
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    flex: 1,
    flexDirection: 'row',
    marginRight: 16,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: 'transparent',
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
    padding:20,
    flex: 1,
    marginTop: 16,
  },
  txtIn2: {
    backgroundColor: 'transparent',
    // flex:5,
    fontSize:20,
  },
  safeArea: {
    flex: 1
  },
  listItem: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#dddddd',
    minHeight: 40,
    alignItems: 'center'
  },
  text: {
    backgroundColor: '#eeeeee',
    fontWeight: 'bold',
    // no flex, height, lineHeight or textAlignVertical.
  },
});
