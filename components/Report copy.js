import React, { Component,PureComponent } from 'react';
import { ScrollView, StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Image,Dimensions,AppRegistry,ART,Animated} from "react-native";
import Constants from "expo-constants";
import { Container, Header, Title, Button, Icon, Content, InputGroup, Input, Row } from 'native-base';
import ProgressCircle from 'react-native-progress-circle'
import AnimatedProgressWheel from 'react-native-progress-wheel';
import database from './Database3';
import { Svg, G, Line, Rect } from 'react-native-svg'
import * as d3 from 'd3'
// import "react-sweet-progress/lib/style.css";
// import { Progress } from 'react-sweet-progress';

export default class Report extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      id: '', 
      sizeObj: 0,
      success: 0,
      Uncomplete:0,
      percen: 0,
      pRed:0,
      pYellow:0,
      pGreen:0,
      pGray:0
    }
    this.onAsyncReadCom();
    this.onAsyncReadPri();
  }

  onFocusFunction=async()=>{
    const email_store = await AsyncStorage.getItem('@email');
    this.setState({ id: email_store })
    
  }
  componentDidMount(){
    this.onFocusFunction();
   
  }
//********************************************************************/
  onAsyncReadCom=async ()=>{
    database.readStatus('Phumutta@gmail.com',this.success_callback, this.fail_callback);
  }
  success_callback = (data, allwork, success) =>{
    //console.log(data)
    var calc = ((success/allwork)*100)
    var notDone = allwork-success;
    console.log(notDone)
    console.log("Size obj is: " + allwork + " and work success: " + success)

    this.setState({sizeObj: allwork, success:success,Uncomplete:notDone, percen: calc.toFixed(0)})
  }

  fail_callback() {
    //console.log("Data is empty")
    Alert.alert("Data is empty")
  }
//********************************************************************/
onAsyncReadPri=async ()=>{
  database.readPiority('Phumutta@gmail.com',this.priority_callback, this.fail_callback);
}
priority_callback = (data, allwork,priority0,priority1,priority2,priority3) =>{
  //console.log(data)
  var pri0 = ((priority0/allwork)*100);
  var pri1 = ((priority1/allwork)*100);
  var pri2 = ((priority2/allwork)*100);
  var pri3 = ((priority3/allwork)*100);
  console.log("Size obj is: " + allwork + "PriorityRed :"+pri3 + "PriorityYellow :"+ pri2 +"PriorityGreen :"+pri1+ "PriorityGray :"+pri0)
  this.setState({pRed:pri3.toFixed(2),
                  pYellow:pri2.toFixed(2),
                  pGreen:pri1.toFixed(2),
                  pGray:pri0.toFixed(2),
                  })
}

  onPressBack(){
    this.props.navigation.navigate('Main1')
 }

    render() {
        return (
         <Container style={{backgroundColor: "#fff"}}>
             <Header >
              <View style = { styles.MainContainer1}>
                <Button transparent onPress={()=>this.onPressBack()}>
                    <Icon name='ios-arrow-back' style={{color:'#DBDBDB'}} />
                </Button>
              </View>
              <View style = { styles.MainContainer22 }>
                <Title>Report</Title>
              </View>
{/*               
              <View style={{flex: 1, alignItems: 'center',justifyContent: 'center', left: 15}}> */}
                {/* <Image style={{width: 20, height: 20}}source={{uri: 'https://sv1.picz.in.th/images/2020/01/24/RrBuNt.png' }}/> */}
              {/* </View> */}
            </Header>
            
           <View style = { styles.blog}>
            
              <Text style={{marginRight:'70%',marginTop:'5%',fontSize: 18,fontWeight: "bold"}}>Status</Text>
              <TouchableOpacity style={styles.success1} disabled={true}>
                    <ProgressCircle
                      percent={this.state.percen}
                      radius={85}
                      borderWidth={10}  
                      color="#48D1CA"
                      shadowColor="#5B785B"
                      bgColor="#E0FFFF"
                  >
                      <Text style={{ fontSize: 40 ,color:'#5B785B',fontWeight:"bold"}}>{this.state.percen}%</Text>
                  </ProgressCircle>
                  
                </TouchableOpacity>
                <View style={{flexDirection:"row" ,marginBottom:8}}>
                    <View style={{marginTop:2,
                                  right:7,
                                  width: 15,
                                  height: 15,
                                  backgroundColor: '#5B785B',
                                  borderRadius:10}} />
                                  
                    <Text style={{flex:0.6,fontWeight: "bold"}}>Unsuccess:{this.state.Uncomplete}</Text>
                    <View style={{marginTop:2,
                                  right:7,
                                  width: 15,
                                  height: 15,
                                  backgroundColor: '#48D1CA',
                                  borderRadius:10}} />
                    <Text style={{fontWeight: "bold"}}>Success:{this.state.success}</Text>
                        
                    
                </View>
            </View>
            
                <View style = { styles.blogee}>
                <Text style={{marginRight:'70%',marginTop:'5%',fontSize: 18,fontWeight: "bold"}}>Priority</Text>
                <TouchableOpacity style={styles.success} disabled={true}>
                <View style={styles.progressBarHigh}>
                <Animated.View style={ {backgroundColor: "#FF0000", width:String(this.state.pRed)+"%",borderRadius:10}}/>
                </View>

                
                <Text  style={{marginLeft:'2%',fontWeight: "bold",left:10}}>{this.state.pRed}%</Text>
                   
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.success} disabled={true}>
                <View style={styles.progressBarMedium}>
                <Animated.View style={ {backgroundColor: "#FFBF00", width:String(this.state.pYellow)+"%",borderRadius:10}}/>
                </View>
                    <Text  style={{marginLeft:'2%',fontWeight: "bold",left:10}}>{this.state.pYellow}%</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.success} disabled={true}>
                <View style={styles.progressBarLow}>
                <Animated.View style={ {backgroundColor: "#00FF00",width:String(this.state.pGreen)+"%",borderRadius:10}}/>
                </View>
                <Text  style={{marginLeft:'2%',fontWeight: "bold",left:10}}>{this.state.pGreen}%</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.success} disabled={true}>
                <View style={styles.progressBarNone}>
                <Animated.View style={ {backgroundColor: "#C0C0C0", width:String(this.state.pGray)+"%",borderRadius:10}}/>
               
                </View>
                <Text style={{marginLeft:'2%',fontWeight: "bold",left:10}}>{this.state.pGray}%</Text>
                  </TouchableOpacity>
                  <View style={{flexDirection:'row',marginLeft:15,marginBottom:8}}>
                    <View style={{marginTop:2,
                                  right:7,
                                  width: 15,
                                  height: 15,
                                  backgroundColor: '#FF0000',
                                  borderRadius:10}} />
                    <Text style={{flex:0.2,fontWeight: "bold"}}>High</Text>
                    <View style={{marginTop:2,
                                  right:7,
                                  width: 15,
                                  height: 15,
                                  backgroundColor: '#FFBF00',
                                  borderRadius:10}} />
                    <Text style={{flex:0.2,fontWeight: "bold"}}>Medium</Text>
                    <View style={{marginTop:2,
                                  left:12,
                                  right:7,
                                  width: 15,
                                  height: 15,
                                  backgroundColor: '#00FF00',
                                  borderRadius:10}} />
                   <Text style={{flex:0.2,left:15,fontWeight: "bold"}}>Low</Text>
                    <View style={{marginTop:2,
                                  left:10,
                                  width: 15,
                                  height: 15,
                                  backgroundColor: '#999',
                                   borderRadius:10}} />
                    <Text style={{flex:0.2,left:15,fontWeight: "bold"}}>None</Text>
                  </View>
                
             </View>
           
           </Container>
        );
    }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: "#454A4D",
    flex: 1,
    paddingTop: Constants.statusBarHeight
  },
  blog:{
    flex: 1,
    flexDirection:"column",
    height: '10%',
    width:'98%',
    marginTop:'1%',
    marginLeft:'1%',
    marginRight:'1%',
    justifyContent:"center",
    alignItems: 'center',
  //  backgroundColor: '#332000',
    borderRadius:10,
    borderWidth:3,
    borderColor:'#5B785B'

  },
  blogee:{
    flex: 1.5,
    flexDirection:"column",
    height: 20,
    width:'98%',
   // margin:'20%',
    marginTop:'1%',
    marginLeft:'1%',
    marginRight:'1%',
    marginBottom:'1%',
    justifyContent:"center",
    alignItems: 'center',
  //  backgroundColor: '#332000',
    borderRadius:10,
    borderWidth:3,
    borderColor:'#5B785B'

  },
  success1:{
    flexDirection:"row",
      flex: 1,
      height: 5,
      width:'80%',
     // marginTop:'30%',
    
      // borderColor:'#000',
      justifyContent:"center",
      alignItems: 'center',
     // backgroundColor: '#332000',
    },
 success:{
  flexDirection:"row",
    flex: 1,
    height: 5,
    width:'80%',
   // marginTop:'30%',
    right:10,
    // borderColor:'#000',
    justifyContent:"flex-start",
    alignItems: 'center',
   // backgroundColor: '#332000',
  },
  progressBarHigh: {
    height: 20,
    flexDirection:'row',
    width: '90%',
    backgroundColor: 'white',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#FF9797',
  },
  progressBarLow: {
    height: 20,
    flexDirection:'row',
    width: '90%',
    backgroundColor: 'white',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#88DDBB'

  },
  progressBarMedium: {
    height: 20,
    flexDirection:'row',
    width: '90%',
    backgroundColor: 'white',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#FFD700'
  },
  progressBarNone: {
    height: 20,
    flexDirection:'row',
    width: '90%',
    backgroundColor: 'white',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#999F'
  },


  heading: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center"
  },
  flexRow: {
    flexDirection: "row"
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
      
    MainContainer22:{
      flex: 4,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 5,
      marginRight:'17%'
    },
    

});