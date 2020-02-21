import React, { Component } from 'react';
import { Container, Header, Title, Button, Icon, Content, InputGroup, Input } from 'native-base';
import { StyleSheet, Text, View,TouchableOpacity,Image, Alert, TextInput, ScrollView } from 'react-native';
import Constants from "expo-constants";

export default class Ranking extends React.Component {

  onPressBack(){
    this.props.navigation.navigate('Main1')
 }

  render() {
    return (
        <Container>
          <Header >
              <View style = { styles.MainContainer1}>
                <Button transparent onPress={()=>this.onPressBack()}>
                    <Icon name='close' style={{color:'#CCCCCC'}} />
                </Button>
              </View>
              <View style = { styles.MainContainer2 }>
                <Title>Ranking</Title>
              </View>
              <View style={{flex: 1, alignItems: 'center',justifyContent: 'center', left: 15}}>
                {/* <Image style={{width: 20, height: 20}}
                source={{uri: 'https://sv1.picz.in.th/images/2020/01/22/RCoeNt.png' }}
              /> */}
              </View>
            </Header>
            <ScrollView style={styles.listArea}>
        <View style={{flex:1,flexDirection:'column',backgroundColor:'#F6F6F6'}} >

          
        <View style={{flex:0.1,height:50,flexDirection:'row',backgroundColor:'#ffffff', alignItems:'center', borderBottomColor: '#F6F6F6',
    borderBottomWidth: 1,}} >
        {/* <Text style={{fontSize:18,marginTop:3,color:'#4B15B8'}}>0h</Text> */}
        <Image style={{marginLeft:10, marginRight:10 ,width:30,height:30}} source={{uri:'https://sv1.picz.in.th/images/2020/01/24/Rrzx3P.png'}}/>
        <Image style={{marginLeft:10, marginRight:10 ,width:40,height:40}} source={{uri:'https://sv1.picz.in.th/images/2020/01/24/Rr0aX1.png'}}/>
                  <View style={{flexDirection: 'column'}} >
                    <Text style={{fontSize:18,color:'#171D33',marginLeft:2,marginEnd:3,alignItems:'center',justifyContent:'center'}}>Oat Phattaraphon</Text>
                  </View>
                  {/* <Text style={{fontSize:18,marginTop:3,marginLeft:110 , color:'#4B15B8'}}>0h</Text> */}
          </View>
           <View style={{flex:0.1,height:50,flexDirection:'row',backgroundColor:'#ffffff', alignItems:'center', borderBottomColor: '#F6F6F6',
    borderBottomWidth: 1,}} >
        <Image style={{marginLeft:10, marginRight:10 ,width:30,height:30}} source={{uri:'https://sv1.picz.in.th/images/2020/01/24/RrzoPV.png'}}/>
        <Image style={{marginLeft:10, marginRight:10 ,width:40,height:40}} source={{uri:'https://sv1.picz.in.th/images/2020/01/24/Rr0aX1.png'}}/>
                  <View style={{flexDirection: 'column'}} >
                    <Text style={{fontSize:18,color:'#171D33',marginLeft:2,marginEnd:3,alignItems:'center',justifyContent:'center'}}>Oat Phattaraphon</Text>
                    {/* <Text style={{fontSize:12,marginTop:3,color:'#C4C4C4'}}>Synchonize whitin all devides.</Text> */}
                  </View>
                  {/* <Text style={{fontSize:18,marginTop:3,marginLeft:110 , color:'#4B15B8'}}>0h</Text> */}
          </View>

           <View style={{flex:0.1,height:50,flexDirection:'row',backgroundColor:'#ffffff', alignItems:'center', borderBottomColor: '#F6F6F6',
    borderBottomWidth: 1,}} >
        <Image style={{marginLeft:10, marginRight:10 ,width:30,height:30}} source={{uri:'https://sv1.picz.in.th/images/2020/01/24/Rr4TTQ.png'}}/>
        <Image style={{marginLeft:10, marginRight:10 ,width:40,height:40}} source={{uri:'https://sv1.picz.in.th/images/2020/01/24/Rr0aX1.png'}}/>
                  <View style={{flexDirection: 'column'}} >
                    <Text style={{fontSize:18,color:'#171D33',marginLeft:2,marginEnd:3,alignItems:'center',justifyContent:'center'}}>Oat Phattaraphon</Text>
                    {/* <Text style={{fontSize:12,marginTop:3,color:'#C4C4C4'}}>Synchonize whitin all devides.</Text> */}
                  </View>
                  {/* <Text style={{fontSize:18,marginTop:3,marginLeft:110 , color:'#4B15B8'}}>0h</Text> */}
          </View>
           <View style={{flex:0.1,height:50,flexDirection:'row',backgroundColor:'#ffffff', alignItems:'center', borderBottomColor: '#F6F6F6',
    borderBottomWidth: 1,}} >
          <Text style={{fontSize:25,marginTop:3,color:'#666666', marginLeft:20}}>4</Text>
        <Image style={{marginLeft:30, marginRight:10 ,width:40,height:40}} source={{uri:'https://sv1.picz.in.th/images/2020/01/24/Rr0aX1.png'}}/>
                  <View style={{flexDirection: 'column'}} >
                    <Text style={{fontSize:18,color:'#171D33',marginLeft:2,marginEnd:3,alignItems:'center',justifyContent:'center'}}>Oat Phattaraphon</Text>
                    {/* <Text style={{fontSize:12,marginTop:3,color:'#C4C4C4'}}>Synchonize whitin all devides.</Text> */}
                  </View>
                  {/* <Text style={{fontSize:18,marginTop:3,marginLeft:110 , color:'#4B15B8'}}>0h</Text> */}
          </View>
           <View style={{flex:0.1,height:50,flexDirection:'row',backgroundColor:'#ffffff', alignItems:'center', borderBottomColor: '#F6F6F6',
    borderBottomWidth: 1,}} >
          <Text style={{fontSize:25,marginTop:3,color:'#666666', marginLeft:20}}>5</Text>
        <Image style={{marginLeft:30, marginRight:10 ,width:40,height:40}} source={{uri:'https://sv1.picz.in.th/images/2020/01/24/Rr0aX1.png'}}/>
                  <View style={{flexDirection: 'column'}} >
                    <Text style={{fontSize:18,color:'#171D33',marginLeft:2,marginEnd:3,alignItems:'center',justifyContent:'center'}}>Oat Phattaraphon</Text>
                    {/* <Text style={{fontSize:12,marginTop:3,color:'#C4C4C4'}}>Synchonize whitin all devides.</Text> */}
                  </View>
                  {/* <Text style={{fontSize:18,marginTop:3,marginLeft:110 , color:'#4B15B8'}}>0h</Text> */}
          </View>
           <View style={{flex:0.1,height:50,flexDirection:'row',backgroundColor:'#ffffff', alignItems:'center', borderBottomColor: '#F6F6F6',
    borderBottomWidth: 1,}} >
          <Text style={{fontSize:25,marginTop:3,color:'#666666', marginLeft:20}}>6</Text>
        <Image style={{marginLeft:30, marginRight:10 ,width:40,height:40}} source={{uri:'https://sv1.picz.in.th/images/2020/01/24/Rr0aX1.png'}}/>
                  <View style={{flexDirection: 'column'}} >
                    <Text style={{fontSize:18,color:'#171D33',marginLeft:2,marginEnd:3,alignItems:'center',justifyContent:'center'}}>Oat Phattaraphon</Text>
                    {/* <Text style={{fontSize:12,marginTop:3,color:'#C4C4C4'}}>Synchonize whitin all devides.</Text> */}
                  </View>
                  {/* <Text style={{fontSize:18,marginTop:3,marginLeft:110 , color:'#4B15B8'}}>0h</Text> */}
          </View>
           <View style={{flex:0.1,height:50,flexDirection:'row',backgroundColor:'#ffffff', alignItems:'center', borderBottomColor: '#F6F6F6',
    borderBottomWidth: 1,}} >
          <Text style={{fontSize:25,marginTop:3,color:'#666666', marginLeft:20}}>7</Text>
        <Image style={{marginLeft:30, marginRight:10 ,width:40,height:40}} source={{uri:'https://sv1.picz.in.th/images/2020/01/24/Rr0aX1.png'}}/>
                  <View style={{flexDirection: 'column'}} >
                    <Text style={{fontSize:18,color:'#171D33',marginLeft:2,marginEnd:3,alignItems:'center',justifyContent:'center'}}>Oat Phattaraphon</Text>
                    {/* <Text style={{fontSize:12,marginTop:3,color:'#C4C4C4'}}>Synchonize whitin all devides.</Text> */}
                  </View>
                  {/* <Text style={{fontSize:18,marginTop:3,marginLeft:110 , color:'#4B15B8'}}>0h</Text> */}
          </View>
           <View style={{flex:0.1,height:50,flexDirection:'row',backgroundColor:'#ffffff', alignItems:'center', borderBottomColor: '#F6F6F6',
    borderBottomWidth: 1,}} >
          <Text style={{fontSize:25,marginTop:3,color:'#666666', marginLeft:20}}>8</Text>
        <Image style={{marginLeft:30, marginRight:10 ,width:40,height:40}} source={{uri:'https://sv1.picz.in.th/images/2020/01/24/Rr0aX1.png'}}/>
                  <View style={{flexDirection: 'column'}} >
                    <Text style={{fontSize:18,color:'#171D33',marginLeft:2,marginEnd:3,alignItems:'center',justifyContent:'center'}}>Oat Phattaraphon</Text>
                    {/* <Text style={{fontSize:12,marginTop:3,color:'#C4C4C4'}}>Synchonize whitin all devides.</Text> */}
                  </View>
                  {/* <Text style={{fontSize:18,marginTop:3,marginLeft:110 , color:'#4B15B8'}}>0h</Text> */}
          </View>
           <View style={{flex:0.1,height:50,flexDirection:'row',backgroundColor:'#ffffff', alignItems:'center', borderBottomColor: '#F6F6F6',
    borderBottomWidth: 1,}} >
          <Text style={{fontSize:25,marginTop:3,color:'#666666', marginLeft:20}}>9</Text>
        <Image style={{marginLeft:30, marginRight:10 ,width:40,height:40}} source={{uri:'https://sv1.picz.in.th/images/2020/01/24/Rr0aX1.png'}}/>
                  <View style={{flexDirection: 'column'}} >
                    <Text style={{fontSize:18,color:'#171D33',marginLeft:2,marginEnd:3,alignItems:'center',justifyContent:'center'}}>Oat Phattaraphon</Text>
                    {/* <Text style={{fontSize:12,marginTop:3,color:'#C4C4C4'}}>Synchonize whitin all devides.</Text> */}
                  </View>
                  {/* <Text style={{fontSize:18,marginTop:3,marginLeft:110 , color:'#4B15B8'}}>0h</Text> */}
          </View>
           <View style={{flex:0.1,height:50,flexDirection:'row',backgroundColor:'#ffffff', alignItems:'center', borderBottomColor: '#F6F6F6',
    borderBottomWidth: 1,}} >
          <Text style={{fontSize:25,marginTop:3,color:'#666666', marginLeft:20, }}>10</Text>
        <Image style={{marginLeft:20, marginRight:10 ,width:40,height:40}} source={{uri:'https://sv1.picz.in.th/images/2020/01/24/Rr0aX1.png'}}/>
                  <View style={{flexDirection: 'column'}} >
                    <Text style={{fontSize:18,color:'#171D33',marginLeft:2,marginEnd:3,alignItems:'center',justifyContent:'center'}}>Oat Phattaraphon</Text>
                    {/* <Text style={{fontSize:12,marginTop:3,color:'#C4C4C4'}}>Synchonize whitin all devides.</Text> */}
                  </View>
                  {/* <Text style={{fontSize:18,marginTop:3,marginLeft:110 , color:'#4B15B8'}}>0h</Text> */}
          </View>



          {/* <TouchableOpacity style={{flex:0.08,flexDirection:'row',marginTop:20,backgroundColor:'#ffffff', alignItems:'center'}} >
            <Text style={{flex:1, fontSize:20,marginLeft:30}}>Project</Text>
            <Image source={{ uri: "https://sv1.picz.in.th/images/2020/01/23/RuAgpJ.png" }} style={styles.photo4} />
          </TouchableOpacity>

          <TouchableOpacity style={{flex:0.08,flexDirection:'row',marginTop:20,backgroundColor:'#ffffff',alignItems:'center'}} >
            <Text style={{flex:1, fontSize:20,marginLeft:30}}>Usage Guidance</Text>
            <Image source={{ uri: "https://sv1.picz.in.th/images/2020/01/23/RuAgpJ.png" }} style={styles.photo4} />
          </TouchableOpacity>

          <TouchableOpacity style={{flex:0.08,flexDirection:'row',backgroundColor:'#ffffff',alignItems:'center'}} >
            <Text style={{flex:1, fontSize:20,marginLeft:30}}>Help & Feedback</Text>
            <Image source={{ uri: "https://sv1.picz.in.th/images/2020/01/23/RuAgpJ.png" }} style={styles.photo4} />
          </TouchableOpacity>
          
          <TouchableOpacity style={{flex:0.08,flexDirection:'row',backgroundColor:'#ffffff',alignItems:'center'}} >
            <Text style={{flex:1, fontSize:20,marginLeft:30}}>Rate Now</Text>
            <Image source={{ uri: "https://sv1.picz.in.th/images/2020/01/23/RuAgpJ.png" }} style={styles.photo4} />
          </TouchableOpacity>

          <TouchableOpacity style={{flex:0.08,flexDirection:'row',backgroundColor:'#ffffff',alignItems:'center'}} >
            <Text style={{flex:1, fontSize:20,marginLeft:30}}>Tell Your Friends</Text>
            <Image source={{ uri: "https://sv1.picz.in.th/images/2020/01/23/RuAgpJ.png" }} style={styles.photo4} />
          </TouchableOpacity>

          <TouchableOpacity style={{flex:0.08,flexDirection:'row',backgroundColor:'#ffffff',alignItems:'center'}} >
            <Text style={{flex:1, fontSize:20,marginLeft:30}}>Official Website</Text>
            <Image source={{ uri: "https://sv1.picz.in.th/images/2020/01/23/RuAgpJ.png" }} style={styles.photo4} />
          </TouchableOpacity> */}
          
        </View>
        </ScrollView>
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
    marginLeft: 10,
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

  
  
  }, listArea: {
    backgroundColor: "transparent",

    flex: 1,
    paddingTop: 16
  },



});
