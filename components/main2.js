import React from 'react';
import { View,Text,Image ,StyleSheet,TouchableOpacity, Alert} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {Card} from 'react-native-shadow-cards';
import { Container, Header, Title, Button, Icon } from 'native-base';
export default class main2 extends React.Component {
  render() {
    return (

        
      
      
        <LinearGradient
          colors={['#E5E5E5', '#E5E5E5']}
          style={{
            flex:1,
            // position: 'absolute',
            // left: 0,
            // right: 0,
            // top: 0,
            // height: 500,
          }}
        >
         
          <View style ={{flex:1}}>
              
          <View style={{flex:0.1,marginTop:50,flexDirection:'row',backgroundColor:"transparent"}}>
        
              <View style={{flex:0.2,marginTop:5,marginLeft:10,alignItems: 'center',justifyContent: 'center',borderColor: 'black',borderWidth: 1,borderRadius: 100}}> 
              <TouchableOpacity onPress={() => { Alert.alert("GO SETTING");}}>
              <Image source={{ uri: "https://sv1.picz.in.th/images/2020/01/22/R2f2x0.png" }} style={styles.photo} />
              </TouchableOpacity>
              </View>
          
              <View style={{flex:1,flexDirection:'row',marginTop:25,alignItems: 'center',justifyContent: 'center'}} >

                <Text style={styles.Text}>Nattapon </Text>
        
                <Text style={styles.Text}>   </Text>
             
                <Text style={styles.Text}>Phumutta</Text>
            




                <View style={{flex:1,backgroundColor:"transparent",flexDirection:'row'}}>
                  <View style={{marginTop:10,marginLeft:50,alignContent:"flex-end",justifyContent:'center',flexDirection:'row'}}>
                    
                  <TouchableOpacity onPress={() => { Alert.alert("GO TO To day");}}>

                  <Image source={{uri:"https://sv1.picz.in.th/images/2020/01/22/R2iDFz.png"}} style={styles.Icon}></Image>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => { Alert.alert("GO TO To here");}}>
                  <Image source={{uri:"https://sv1.picz.in.th/images/2020/01/22/R2UkuS.png"}} style={styles.Icon}></Image>
                  </TouchableOpacity>
                  </View>
                </View>
              </View>
              {/* <View style={{flex:1,backgroundColor:"#000000"}}></View> */}
          
          </View>
          
          <View style={{flex:1,marginTop:30,marginLeft:10,backgroundColor:"#transparent",alignContent:'center'}}>
            {/* <Card style={{padding: 10, margin: 10}}>
            <Text>Open up App.js to start working on your app!</Text>
            <Text>Changes you make will automatically reload.</Text>
            <Text>Shake your phone to open the developer menu.</Text>
          </Card> */}
            
            
            <TouchableOpacity onPress={() => { Alert.alert("GO TO To day");}}> 
            <Card style={{padding: 15, margin: 10,flexDirection:'row'}} >
              
            <View style={{flex:0.1,marginLeft:10,alignItems: 'center',justifyContent: 'center'}}> 
              <Image source={{ uri: "https://sv1.picz.in.th/images/2020/01/22/R21DSe.png" }} style={styles.photo2} />
              </View>
              <View style={{marginLeft:15,alignItems: 'center',justifyContent: 'center'}} >
              <Text style={styles.Text2} onPress={() => { Alert.alert("GO TO To day");}}>To day </Text>
              </View>
            </Card>
            </TouchableOpacity>
            

            <TouchableOpacity onPress={() => { Alert.alert("GO TO Tomorrow");}}> 
            <Card style={{padding: 15, margin: 10,flexDirection:'row'}}>
            <View style={{flex:0.1,marginLeft:10,alignItems: 'center',justifyContent: 'center'}}> 
              <Image source={{ uri: "https://sv1.picz.in.th/images/2020/01/22/R2KdRq.png" }} style={styles.photo2} />
              </View>
              <View style={{marginLeft:15,alignItems: 'center',justifyContent: 'center'}} >
              <Text style={styles.Text} onPress={() => { Alert.alert("GO TO Tomorrow");}}>Tomorrow </Text>
              </View>
            </Card>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => { Alert.alert("GO TO Upcoming");}}>
            <Card style={{padding: 15, margin: 10,flexDirection:'row'}}>
            <View style={{flex:0.1,marginLeft:10,alignItems: 'center',justifyContent: 'center'}}> 
              <Image source={{ uri: "https://sv1.picz.in.th/images/2020/01/22/R2iSQI.png" }} style={styles.photo3} />
              </View>
              <View style={{marginLeft:15,alignItems: 'center',justifyContent: 'center'}} >
              <Text style={styles.Text } onPress={() => { Alert.alert("GO TO Upcoming");}}>Upcoming </Text>
            </View>
            </Card>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => { Alert.alert("GO TO Someday");}}>
            <Card style={{padding: 15, margin: 10,flexDirection:'row'}}>
            <View style={{flex:0.1,marginLeft:10,alignItems: 'center',justifyContent: 'center'}}> 
              <Image source={{ uri: "https://sv1.picz.in.th/images/2020/01/22/R2KqnW.png" }} style={styles.photo3} />
              </View>
              <View style={{marginLeft:15,alignItems: 'center',justifyContent: 'center'}} >
              <Text style={styles.Text} onPress={() => { Alert.alert("GO TO Someday");}}>Someday</Text>
            </View>  
            </Card>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => { Alert.alert("GO TO Completed");}}>
            <Card style={{padding: 15, margin: 10,flexDirection:'row'}}>
            <View style={{flex:0.1,marginLeft:10,alignItems: 'center',justifyContent: 'center'}}> 
              <Image source={{ uri: "https://sv1.picz.in.th/images/2020/01/22/R2ZXF1.png" }} style={styles.photo2} />
              </View>
              <View style={{marginLeft:15,alignItems: 'center',justifyContent: 'center'}} >
              <Text style={styles.Text} onPress={() => { Alert.alert("GO TO Completed");}}>Completed</Text>
            </View>
            </Card>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => { Alert.alert("GO TO Inbox");}}>
            <Card style={{padding: 15, margin: 10,flexDirection:'row'}}>
            <View style={{flex:0.1,marginLeft:10,alignItems: 'center',justifyContent: 'center'}}> 
              <Image source={{ uri: "https://sv1.picz.in.th/images/2020/01/22/R2cRig.png" }} style={styles.photo2} />
              </View>
              <View style={{marginLeft:15,alignItems: 'center',justifyContent: 'center'}} >
              <Text style={styles.Text} onPress={() => { Alert.alert("GO TO Inbox");}}>Inbox</Text>
            </View>
            </Card>
            </TouchableOpacity>
            
          {/* <TouchableOpacity style={{flex:0.5,backgroundColor:'#AAAAAA'}}>
            <Text
              style={styles.txt2}
              onPress={() => this.onPressRegister()}>
              Register
            </Text>
          </TouchableOpacity> */}

          </View>
          
          </View>
          </LinearGradient>
       
      
    );
  }
}
const styles = StyleSheet.create({
  container: {
      alignItems:'flex-start',
      flex: 1,
      flexDirection: 'row',
      marginRight:16,
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
     borderRadius:100,
      flex:1,
    alignItems: 'center',
    justifyContent: 'center'

  },
  Text:{
    color:"#5B3E96",
    fontSize: 15,
    marginTop:5,
    marginLeft : 2,
    marginEnd : 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  viewBtn2: {
    height: 50,
    marginLeft:10
    
  },Text2:{
    color:"#5B3E96",
    fontSize: 17,
    marginTop:5,
    marginLeft : 2,
    marginEnd : 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  Icon: {
      height: 25,
      width: 25,
      marginRight:5,
      marginLeft:5,
      marginTop:5,
     
      
    alignItems: 'center',
    justifyContent: 'center'

  },
});
