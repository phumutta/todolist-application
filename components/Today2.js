import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert, TextInput, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Card } from 'react-native-shadow-cards';
import { AsyncStorage } from 'react-native';
import { Container, Header, Title, Button, Icon } from 'native-base';
import Items2 from './Items2'
import database2 from './Database2'
export default class Today2 extends React.Component {
  state = {
    email: '',
    name: '',
    last: '',
    uri: "https://sv1.picz.in.th/images/2020/01/23/RuEI4z.png"

  };
  onPressToday() {
    Alert.alert("hello")
  }
  onPressTomorrow() {
    this.props.navigation.navigate('Tomorrow')
  }
  onPressUpcoming() {
    this.props.navigation.navigate('Upcoming')
  }
  onPressSomeday() {
    this.props.navigation.navigate('Someday')
  }
  onPressCompleted() {
    this.props.navigation.navigate('Completed')
  }
  onPressInbox() {
    this.props.navigation.navigate('Inbox')
  }
  onPressSetting() {
    this.props.navigation.navigate('Setting')
  }
  onPressForest() {
    this.props.navigation.navigate('Forest')
  }
  onFocusFunction = async () => {

    // const value =await AsyncStorage.getItem('@email');
    // this.setState({email:value})
    // database.readdata(this.state.email,this.read_Account_success,this.read_Account_fail)
    // console.log("test")
    // console.log(this.state.email)
    const name_store = await AsyncStorage.getItem('@name');
    console.log(name_store)
    const last_store = await AsyncStorage.getItem('@last');
    const uri_store = await AsyncStorage.getItem('@uri');
    if (uri_store == null) {
      this.setState({ uri: "https://sv1.picz.in.th/images/2020/01/23/RuEI4z.png" })
      this.setState({ name: name_store })
      this.setState({ last: last_store })
    }
    else {
      this.setState({ name: name_store })
      this.setState({ last: last_store })
      this.setState({ uri: uri_store })
    }
  }
  // read_Account_success=async(doc)=>{
  //   this.setState({name:doc.name})
  //   this.setState({email:doc.email})
  //   this.setState({last:doc.last})
  //   console.log(this.state.name);

  //   await AsyncStorage.setItem('@name',this.state.name);
  //   await AsyncStorage.setItem('@last',this.state.last);
  // }

  // read_Account_fail=async()=>{
  //   console.log("error")


  // }
  componentDidMount() {

    this.onFocusFunction();


  }
  onPressBack(){
    this.props.navigation.navigate('Main1')
 }

  render() {
    return (
      <Container>
        <Header >
          <View style={styles.MainContainer1}>
            <Button transparent onPress={() => this.onPressBack()}>
              <Icon name='ios-arrow-back' style={{ color: '#DBDBDB' }} />
            </Button>
          </View>
          <View style={styles.MainContainer2}>
            <Title>Today</Title>
          </View>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', left: 15 }}>
            <Image style={{ width: 20, height: 20 }}
              source={{ uri: 'https://sv1.picz.in.th/images/2020/01/22/RCoeNt.png' }}
            />
          </View>
        </Header>



        <LinearGradient
          colors={['#FFFFFF', '#FFFFFF']}
          style={{
            flex: 1,
            // position: 'absolute',
            // left: 0,
            // right: 0,
            // top: 0,
            // height: 500,
          }}>


          {/* <View style={{flex:1,backgroundColor:"#000000"}}></View> */}
          {/*           
              <View style={{flex: 1, flexDirection: 'row', alignSelf:'center', marginTop:16, }}>
                <View>
                  <TextInput
                  ref={input => { this.textInput = input }} 
                  style={styles.txtIn2}
                  placeholder="insert item"
                  onChangeText={this.onChangeText}
                  />
                </View>
            </View> */}

          <View style={{ flex: 1, marginTop: 30, marginLeft: 10, backgroundColor: "#transparent", alignContent: 'center' }}>
            {/* <Card style={{padding: 10, margin: 10}}>
            <Text>Open up App.js to start working on your app!</Text>
            <Text>Changes you make will automatically reload.</Text>
            <Text>Shake your phone to open the developer menu.</Text>
          </Card> */}



            <Card style={{ padding: 10, margin: 10, flexDirection: 'row',justifyContent:'center',alignItems:'center' }} >

              {/* <View style={{flex:0.1,marginLeft:10,alignItems: 'center',justifyContent: 'center'}}> 
              <Image source={{ uri: "https://sv1.picz.in.th/images/2020/01/22/R21DSe.png" }} style={styles.photo3} />
              </View> */}
              <View style={{ flexDirection: 'row' }}>
                <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' ,alignContent:'center'}} >
                  <TouchableOpacity style={{ alignItems: 'center' }}>
                    <Text style={styles.Text2} onPress={() => this.onPressToday()}>0.0</Text>
                    <View style={{ alignItems: 'center' }}>
                      <Text style={styles.under}>Estimated Time(h)</Text>
                    </View>

                  </TouchableOpacity>
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center' }} >
                  <Text style={styles.TTT} >|</Text>
                </View>

                <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center',alignContent:'center' }} >
                  <TouchableOpacity style={{ alignItems: 'center' }}>
                    <Text style={styles.Text22} onPress={() => this.onPressToday()}>2</Text>
                    <View style={{ alignItems: 'center' }}>
                      <Text style={styles.under2}>Tasked to be{'\n'} Completed</Text>
                    </View>

                  </TouchableOpacity>
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center' ,alignContent:'center'}} >
                  <Text style={styles.TTT} >|</Text>
                </View>
                <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} >
                  <TouchableOpacity style={{ alignItems: 'center' }}>
                    <Text style={styles.Text2} onPress={() => this.onPressToday()}>0.8</Text>
                    <View style={{ alignItems: 'center' }}>
                      <Text style={styles.under}>Elapsed Time(h)</Text>
                    </View>

                  </TouchableOpacity>
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center' ,alignContent:'center'}} >
                  <Text style={styles.TTT} >|</Text>
                </View>
                <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} >
                  <TouchableOpacity style={{ alignItems: 'center' }}>
                    <Text style={styles.Text2} onPress={() => this.onPressToday()}>1</Text>
                    <View style={{ alignItems: 'center' }}>
                      <Text style={styles.under}>Completed  tasks</Text>
                    </View>

                  </TouchableOpacity>
                </View>




              </View>
            </Card>

            <View style={{ flex: 1, flexDirection: 'column', alignSelf: 'center', marginTop: 16, }}>
              <View>
                <TextInput
                  style={styles.txtIn2}
                  placeholder="+ Add a task..."
                  onChangeText={this.onChangeText}
                />
              </View>
            <View style={{flex:7,flexDirection:'column',justifyContent:'center' ,alignContent:'center',backgroundColor:'transparent',marginTop:"5%"}}>

           
          
            <View style={{marginLeft:"10%",alignItems:'flex-start',justifyContent:'flex-start'}}>
              <Text style={{color:'#666666',fontSize:15,fontWeight:'bold'}}>Inbox</Text>
              </View> 
              
           <ScrollView style={styles.listArea}>
              <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            
             <Card style={{ flex:1, flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start', borderRadius: 55, marginTop:12, }} >
              
             <Image style={{marginLeft:"5%",marginTop:"3%",width:25,height:25}} source={{uri:'https://sv1.picz.in.th/images/2020/01/24/Rr9eWe.png'}}/>
               <TouchableOpacity
                
     
                 style={{
                   backgroundColor: 'transparent',
                   borderColor: '#DADADA',
                   //   borderWidth: 1,
                   padding: 15,
                   borderRadius: 55,
                   
                  
                 }}
               >
                 <Text style={{ color: "#000",  }}>TEST Today</Text>
               </TouchableOpacity>
               <Image style={{marginLeft:"40%",marginTop:"3%",width:25,height:25,alignItems:'flex-end'}} source={{uri:'https://sv1.picz.in.th/images/2020/01/26/RHxgi8.png'}}/>
             </Card>
              
             <Card style={{ flex:1, flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start', borderRadius: 55, marginTop:12, }} >
              
             <Image style={{marginLeft:"5%",marginTop:"3%",width:25,height:25}} source={{uri:'https://sv1.picz.in.th/images/2020/01/26/RHxBi1.png'}}/>
               <TouchableOpacity
                
     
                 style={{
                   backgroundColor: 'transparent',
                   borderColor: '#DADADA',
                   //   borderWidth: 1,
                   padding: 15,
                   borderRadius: 55,
                   
                  
                 }}
               >
                 <Text style={{ color: "#000",  }}>TEST Today</Text>

                 
               </TouchableOpacity>
               <Image style={{marginLeft:"40%",marginTop:"3%",width:25,height:25}} source={{uri:'https://sv1.picz.in.th/images/2020/01/26/RHxgi8.png'}}/>
             </Card>

            

          
             </View>
           </ScrollView>

         </View>

              
            </View>
           





            {/* <TouchableOpacity style={{flex:0.5,backgroundColor:'#AAAAAA'}}>
            <Text
              style={styles.txt2}
              onPress={() => this.onPressRegister()}>
              Register
            </Text>
          </TouchableOpacity> */}

            

          </View>
          
         
        </LinearGradient>
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
  description: {
    fontSize: 11,
    fontStyle: 'italic',
    color: '#FFFFFF',
  },
  photo2: {
    height: 15,
    width: 15,
    marginRight: 5,
    marginLeft: 5,
    marginTop: 5,


    alignItems: 'center',
    justifyContent: 'center'

  },
  photo3: {
    height: 25,
    width: 25,
    marginRight: 5,
    marginLeft: 5,
    marginTop: 5,



    alignItems: 'center',
    justifyContent: 'center'


  },
  photo4: {
    height: 18,
    width: 18,
    marginRight: 5,
    marginLeft: 5,
    marginTop: 5,


    alignItems: 'center',
    justifyContent: 'center'

  },
  photo5: {
    height: 22,
    width: 22,
    marginRight: 5,
    marginLeft: 5,
    marginTop: 5,


    alignItems: 'center',
    justifyContent: 'center'

  },




  photo: {
    height: 50,
    width: 50,
    marginRight: 5,
    marginLeft: 5,
    marginTop: 5,
    borderRadius: 800,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'

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
  viewBtn2: {
    height: 50,
    marginLeft: 10,
    marginTop: 10,

  }, Text22: {
    color: "#5B3E96",
    fontSize: 18,
    marginTop: "35%",
    justifyContent: 'flex-start'



  },
  Text2: {
    color: "#5B3E96",
    fontSize: 18,
    marginTop: 5,
    marginLeft: 2,
    marginEnd: 2,
    alignItems: 'center',
    justifyContent: 'center'
  }, TTT: {
    color: "#666666",
    fontSize: 25,
    marginTop: 5,
    marginLeft: 2,
    marginEnd: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  under: {
    color: "#666666",
    fontSize: 8,
    marginTop: 5,

    marginEnd: 2,
    alignItems: 'center',

  }, under2: {
    color: "#666666",
    fontSize: 8,
    marginTop: "5%",

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

  }, Text3: {
    fontWeight: 'bold',
    color: "#000000",
    fontSize: 17,
    marginTop: 5,
    marginLeft: 2,
    marginEnd: 2,
    alignItems: 'center',
    justifyContent: 'center'
  }, MainContainer1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    right: 10
  }, MainContainer2: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5
  },
  txtIn2: {
    alignItems: 'center',
    width: 350,
    height: 55,
    backgroundColor: 'transparent',
    padding: 16,
    marginLeft: 16,
    marginRight: 16,
    borderColor: '#5B3E96',
    borderWidth: 2.2,
    borderRadius: 55,

  }, listArea: {
    backgroundColor: "transparent",

    flex: 1,
    paddingTop: 16
  },
});
