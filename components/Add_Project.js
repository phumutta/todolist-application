import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Image,} from "react-native";
import Constants from "expo-constants";
import { Container, Header, Title, Button, Icon, Content, InputGroup, Input } from 'native-base';
// import ActionButton from 'react-native-action-button';




export default class Add_Project extends Component {
  onPressBack(){
    this.props.navigation.navigate('Main1')
 }
    render() {
        return (
            <Container>
            <Header >
              <View style = { styles.MainContainer1}>
                <Button transparent onPress={()=>this.onPressBack()}>
                    <Icon name='close' style={{color:'#DBDBDB'}} />
                </Button>
              </View>
              <View style = { styles.MainContainer2 }>
                <Title>Add Project</Title>
              </View>
              
              <TouchableOpacity>
                <View  style={{flex: 1, alignItems: 'center',justifyContent: 'center'}}>
                  <Image style={{width: 20, height: 20}}source={{uri: 'https://sv1.picz.in.th/images/2020/01/26/RHjrif.png' }}/>
                </View>
              </TouchableOpacity>

            </Header>
            {/* <ActionButton buttonColor="rgba(75,21,184,2)" position="center"></ActionButton> */}






        <View style={{flex:1,flexDirection:'column',backgroundColor:'#F6F6F6'}} >


          <TouchableOpacity  style={{flex:0.08,flexDirection:'row',marginTop:20,backgroundColor:'#ffffff', alignItems:'center'}}>
                <Image style={{marginLeft:30, marginRight:10 ,width:15,height:15}} source={{uri:'https://sv1.picz.in.th/images/2020/01/26/RH5SAy.png'}}/>
                  <View style={{flexDirection: 'column'}} >
                    
                    <TextInput 
                   style={{fontSize:16,color:'#0000000',marginLeft:10,marginEnd:3,flexDirection:'row',justifyContent:'center'}}
                  placeholder="New project name"
                  onChangeText={this.onChangeText}
                  />
                  </View>
          </TouchableOpacity>

          <View style={{flex:1,backgroundColor:'#ffffff', marginTop:20}}>
          <View  style={{flex:0.08,flexDirection:'row',backgroundColor:'#ffffff', alignItems:'center'}}>
            
            <TouchableOpacity  style={{flex:0.1,flexDirection:'row', alignItems: 'center',marginTop:20,backgroundColor:'#ffffff',marginLeft:'8%'}}>
              <Image style={{width:25,height:25}} source={{uri:'https://sv1.picz.in.th/images/2020/01/26/RHb43E.png'}}/>
            </TouchableOpacity>
            <TouchableOpacity  style={{flex:0.1,flexDirection:'row', alignItems: 'center',marginTop:20,backgroundColor:'#ffffff',marginLeft:'8%'}}>
              <Image style={{width:28,height:28}} source={{uri:'https://sv1.picz.in.th/images/2020/01/26/RHOwhu.png'}}/>
            </TouchableOpacity>
            <TouchableOpacity  style={{flex:0.1,flexDirection:'row', alignItems: 'center',marginTop:20,backgroundColor:'#ffffff',marginLeft:'8%'}}>
              <Image style={{width:28,height:28}} source={{uri:'https://sv1.picz.in.th/images/2020/01/26/RHOcYP.png'}}/>
            </TouchableOpacity>
            <TouchableOpacity  style={{flex:0.1,flexDirection:'row', alignItems: 'center',marginTop:20,backgroundColor:'#ffffff',marginLeft:'8%'}}>
              <Image style={{width:28,height:28}} source={{uri:'https://sv1.picz.in.th/images/2020/01/26/RHOiue.png'}}/>
            </TouchableOpacity>
            <TouchableOpacity  style={{flex:0.1,flexDirection:'row', alignItems: 'center',marginTop:20,backgroundColor:'#ffffff',marginLeft:'8%'}}>
              <Image style={{width:28,height:28}} source={{uri:'https://sv1.picz.in.th/images/2020/01/26/RHORMl.png'}}/>
            </TouchableOpacity>
            <TouchableOpacity  style={{flex:0.1,flexDirection:'row', alignItems: 'center',marginTop:20,backgroundColor:'#ffffff',marginLeft:'8%'}}>
              <Image style={{width:28,height:28}} source={{uri:'https://sv1.picz.in.th/images/2020/01/26/RHOQ1k.png'}}/>
            </TouchableOpacity>
            <TouchableOpacity  style={{flex:0.1,flexDirection:'row', alignItems: 'center',marginTop:20,backgroundColor:'#ffffff',marginLeft:'8%'}}>
              <Image style={{width:28,height:28}} source={{uri:'https://sv1.picz.in.th/images/2020/01/26/RHOUDv.png'}}/>
            </TouchableOpacity>

          </View>

          <View  style={{flex:0.08,flexDirection:'row',backgroundColor:'#ffffff', alignItems:'center'}}>
            
            <TouchableOpacity  style={{flex:0.1,flexDirection:'row', alignItems: 'center',marginTop:20,backgroundColor:'#ffffff',marginLeft:'8%'}}>
              <Image style={{width:28,height:28}} source={{uri:'https://sv1.picz.in.th/images/2020/01/26/RHObXQ.png'}}/>
            </TouchableOpacity>
            <TouchableOpacity  style={{flex:0.1,flexDirection:'row', alignItems: 'center',marginTop:20,backgroundColor:'#ffffff',marginLeft:'8%'}}>
              <Image style={{width:28,height:28}} source={{uri:'https://sv1.picz.in.th/images/2020/01/26/RHOoRn.png'}}/>
            </TouchableOpacity>
            <TouchableOpacity  style={{flex:0.1,flexDirection:'row', alignItems: 'center',marginTop:20,backgroundColor:'#ffffff',marginLeft:'8%'}}>
              <Image style={{width:28,height:28}} source={{uri:'https://sv1.picz.in.th/images/2020/01/26/RHOD6g.png'}}/>
            </TouchableOpacity>
            <TouchableOpacity  style={{flex:0.1,flexDirection:'row', alignItems: 'center',marginTop:20,backgroundColor:'#ffffff',marginLeft:'8%'}}>
              <Image style={{width:28,height:28}} source={{uri:'https://sv1.picz.in.th/images/2020/01/26/RHOs12.png'}}/>
            </TouchableOpacity>
            <TouchableOpacity  style={{flex:0.1,flexDirection:'row', alignItems: 'center',marginTop:20,backgroundColor:'#ffffff',marginLeft:'8%'}}>
              <Image style={{width:28,height:28}} source={{uri:'https://sv1.picz.in.th/images/2020/01/26/RHOCLy.png'}}/>
            </TouchableOpacity>
            <TouchableOpacity  style={{flex:0.1,flexDirection:'row', alignItems: 'center',marginTop:20,backgroundColor:'#ffffff',marginLeft:'8%'}}>
              <Image style={{width:28,height:28}} source={{uri:'https://sv1.picz.in.th/images/2020/01/26/RHOnO9.png'}}/>
            </TouchableOpacity>
            <TouchableOpacity  style={{flex:0.1,flexDirection:'row', alignItems: 'center',marginTop:20,backgroundColor:'#ffffff',marginLeft:'8%'}}>
              <Image style={{width:28,height:28}} source={{uri:'https://sv1.picz.in.th/images/2020/01/26/RHOrXJ.png'}}/>
            </TouchableOpacity>

          </View>

          <View  style={{flex:0.08,flexDirection:'row',backgroundColor:'#ffffff', alignItems:'center'}}>
            
            <TouchableOpacity  style={{flex:0.1,flexDirection:'row', alignItems: 'center',marginTop:20,backgroundColor:'#ffffff',marginLeft:'8%'}}>
              <Image style={{width:28,height:28}} source={{uri:'https://sv1.picz.in.th/images/2020/01/26/RHOVxf.png'}}/>
            </TouchableOpacity>
            <TouchableOpacity  style={{flex:0.1,flexDirection:'row', alignItems: 'center',marginTop:20,backgroundColor:'#ffffff',marginLeft:'8%'}}>
              <Image style={{width:28,height:28}} source={{uri:'https://sv1.picz.in.th/images/2020/01/26/RHOpWq.png'}}/>
            </TouchableOpacity>
            <TouchableOpacity  style={{flex:0.1,flexDirection:'row', alignItems: 'center',marginTop:20,backgroundColor:'#ffffff',marginLeft:'8%'}}>
              <Image style={{width:28,height:28}} source={{uri:'https://sv1.picz.in.th/images/2020/01/26/RHOvKz.png'}}/>
            </TouchableOpacity>
            <TouchableOpacity  style={{flex:0.1,flexDirection:'row', alignItems: 'center',marginTop:20,backgroundColor:'#ffffff',marginLeft:'8%'}}>
              <Image style={{width:28,height:28}} source={{uri:'https://sv1.picz.in.th/images/2020/01/26/RHOJeR.png'}}/>
            </TouchableOpacity>
            <TouchableOpacity  style={{flex:0.1,flexDirection:'row', alignItems: 'center',marginTop:20,backgroundColor:'#ffffff',marginLeft:'8%'}}>
              <Image style={{width:28,height:28}} source={{uri:'https://sv1.picz.in.th/images/2020/01/26/RHOe30.png'}}/>
            </TouchableOpacity>
            <TouchableOpacity  style={{flex:0.1,flexDirection:'row', alignItems: 'center',marginTop:20,backgroundColor:'#ffffff',marginLeft:'8%'}}>
              <Image style={{width:28,height:28}} source={{uri:'https://sv1.picz.in.th/images/2020/01/26/RHOmOu.png'}}/>
            </TouchableOpacity>
            <TouchableOpacity  style={{flex:0.1,flexDirection:'row', alignItems: 'center',marginTop:20,backgroundColor:'#ffffff',marginLeft:'8%'}}>
              <Image style={{width:28,height:28}} source={{uri:'https://sv1.picz.in.th/images/2020/01/26/RHOyaZ.png'}}/>
            </TouchableOpacity>

          </View>


          <View  style={{flex:0.08,flexDirection:'row',backgroundColor:'#ffffff', alignItems:'center',}}>
            
            <TouchableOpacity  style={{flex:0.1,flexDirection:'row', alignItems: 'center',marginTop:20,backgroundColor:'#ffffff',marginLeft:'8%'}}>
              <Image style={{width:28,height:28}} source={{uri:'https://sv1.picz.in.th/images/2020/01/26/RHOIzI.png'}}/>
            </TouchableOpacity>
            <TouchableOpacity  style={{flex:0.1,flexDirection:'row', alignItems: 'center',marginTop:20,backgroundColor:'#ffffff',marginLeft:'8%'}}>
              <Image style={{width:28,height:28}} source={{uri:'https://sv1.picz.in.th/images/2020/01/26/RHOMxP.png'}}/>
            </TouchableOpacity>
            <TouchableOpacity  style={{flex:0.1,flexDirection:'row', alignItems: 'center',marginTop:20,backgroundColor:'#ffffff',marginLeft:'8%'}}>
              {/* <Image style={{width:28,height:28}} source={{uri:'https://sv1.picz.in.th/images/2020/01/24/RrkimE.png'}}/> */}
            </TouchableOpacity>
            <TouchableOpacity  style={{flex:0.1,flexDirection:'row', alignItems: 'center',marginTop:20,backgroundColor:'#ffffff',marginLeft:'8%'}}>
              {/* <Image style={{width:28,height:28}} source={{uri:'https://sv1.picz.in.th/images/2020/01/24/RrkimE.png'}}/> */}
            </TouchableOpacity>
            <TouchableOpacity  style={{flex:0.1,flexDirection:'row', alignItems: 'center',marginTop:20,backgroundColor:'#ffffff',marginLeft:'8%'}}>
              {/* <Image style={{width:28,height:28}} source={{uri:'https://sv1.picz.in.th/images/2020/01/24/RrkimE.png'}}/> */}
            </TouchableOpacity>
            <TouchableOpacity  style={{flex:0.1,flexDirection:'row', alignItems: 'center',marginTop:20,backgroundColor:'#ffffff',marginLeft:'8%'}}>
              {/* <Image style={{width:28,height:28}} source={{uri:'https://sv1.picz.in.th/images/2020/01/24/RrkimE.png'}}/> */}
            </TouchableOpacity>
            <TouchableOpacity  style={{flex:0.1,flexDirection:'row', alignItems: 'center',marginTop:20,backgroundColor:'#ffffff',marginLeft:'8%'}}>
              {/* <Image style={{width:28,height:28}} source={{uri:'https://sv1.picz.in.th/images/2020/01/24/RrkimE.png'}}/> */}
            </TouchableOpacity>


          </View>

          </View>



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
