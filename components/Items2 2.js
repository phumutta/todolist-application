import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,Image,
  TouchableOpacity
} from "react-native";
import Constants from "expo-constants";

import * as SQLite from 'expo-sqlite';

import database from './Database2'
import {Card} from 'react-native-shadow-cards';


const db = SQLite.openDatabase("db.db");
export default class Items2 extends React.Component {
  state = {
    items: null
  };

  componentDidMount() {
    this.update();
  }

  get_text_success=async(arr)=>{
    this.setState({ items: arr })
  }

  get_text_fail=async(error)=>{
      console.log(error);
  }
 
  
  
onPressTrack2(){
  // this.props.navigation.navigate('Forest')
  console.log("132")
}

  update() {
    database.getTodoText(this.get_text_success,this.get_text_fail);
  }

  render() {
    //const { done: doneHeading } = this.props;
    const { items } = this.state;
    const heading = "Todo";

    if (items === null || items.length === 0) {
      return null;
    }

    return (
    
        <View style={{flex:1,alignItems:'center' ,flexDirection:'column',justifyContent: 'center',backgroundColor:"#transparent",alignContent:'center'}}>
        {items.map(({ id, done, value }) => (

        <Card style={{ flex:1, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', borderRadius: 55, marginTop:12}} >
        {/*    
           ใส่ปุ่มบริเวณนี้       
                  */}
         
          
          <TouchableOpacity
            key={id}
            onPress={() => this.props.onPressTodo(id)}
            style={{
              backgroundColor: 'transparent',
              borderColor: '#DADADA',
              //   borderWidth: 1,
              padding: 8,
              borderRadius: 10
              
            }}
          >
             <Image style={{marginLeft:"5%",marginTop:"3%",width:25,height:25}} source={{uri:'https://sv1.picz.in.th/images/2020/01/24/Rr9eWe.png'}}/>
           
          </TouchableOpacity>
          <View style={{flex:1,marginLeft:"1%"}}>
          <Text style={{ color:"#000", }} onPress={() => {this.props.onPressTodo3(id)}}>{value}</Text>
          </View>
           
          <TouchableOpacity
            
            onPress={() => {this.props.onPressTodo2(id)}}
            style={{
              backgroundColor: 'transparent',
              borderColor: '#DADADA',
              //   borderWidth: 1,
              padding: 8,
              borderRadius: 10
              
            }}
          >
          <View>
          <Image style={{marginTop:"3%",width:25,height:25}} source={{uri:'https://sv1.picz.in.th/images/2020/01/26/RHxgi8.png'}}/>
          </View>
          </TouchableOpacity>
          </Card>
          
        ))}
      </View>
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
    backgroundColor: "#f0f0f0",
    flex: 1,
    paddingTop: 16
  },
  sectionContainer: {
    marginBottom: 16,
    padding:16,
    margin:16,
    marginHorizontal: 16
  },
  sectionHeading: {
    fontSize: 18,
    marginBottom: 8
  }
});
