import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, TextInput, TouchableOpacity,AsyncStorage, Alert, Image,  DatePickerIOS,PickerIOS} from "react-native";
import Constants from "expo-constants";
import { Container, Header, Title, Button, Icon, Content, InputGroup, Input } from 'native-base';
// import ActionButton from 'react-native-action-button';
import DatePicker from 'react-native-datepicker'
import * as firebase from 'firebase';
import '@firebase/firestore';
import database from './Database3';
// Edit_DueDate
// Edit_Note
// Edit_PomodoroNumber
// Edit_Reminder

// Edit_Repeat

export default class AddTask extends Component {



  constructor(props) {
    super(props);
    this.dataRepeat = ["None","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday","Everyday"]
    this.dataPodo = ["None","1","2","3","4","5"]
    this.state = {
      chosenDate: new Date(), 
      date:null,
      email: '',
      message:'',
      time:'',
      Date:'',
      Priority:''
      
    };


    this.setDate = this.setDate.bind(this);
  }


  onFocusFunction=async()=>{
    this.setState({email:await AsyncStorage.getItem('@email')})
   
    var myJSON = await JSON.stringify(this.state.chosenDate);
   
     myJSON= await myJSON.slice(1,11)
    

   await this.setState({date: myJSON});
    
    console.log(this.state.date)
  
  }
  componentDidMount(){

    this.onFocusFunction();
  
    this.setState({time:firebase.firestore.FieldValue.serverTimestamp()})
    
    
  
   
 }
  
  onChangeText = message => this.setState({ message });
  async setDate(newDate) {
    var myJSON = await JSON.stringify(newDate);
    console.log(typeof(myJSON))
    console.log(myJSON)
     myJSON= await myJSON.slice(1,11)
    console.log(myJSON)
    await this.setState({chosenDate:newDate})
   await this.setState({date: myJSON});
    
    console.log(this.state.date)
  }
  


  onPressBack(){
    this.props.navigation.navigate("Main1");
    
 }
 onPressAdd = async() => {
  await this.addText();
  

  this.textInput.clear() 
};

addText=async()=>{
    
    Message={
      message:this.state.message,
      time: this.state.time,
      Date:this.state.date,
      status:'1',
      id:''
    }
    console.log(this.state.email)
   await  database.addMessageToday(this.state.email,Message,this.addMessageSuccess,this.addMessageFail)
 
  }
  addMessageSuccess=async(id)=>{
  
    console.log("Successsssssssss");
    await database.updateID(id,this.state.email,this.updateSuccess,this.updateFail)
   
    // await database.readMessage(this.state.email,this.state.Date,this.readMessageSuccess,this.readMessageFail)
  
    
  }
  addMessageFail=async()=>{

    console.log("addMessageFail");
  }
  async updateSuccess(){
    
    console.log("updateID");
    
  }
  updateFail(){
    console.log("FailUpdate");
  }






getPodo = () =>{
  return( this.dataPodo.map( (x,i) => { 
        return( <PickerIOS.Item label={x} key={i} value={x} />)} ));
}
getRepeat = () =>{
  return( this.dataRepeat.map( (x,i) => { 
        return( <PickerIOS.Item label={x} key={i} value={x} />)} ));
}

    render() {
      let PickerIOSItem = PickerIOS.Item
        return (
            <Container>
            <Header >
              <View style = { styles.MainContainer1}>
              {/* <Button transparent  onPress={() => this.props.navigation.goBack()}> */}
                <Button transparent  onPress={()=>this.onPressBack()}>
                    <Icon name='ios-arrow-back' style={{color:'#DBDBDB'}} />
                </Button>
              </View>
              <View style = { styles.MainContainer2 }>
                <Title>AddTask</Title>
              </View>
              
              <TouchableOpacity style={{flex: 1, alignItems: 'center',justifyContent: 'center', left: 10}} onPress={this.onPressAdd}>
                <Text style={{fontSize:14}}>Done</Text>
              </TouchableOpacity>
            </Header>
            {/* <ActionButton buttonColor="rgba(75,21,184,2)" position="center"></ActionButton> */}






        <View style={{flex:1,flexDirection:'column',backgroundColor:'#F6F6F6'}} >


        <View  style={{flex:0.08,flexDirection:'row',marginTop:20,backgroundColor:'#ffffff', alignItems:'center'}} >
                <Image style={{flex:0.15,marginLeft:30, marginRight:10 ,width:25,height:25,marginRight:20}} source={{uri:'https://sv1.picz.in.th/images/2020/01/24/Rr9eWe.png'}}/>
                <TextInput style={{flex:1}}
                  ref={input => { this.textInput = input }} 
                  placeholder="Add a task..."
                  onChangeText={this.onChangeText}

                />
                  <Image style={{flex:0.1,marginLeft:30, marginRight:10 ,width:15,height:15}} source={{uri:'https://sv1.picz.in.th/images/2020/01/24/RrTgsz.png'}}/>

          </View>

          <TouchableOpacity  style={{flex:0.08,flexDirection:'row',marginTop:20,backgroundColor:'#ffffff', alignItems:'center'}} onPress={() => this.setState({ podo: !this.state.podo })}>
                <Image style={{marginLeft:25, marginRight:10 ,width:28,height:28}} source={{uri:'https://sv1.picz.in.th/images/2020/01/24/RrkimE.png'}}/>
                  <View style={{flexDirection: 'column'}} >
                    <Text style={{fontSize:18,color:'#171D33',marginLeft:10,marginEnd:3,alignItems:'center',justifyContent:'center'}}>Pomodoro Number<Text style={{color:'#D4D4D4'}}> {this.state.selectPodo}</Text></Text>
                  </View>
                  {/* <Text style={{fontSize:16 , color:'#D4D4D4', marginLeft:130}}>0 / 0</Text> */}
            </TouchableOpacity>
            {this.PodoPicker()}

            <TouchableOpacity  style={{flex:0.08,flexDirection:'row',backgroundColor:'#ffffff', alignItems:'center'}} onPress={() => this.setState({ picker: !this.state.picker })}>
                <Image style={{marginLeft:25, marginRight:10 ,width:30,height:30}} source={{uri:'https://sv1.picz.in.th/images/2020/01/24/Rr3Loy.png'}}/>
                  <View style={{flexDirection: 'column'}} >
                    <Text style={{fontSize:18,color:'#171D33',marginLeft:10,marginEnd:3,alignItems:'center',justifyContent:'center'}}>Due Date<Text style={{color:'#D4D4D4'}}> {this.state.date}</Text></Text>
                  </View>
                  {/* <Text style={{fontSize:16 , color:'#D4D4D4', marginLeft:162}}>Tomorrow</Text> */}
            </TouchableOpacity>
            {this.renderPicker()}
       

            <TouchableOpacity  style={{flex:0.08,flexDirection:'row',backgroundColor:'#ffffff', alignItems:'center'}} onPress={()=>this.setState({ parker: !this.state.parker })}>
                <Image style={{marginLeft:25, marginRight:10 ,width:25,height:25}} source={{uri:'https://sv1.picz.in.th/images/2020/01/24/Rr3eJD.png'}}/>
                  <View style={{flexDirection: 'column'}} >
                    <Text style={{fontSize:18,color:'#171D33',marginLeft:10,marginEnd:3,alignItems:'center',justifyContent:'center'}}>Reminder<Text style={{color:'#D4D4D4'}}> {this.state.datex}</Text></Text>
                  </View>
                  {/* <Text style={{fontSize:16 , color:'#D4D4D4', marginLeft:192}}>None</Text> */}
            </TouchableOpacity>
            {this.RenderParker()}

            <TouchableOpacity  style={{flex:0.08,flexDirection:'row',backgroundColor:'#ffffff', alignItems:'center'}} onPress={()=>this.setState({ repeat: !this.state.repeat })}>
                <Image style={{marginLeft:25, marginRight:10 ,width:25,height:25}} source={{uri:'https://sv1.picz.in.th/images/2020/01/24/Rr3F5J.png'}}/>
                  <View style={{flexDirection: 'column'}} >
        <Text style={{fontSize:18,color:'#171D33',marginLeft:10,marginEnd:3,alignItems:'center',justifyContent:'center'}}>Repeat<Text style={{color:'#D4D4D4'}}> {this.state.selectRepeat}</Text></Text>
                  </View>
                  {/* <Text style={{fontSize:16 , color:'#D4D4D4', marginLeft:210}}>None</Text> */}
            </TouchableOpacity>
            {this.renderRepeat()}


            <View  style={{flex:0.08,flexDirection:'row',marginTop:20,backgroundColor:'#ffffff', alignItems:'center'}} >
                <TextInput style={{flex:1,marginLeft:40}}
                  
                  placeholder="Add a note..."
                  onChangeText={this.onChangeText}

                />

          </View>

        </View>





            </Container>
        );
    }
    PodoPicker() {
      if (this.state.podo) {
        return (
          <PickerIOS 
              style={{ flex: 0.5,width: 200,marginLeft:80, marginTop:1 }}
              selectedValue={ this.state.selectPodo }
              onValueChange={(itemValue, itemIndex) => this.setState({ selectPodo: itemValue})}>
              { this.getPodo() }
            </PickerIOS>
        );
      }
      
    }

    renderPicker() {
      if (this.state.picker) {
        return (
          // <DatePicker
          //   style={{ width: 200,marginLeft:80 }}
          //   ref={picker => {
          //     this.datePicker = picker;
          //   }}
          //   date={this.state.date}
          //   mode="date"
          //   placeholder="Select date"
          //   format="DD/MM/YYYY"
          //   // minDate="2016-05-01"
          //   // maxDate="2020-12-12"
          //   confirmBtnText="OK"
          //   cancelBtnText="Cancel"
          //   onDateChange={date => {
          //     this.setState({ date: date });
          //   }}
          // />
          <DatePickerIOS
          date={this.state.chosenDate}
          onDateChange={this.setDate}
          mode="date"
        />
        );
      }
      
    }


    RenderParker() {
      if (this.state.parker) {
        return (
          <DatePicker
            style={{ width: 200,marginLeft:80 }}
            ref={parker => {
              this.datePicker = parker;
            }}
            date={this.state.datex}
            mode="date"
            placeholder="Select date"
            format="DD/MM/YYYY HH:mm"
            // minDate="2016-05-01"
            // maxDate="2020-12-12"
            confirmBtnText="OK"
            cancelBtnText="Cancel"
            onDateChange={date => {
              this.setState({ datex: date});
            }}
          />
        );
      }
      
    }
    renderRepeat() {
      if (this.state.repeat) {
        return (
          <PickerIOS 
              style={{ flex: 0.5,width: 200,marginLeft:80, marginTop:1 }}
              selectedValue={ this.state.selectRepeat }
              onValueChange={(itemValue, itemIndex) => this.setState({ selectRepeat: itemValue})}>
              { this.getRepeat() }
            </PickerIOS>
        );
      }
      
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
      marginTop: 5,
    },


});
