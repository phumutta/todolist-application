import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, TextInput, TouchableOpacity,AsyncStorage, Alert, Image,  DatePickerIOS,PickerIOS, SafeAreaView} from "react-native";
import Constants from "expo-constants";
import { Container, Header, Title, Button, Icon, Content, InputGroup, Input } from 'native-base';
// import ActionButton from 'react-native-action-button';
import Dialog from "react-native-dialog";
import DatePicker from 'react-native-datepicker'
import * as firebase from 'firebase';
import '@firebase/firestore';
import database from './Database3';
import { SinglePickerMaterialDialog } from 'react-native-material-dialog';
import { LinearGradient } from 'expo-linear-gradient';
import Items_Members from './Items_Members'
import moment from 'moment';
import { Avatar } from 'react-native-elements';
import Items_GroupNew from './Items_GroupNew'
// Edit_DueDate
// Edit_Note
// Edit_PomodoroNumber
// Edit_Reminder
// Edit_Repeat
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
  MenuProvider,
} from 'react-native-popup-menu';

export default class EditGroupTask extends Component {



  constructor(props) {
    super(props);
    this.dataRepeat = ["None","Everyday"]
    this.state = {
      chosenDate: new Date(), 
      chosenDate2: new Date(), 
      date:null,
      email: '',
      message:'',
      Message:'',
      time:'',
      Date:'',
      Priority:'',
      datex:'',
      picker:false,
      parker:false,
      repeat:false,
      imgPri:'https://sv1.picz.in.th/images/2020/03/03/xGZBDS.png',
      imgPre:'https://sv1.picz.in.th/images/2020/03/19/Qi4t3l.png',
      singlePickerVisible: false,
      singlePickerSelectedItem: [],
      id:'',
      des:'',
      groupUri:'',
      group:'',

      
    };


    this.setDate = this.setDate.bind(this);
    this.setDate2 = this.setDate2.bind(this);
  }
  FocusFunction=async()=>{
    this.setState({Message:await AsyncStorage.getItem('@Message')})
    this.setState({message:await AsyncStorage.getItem('@Message')})

    this.setState({id:await AsyncStorage.getItem('@TaskID')})
    this.setState({des:await AsyncStorage.getItem('@Des')})

    this.setState({email:await AsyncStorage.getItem('@email')})
    
  }

  onFocusFunction=async()=>{
    this.setState({Message:await AsyncStorage.getItem('@Message')})
    this.setState({message:await AsyncStorage.getItem('@Message')})

    this.setState({id:await AsyncStorage.getItem('@TaskID')})
    this.setState({des:await AsyncStorage.getItem('@Des')})

    this.setState({email:await AsyncStorage.getItem('@email')})
    if (this.state.singlePickerSelectedItem.label == "HIGH PRIORITY") {
      this.setState({ imgPri: "https://sv1.picz.in.th/images/2020/03/03/xGZtY1.png" })
      this.setState({ imgPre: "https://sv1.picz.in.th/images/2020/03/19/QiNa51.png" })
    
    }
    else if (this.state.singlePickerSelectedItem.label == "MEDIUM PRIORITY") {
      this.setState({ imgPri: "https://sv1.picz.in.th/images/2020/03/03/xGZwiy.png" })
      this.setState({ imgPre: "https://sv1.picz.in.th/images/2020/03/19/Qi33PV.png" })
    
    }
    else if (this.state.singlePickerSelectedItem.label == "LOW PRIORITY") {
      this.setState({ imgPri: "https://sv1.picz.in.th/images/2020/03/03/xGZsEe.png" })
      this.setState({ imgPre: "https://sv1.picz.in.th/images/2020/03/19/QiBynN.png" })
    
    }
    else if (this.state.singlePickerSelectedItem.label == "NONE PRIORITY") {
      this.setState({ imgPri: "https://sv1.picz.in.th/images/2020/03/03/xGZBDS.png" })
      this.setState({ imgPre:"https://sv1.picz.in.th/images/2020/03/19/Qi4t3l.png" })
    
    }
    
   
    var myJSON = await JSON.stringify(this.state.chosenDate);
    console.log(this.state.chosenDate)
     myJSON= await myJSON.slice(1,11)
    

   await this.setState({date: myJSON});
    
    console.log(this.state.date)
    
  
  }
  componentDidMount(){

    this.onFocusFunction();
    // this.FocusFunction()
    this.setState({time:firebase.firestore.FieldValue.serverTimestamp()})
    
    
  
   
 }
  
  onChangeText = message => this.setState({ message });
  onChangeDes =des=>this.setState({des})

  
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

  async setDate2(newDate) {
    var myJSON = await JSON.stringify(newDate);
    console.log(typeof(myJSON))
    console.log(myJSON)
    // slice here !!!
     myJSON= await myJSON.slice(1,11)
    console.log(myJSON)
    await this.setState({chosenDate2:newDate})
   await this.setState({datex: myJSON});
    
    console.log(this.state.datex)
  }
  


  onPressBack(){
    AsyncStorage.removeItem('@Pri');
    this.props.navigation.navigate("Main1");
   
    
    
 }
 onPressAddColor(){
  this.props.navigation.navigate("AddColor");
  console.log("here")
}
 onPressAdd = async() => {
  await this.addText();
  
  
  this.textInput.clear() 
};

addText=async()=>{
    switch (this.state.imgPri){
      case 'https://sv1.picz.in.th/images/2020/03/03/xGZtY1.png':
       
        await this.setState({Priority:'3'})
        break;
      case 'https://sv1.picz.in.th/images/2020/03/03/xGZwiy.png' :
        await this.setState({Priority:'2'})
        break;
      case 'https://sv1.picz.in.th/images/2020/03/03/xGZsEe.png':
        await this.setState({Priority:'1'})
        break;
      case 'https://sv1.picz.in.th/images/2020/03/03/xGZBDS.png':
        await  this.setState({Priority:'0'})
        break;
    }
    Message=await {
      message:this.state.message,
      time: this.state.time,
      Date:this.state.date,
      status:'1',
      id:this.state.id,
      PriImg:this.state.imgPre,
      Priority:this.state.Priority,
      Des:this.state.des
    }
    console.log(this.state.email)
   await  database.UpdateMessageToday(this.state.email,Message,this.addMessageSuccess,this.addMessageFail)
 
  }
  addMessageSuccess=async(id)=>{
  
    console.log("Successsssssssss");
    
   
    // await database.readMessage(this.state.email,this.state.Date,this.readMessageSuccess,this.readMessageFail)
    
  }
  addMessageFail=async()=>{

    console.log("addMessageFail");
  }
  async updateSuccess(){
    
    console.log("updateID");
    await AsyncStorage.removeItem('@Pri');
    await this.props.navigation.navigate("Main1");
    
    
  }
  updateFail(){
    console.log("FailUpdate");
  }






getRepeat = () =>{
  return( this.dataRepeat.map( (x,i) => { 
        return( <PickerIOS.Item label={x} key={i} value={x} />)} ));
}

    render() {
      let PickerIOSItem = PickerIOS.Item
      var now = moment().format();
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
                <Title>{this.state.Message}</Title>
              </View>
            
              <TouchableOpacity style={{flex: 1, alignItems: 'center',justifyContent: 'center', left: 10}} onPress={this.onPressAdd}>  
                <Text style={{fontSize:14}}>Done</Text>
              </TouchableOpacity>
            </Header>
            {/* <ActionButton buttonColor="rgba(75,21,184,2)" position="center"></ActionButton> */}
            {/* left ???????????????????? ?????????????*/}

          


        <View style={{flex:1,flexDirection:'column',backgroundColor:'#F6F6F6'}} >


        <View>
          <LinearGradient colors={['#000000', '#FFFFFF']}>
            <View style={{height:110,}}></View>
              <Image style={styles.avatar} source={{uri:this.state.groupUri}}/>
              <View style={styles.body}>
                <View style={styles.bodyContent}>
                  <Text style={styles.name}>{this.state.group}</Text>
                  <Text style={styles.description}>Create by Phattaraphon.c@ku.th</Text>
                  {/* <Text style={styles.description}>Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum electram expetendis</Text> */}
                </View>
            </View>
          </LinearGradient> 
      </View>


        <View  style={{flexDirection:'row',marginTop:20,backgroundColor:'#ffffff', alignItems:'center',height:50}} >
                <Image style={{flex:1,marginLeft:30 ,width:25,height:25,marginRight:20}} source={{uri:this.state.imgPre}}/>
                <TextInput style={{flex:12, fontSize:18}}
                  ref={input => { this.textInput = input }} 
                 
                  onChangeText={this.onChangeText}

        >{this.state.message}</TextInput>
                <TouchableOpacity  style={{flex:1, marginRight:20 ,height:20}}  onPress={() => this.setState({ singlePickerVisible: true })}>
                <Image style={{height:20, width:20}} source={{uri:this.state.imgPri}}/>
                </TouchableOpacity>

          </View>


            <TouchableOpacity style={{height:40,flexDirection:'row',marginTop:20,backgroundColor:'#ffffff', alignItems:'center'}} onPress={() => this.setState({ picker: !this.state.picker})}>
                <Image style={{marginLeft:25, marginRight:10 ,width:30,height:30}} source={{uri:'https://sv1.picz.in.th/images/2020/01/24/Rr3Loy.png'}}/>
                  <View style={{flexDirection: 'row'}} >
                    <Text style={{flex:1,fontSize:18,color:'#171D33',marginLeft:10}}>Due Date</Text>
                    <Text style={{flex:2,fontSize:18,color:'#D4D4D4',fontSize:18, textAlign:'center'}}>{this.state.date}</Text>
                  </View>
                  {/* <Text style={{fontSize:16 , color:'#D4D4D4', marginLeft:162}}>Tomorrow</Text> */}
            </TouchableOpacity>
            {this.renderPicker()}
       

            {/* <TouchableOpacity style={{flex:0.08,flexDirection:'row',marginTop:20,backgroundColor:'#ffffff', alignItems:'center'}} onPress={()=>this.setState({ parker: !this.state.parker})}>
                <Image style={{marginLeft:25, marginRight:10 ,width:25,height:25}} source={{uri:'https://sv1.picz.in.th/images/2020/01/24/Rr3eJD.png'}}/>
                <View style={{flexDirection: 'row'}} >
                    <Text style={{flex:1,fontSize:18,color:'#171D33',marginLeft:10}}>Reminder</Text>
                    <Text style={{flex:2,fontSize:18,color:'#D4D4D4',fontSize:18, textAlign:'center'}}>{this.state.datex}</Text>
                  </View>
                  
            </TouchableOpacity>
            {this.RenderParker()}

            <TouchableOpacity   style={{flex:0.08,flexDirection:'row',backgroundColor:'#ffffff', alignItems:'center'}} onPress={()=>this.setState({ repeat: !this.state.repeat})}>
                <Image style={{marginLeft:25, marginRight:10 ,width:25,height:25}} source={{uri:'https://sv1.picz.in.th/images/2020/01/24/Rr3F5J.png'}}/>
                <View style={{flexDirection: 'row'}} >
                    <Text style={{flex:1,fontSize:18,color:'#171D33',marginLeft:10}}>Repeat</Text>
                    <Text style={{flex:2,fontSize:18,color:'#D4D4D4',fontSize:18, textAlign:'center'}}>{this.state.selectRepeat}</Text>
                  </View>
             
            </TouchableOpacity>
            {this.renderRepeat()} */}


            {/* <View  style={{flex:0.08,flexDirection:'row',marginTop:20,backgroundColor:'#ffffff', alignItems:'center'}} >
                <TextInput style={{flex:1,marginLeft:40}}
                  
                  placeholder="Add a note..."
                  onChangeText={this.onChangeText}

                />
          </View> */}

            <View style={{flex:1, backgroundColor:'#ffffff', marginTop:20}}>
              <View style={{flex:1}}>
                  <ScrollView style={{flex:1,width:'100%'}}>
                      <SafeAreaView forceInset={{top:'always',}} >
                          <View style={{flex:1,marginTop:20,alignItems:'center'}}>
                            {/* <Text style={{width:'80%', fontSize:18, marginTop:'3%', color:'#696969'}}>{moment(now).format('MMMM Do YYYY, h:mm a')}</Text> */}
        <TextInput underlineColorAndroid='#4CAF50' style={{width:'80%', fontSize:18,}} multiline={true} numberOfLines={10} onChangeText={this.onChangeDes}>{this.state.des}</TextInput>
                          </View>
                      </SafeAreaView>
                  </ScrollView>
              </View>
          </View> 

        </View>

        <SinglePickerMaterialDialog
          items={SHORT_LIST.map((row, index) => ({ value: index, label: row }))}
          visible={this.state.singlePickerVisible}
          selectedItem={this.state.singlePickerSelectedItem}
          onCancel={() => this.setState({ singlePickerVisible: false })}
          addPadding={true}
          onOk={result => {
            
            this.setState({ singlePickerVisible: false });
            this.setState({ singlePickerSelectedItem: result.selectedItem });
            this.onFocusFunction();
          }}  
        />





            </Container>
        );
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
          style={{ flex:1.2,width: '100%', height:'2%', marginTop:1 }}
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
          // <DatePicker
          //   style={{ width: 200,marginLeft:80 }}
          //   ref={parker => {
          //     this.datePicker = parker;
          //   }}
          //   date={this.state.datex}
          //   mode="date"
          //   placeholder="Select date"
          //   format="DD/MM/YYYY HH:mm"
          //   // minDate="2016-05-01"
          //   // maxDate="2020-12-12"
          //   confirmBtnText="OK"
          //   cancelBtnText="Cancel"
          //   onDateChange={date => {
          //     this.setState({ datex: date});
          //   }}
          // />
          <DatePickerIOS
          style={{ flex: 0.36,width: '100%', marginTop:1 }}
          date={this.state.chosenDate2}
          onDateChange={this.setDate2}
          mode="datetime"
          
        />
        );
      }
      
    }
    renderRepeat() {
      if (this.state.repeat) {
        return (
          <PickerIOS 
          style={{ flex: 0.36,width: '100%', marginTop:1 }}
              selectedValue={ this.state.selectRepeat }
              onValueChange={(itemValue, itemIndex) => this.setState({ selectRepeat: itemValue})}>
              { this.getRepeat() }
            </PickerIOS>
        );
      }
      
    }
}

const SHORT_LIST = ["HIGH PRIORITY", "MEDIUM PRIORITY", "LOW PRIORITY","NONE PRIORITY"];

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
    // flex: 1,
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
    },
      
    MainContainer2:{
      flex: 4,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 5,
    },
    listArea: {
        backgroundColor: "transparent",
        padding:20,
        flex: 1,
        marginTop: 16,
      },
      avatar: {
        width: 90,
        height: 90,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        // marginBottom:10,
        alignSelf:'center',
        position: 'absolute',
        marginTop:20
      },
      body:{
        // marginTop:10,
      },
      bodyContent: {
        alignItems: 'center',
        padding:5,
        marginBottom:10,
      },
      name:{
        fontSize:25,
        color: "#696969",
        fontWeight: "600",
        color:'#000000'
      },
      info:{
        fontSize:16,
        color: "#00BFFF",
        marginTop:10
      },
      description:{
        fontSize:16,
        color: "#696969",
        marginTop:8,
        textAlign: 'center'
      },


});