import React from 'react';
import { StyleSheet, Text, View,Alert,TouchableOpacity, Image,AsyncStorage} from 'react-native';
import database from './Database'
export default class First extends React.Component {

  state={
    email: '',
    password: '',
    name:'',
    last:'',
    uri:''
  };
  onPressLogin()
  {
    this.props.navigation.navigate('Login')
  }

  onPressRegister(){
    this.props.navigation.navigate('Register')
  }
  async login(){
    await database.login(account,this.login_success,this.login__fail);
  }
  onFocusFunction = async () => {
    this.setState({email:await AsyncStorage.getItem('@email')})
    this.setState({password:await AsyncStorage.getItem('@pwd')})
    // account=await {
    //   email:this.state.email,
    //   password:this.state.password,
    // }
    console.log(this.state.email)
     if(this.state.email !==null ){
       await database.AutoLogin(this.state.email,this.state.password,this.login_success,this.login__fail); 
   }
 
   
  }
  componentDidMount(){
  
  
    this.onFocusFunction()
    
   
    

    
  }
  login_success=async()=>{
   
    await database.readdata(this.state.email.toLowerCase(),this.read_Account_success,this.read_Account_fail)
    Alert.alert("Login Success");
  

  }
  read_Account_fail=async(error)=>{
    console.log("error")
  }
  read_Account_success=async(doc)=>{
    this.setState({name:doc.name})
    this.setState({email:doc.email})
    this.setState({last:doc.last})
    this.setState({uri:doc.uri})
    console.log(this.state.name); 
    await AsyncStorage.setItem('@email',this.state.email);
    await AsyncStorage.setItem('@name',doc.name);
    await AsyncStorage.setItem('@last',doc.last);
    await AsyncStorage.setItem('@uri',doc.uri);
    await AsyncStorage.setItem('@pwd',this.state.password)
    this.props.navigation.navigate('Main1')
  }

  login__fail=async(error)=>{
    Alert.alert("Wrong Password or Email");
  }


  render() {
    return (
        <View style={{flex: 1,alignContent:'center'}} >
          <Image source = {{uri:'https://i.pinimg.com/originals/52/c6/48/52c648957e348a41b1f97af759a2fe98.jpg'}} style = {{ flex:1 }}/>
        <View   style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
          <View>
              <TouchableOpacity
              style={styles.btn_login}
              onPress={()=>this.onPressLogin()}>
              <Text style={styles.txt2}>
                LOGIN
              </Text>
            </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
              style={styles.btn_register}
              onPress={()=>this.onPressRegister()}>
              <Text style={styles.txt}>
                REGISTER
              </Text>
            </TouchableOpacity>
            </View>
        </View>
          {/* <View style={{flex: 1,flexDirection: 'row', justifyContent: 'center',}} >
            <View>
              <TouchableOpacity
              style={styles.btn_login}
              onPress={()=>this.onPressLogin()}>
              <Text style={styles.txt2}>
                LOGIN
              </Text>
            </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity
              style={styles.btn_register}
              onPress={()=>this.onPressRegister()}>
              <Text style={styles.txt}>
                REGISTER
              </Text>
            </TouchableOpacity>
            </View>
          </View> */}

        </View>
    );
  }
}

const styles = StyleSheet.create({
  btn_login:{
    alignItems: 'center',
    width:160,
    height:50,
    backgroundColor: 'transparent',
    padding: 16,
    margin:16,
    borderRadius: 50,
    borderColor:'#000000',
    borderWidth : 1
},

btn_register:{
  alignItems: 'center',
  width:160,
  height:50,
  backgroundColor: '#000000',
  padding: 16,
  margin:16,
  borderRadius: 50,
  borderColor:'#000000',
  borderWidth : 1
},
txt:{
    textAlign: 'center',
    fontSize:13,
    color:'#ffffff',
    fontWeight:'bold',
},

txt2:{
  textAlign: 'center',
  fontSize:13,
  color:'#000000',
  fontWeight:'bold',
},

})