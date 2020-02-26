import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Image,} from "react-native";
import Constants from "expo-constants";
import { Container, Header, Title, Button, Icon, Content, InputGroup, Input } from 'native-base';
import ActionButton from 'react-native-action-button';
import Items2 from './Items2'
import database2 from './Database2'


export default class Today extends React.Component {

  state = {
    text: null
  };

  componentDidMount() {
    this.update();
  }

  onChangeText = text => this.setState({ text });

  onPressAdd = () => {
    this.addText();
    this.setState({ text:null});

    this.textInput.clear() 
  };

  addText() {
    if (this.state.text === null || this.state.text === "") {
      return false;
    }

    database2.putText(this.state.text, this.add_text_success, this.add_text_fail);


  };

  add_text_success=async()=>{
    this.update();
  }

  add_text_fail=async(error)=>{
    console.log("already add ");
  }

  change_Complete=(id)=>{
    database2.updateText2(id);
    this.update();
  }

  change_Doing=(id)=>{
    database2.updateText(id);
    this.update();
  }


  delete_Complete=(id)=>{
    database2.deleteText(id);
    //this.onPressTrack();
    
    this.update();
  }

  update (){
    this.todo.update();

  };


  onPressBack(){
    this.props.navigation.navigate('Main1')
 }
 onPressEdit(){
  this.props.navigation.navigate('Edit')
 

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
                {/* <Title>Today</Title> */}
                <Title>Tomorrow</Title>
              </View>
              <View style={{flex: 1, alignItems: 'center',justifyContent: 'center', left: 15}}>
                <Image style={{width: 20, height: 20}}
                source={{uri: 'https://sv1.picz.in.th/images/2020/01/22/RCoeNt.png' }}
              />
              </View>
            </Header>

            <View style={{ flex:1,flexDirection:'column',justifyContent:'center',marginTop:16, alignContent: 'center'}}>
            <View style={{flex: 1, flexDirection: 'column', alignSelf:'center', marginTop:16,justifyContent:'center' , alignContent: 'center'}}>
                <View style ={{flexDirection:'row'}}>
                  <TextInput
                  ref={input => { this.textInput = input }} 
                  style={styles.txtIn2}
                  placeholder="+ Add a task..."
                  onChangeText={this.onChangeText}
                  />
                
                  <TouchableOpacity
                    style={styles.btn_register}
                    onPress={this.onPressAdd}>
                    <Text style={{fontSize:20, color:'#ffffff',textAlign:'center'}}>+</Text>
                  </TouchableOpacity>
                  
                </View>
                <View style={{flex:7,flexDirection:'column',justifyContent:'center' ,alignContent:'center',backgroundColor:'transparent',marginTop:"5%"}}>
                  <ScrollView style={styles.listArea}>
                        
                        <Items2
                            ref={todo => (this.todo = todo)}
                            onPressTodo={this.delete_Complete}
                            onPressTodo2={() => this.props.navigation.navigate('timer', { name: 'timer' })}
                            onPressTodo3={() => this.props.navigation.navigate('Edit', { name: 'Edit' })}
                              />
                        
                </ScrollView>
                </View>
            
       
              </View>
             
                   
                  

              {/* <View style={{marginLeft:"10%",alignItems:'flex-start',justifyContent:'flex-start',backgroundColor:"#666666"}}>
                  <ScrollView style={styles.listArea}>
                      
                    <Items2
                        ref={todo => (this.todo = todo)}
                        onPressTodo={this.delete_Complete}
                          />
                    
                   </ScrollView>
                
              </View> */}
              {/* <View style={{flex: 1, flexDirection: 'row', alignSelf:'center', }}>
                <View>
                  <TextInput 
                   ref={input => { this.textInput = input }} 
                  style={styles.txtIn2}
                  placeholder="+ Add a task..."
                  onChangeText={this.onChangeText}
                  />
                </View>
                <View>
                  <TouchableOpacity
                    style={styles.btn_register}
                    onPress={this.onPressAdd}>
                    <Text style={{fontSize:20, color:'#ffffff',textAlign:'center'}}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
              
              <View style={{flex: 7,flexDirection:'column', marginTop:16}}>
                  <ScrollView style={styles.listArea}>
                      
                    <Items2
                        ref={todo => (this.todo = todo)}
                        onPressTodo={this.delete_Complete}
                          />
                    
                   </ScrollView>
                
              </View> */}

              {/* <View style={{flex: 15,alignItems: 'center',justifyContent: 'center' }}>
                <Image style={{ width: 200, height: 152.77, }} source={{ uri: 'https://sv1.picz.in.th/images/2020/01/22/R2bmVk.png' }}/>
                <Text style={{ color: '#666666' , marginTop:10, textAlign:'center' }}>You’re all done for today! #TodoblackZero{'\n'}Enjoy your night.</Text>
              </View> */}

               {/* <ActionButton buttonColor="rgba(75,21,184,2)" position="center"></ActionButton> */}

               {/* <ActionButton buttonColor="rgba(231,76,60,1)">
              <ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={() => console.log("notes tapped!")}>
                <Icon name="md-create" style={styles.actionButtonIcon} />
              </ActionButton.Item>
              <ActionButton.Item buttonColor='#3498db' title="Notifications" onPress={() => {}}>
                <Icon name="md-notifications-off" style={styles.actionButtonIcon} />
              </ActionButton.Item>
              <ActionButton.Item buttonColor='#1abc9c' title="All Tasks" onPress={() => {}}>
                <Icon name="md-done-all" style={styles.actionButtonIcon} />
              </ActionButton.Item>
            </ActionButton> */}
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
      width:300,
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
      backgroundColor: '#5B3E96',
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
