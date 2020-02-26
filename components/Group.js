import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Image,} from "react-native";
import Constants from "expo-constants";
import { Container, Header, Title, Button, Icon, Content, InputGroup, Input } from 'native-base';
// import ActionButton from 'react-native-action-button';




export default class Group extends Component {
  onPressBack(){
    this.props.navigation.navigate('Main1')
 }

 onPressCreateNewGroup() {
  this.props.navigation.navigate('CreateNewGroup')
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
                <Title>Group</Title>
              </View>
              
              <TouchableOpacity onPress={()=>this.onPressCreateNewGroup()}>
                <View  style={{flex: 1, alignItems: 'center',justifyContent: 'center', marginRight:'8%'}}>
                  <Image style={{width: 20, height: 20}}source={{uri: 'https://sv1.picz.in.th/images/2020/01/26/RHjrif.png' }}/>
                </View>
              </TouchableOpacity>

            </Header>
            {/* <ActionButton buttonColor="rgba(75,21,184,2)" position="center"></ActionButton> */}





          <View style={{flex:1,flexDirection:'column',backgroundColor:'#F6F6F6'}} >

          <Text style={{fontSize:20 , color:'#666666', marginLeft:'10%',marginTop:'5%', fontWeight:'bold'}}>My Group</Text>

          <TouchableOpacity  style={{flex:0.2,marginTop:20,backgroundColor:'#ffffff',alignItems: 'center',justifyContent: 'center',}}>
                  <Text style={{fontSize:18 , color:'#D4D4D4'}}>Haven’t joined any group yet</Text>
          </TouchableOpacity>

          <View style={{flex:0.08,flexDirection: 'row',justifyContent:'center', alignItems:'center', marginLeft:'10%'}}>
            <View style={{flex:4,}}>
            <Text style={{fontSize:20 , color:'#666666',  fontWeight:'bold'}}>More Group</Text>
            </View>

          <TouchableOpacity>
            <View style={{flex:2,justifyContent:'center', flexDirection:'row', alignItems:'center'}}>
              <Image style={{width:20,height:20}} source={{uri:'https://sv1.picz.in.th/images/2020/01/26/RHllzZ.png'}}/>
              <Text style={{fontSize:12 , color:'#CCCCCC',  fontWeight:'bold', marginRight:'10%', marginLeft:'10%'}}>Refresh</Text>
            </View>
          </TouchableOpacity>
          
          </View>
          

          <View style={{flex:0.125,flexDirection:'row',backgroundColor:'#ffffff', alignItems:'center', borderBottomColor: '#F6F6F6',borderBottomWidth: 1,marginTop:'2%'}} >
            <Image style={{marginLeft:'10%', marginRight:'5%' ,width:30,height:30}} source={{uri:'https://sv1.picz.in.th/images/2020/01/26/RHl31W.png'}}/>
                <View style={{flex:1, flexDirection: 'column'}} >
                  <Text style={{fontSize:18,color:'#171D33',marginLeft:2,marginEnd:3,alignItems:'center',justifyContent:'center', }}>Dek 62</Text>
                  <Text style={{fontSize:12,marginTop:3,color:'#C4C4C4'}}>มาเข้ากลุ่มเด็กแอด 62 กันเถอะ</Text>
                </View>
                <TouchableOpacity style={{marginRight:'8%'}}>
                  <View  style={{flexDirection:'row-reverse',backgroundColor:'#ffffff',justifyContent: 'center',borderRadius:10, borderWidth:1,borderColor:'#F0ECFC', width:70, backgroundColor:'#F0ECFC'}}>
                    <Text style={{fontSize:16,margin:'3%',color:'#6F41E9', justifyContent:'center'}}>Join</Text>
                  </View>
                </TouchableOpacity>
            </View>

          <View style={{flex:0.125,flexDirection:'row',backgroundColor:'#ffffff', alignItems:'center', borderBottomColor: '#F6F6F6',borderBottomWidth: 1,}} >
            <Image style={{marginLeft:'10%', marginRight:'5%' ,width:30,height:30}} source={{uri:'https://sv1.picz.in.th/images/2020/01/26/RHl31W.png'}}/>
                <View style={{flex:1, flexDirection: 'column'}} >
                  <Text style={{fontSize:18,color:'#171D33',marginLeft:2,marginEnd:3,alignItems:'center',justifyContent:'center', }}>Dek 63</Text>
                  <Text style={{fontSize:12,marginTop:3,color:'#C4C4C4'}}>มาเข้ากลุ่มเด็กแอด 63 กันเถอะ</Text>
                </View>
                <TouchableOpacity style={{marginRight:'8%'}}>
                  <View  style={{flexDirection:'row-reverse',backgroundColor:'#ffffff',justifyContent: 'center',borderRadius:10, borderWidth:1,borderColor:'#F0ECFC', width:70, backgroundColor:'#F0ECFC'}}>
                    <Text style={{fontSize:16,margin:'3%',color:'#6F41E9', justifyContent:'center'}}>Join</Text>
                  </View>
                </TouchableOpacity>
            </View>

          <View style={{flex:0.125,flexDirection:'row',backgroundColor:'#ffffff', alignItems:'center', borderBottomColor: '#F6F6F6',borderBottomWidth: 1,}} >
            <Image style={{marginLeft:'10%', marginRight:'5%' ,width:30,height:30}} source={{uri:'https://sv1.picz.in.th/images/2020/01/26/RHl31W.png'}}/>
                <View style={{flex:1, flexDirection: 'column'}} >
                  <Text style={{fontSize:18,color:'#171D33',marginLeft:2,marginEnd:3,alignItems:'center',justifyContent:'center', }}>Dek 64</Text>
                  <Text style={{fontSize:12,marginTop:3,color:'#C4C4C4'}}>มาเข้ากลุ่มเด็กแอด 64 กันเถอะ</Text>
                </View>
                <TouchableOpacity style={{marginRight:'8%'}}>
                  <View  style={{flexDirection:'row-reverse',backgroundColor:'#ffffff',justifyContent: 'center',borderRadius:10, borderWidth:1,borderColor:'#F0ECFC', width:70, backgroundColor:'#F0ECFC'}}>
                    <Text style={{fontSize:16,margin:'3%',color:'#6F41E9', justifyContent:'center'}}>Join</Text>
                  </View>
                </TouchableOpacity>
            </View>



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
  },
  MainContainer2:{
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  photo4: {
    height: 18,
      width: 18,
      marginRight:20,
      flexDirection: 'row-reverse',
      alignItems:'center'

  
  
  },



});
