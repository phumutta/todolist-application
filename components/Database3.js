import * as firebase from 'firebase';
import '@firebase/firestore';
import { Use } from 'react-native-svg';

const config = {
  apiKey: "AIzaSyBr8LGOcF3-in3teSIEHL3lqE5v6exSxcM",
  authDomain: "seproject-8401e.firebaseapp.com",
  databaseURL: "https://seproject-8401e.firebaseio.com",
  projectId: "seproject-8401e",
  storageBucket: "seproject-8401e.appspot.com",
  messagingSenderId: "227320017183",
  appId: "1:227320017183:web:200a09a37ebc74a3b3c02a"
};

class Database{

  constructor() {
    if (!firebase.apps.length) {
        firebase.initializeApp(config);
          console.log("firebase apps initializeApp");
    } else {
        console.log("firebase apps already running...");
    }
  }
  async addMessageToday(User,Message,add_Message_success,add_Message_fail){
      await firebase.firestore().collection("Todo").doc(User).collection("Today").add(Message).then(ref=>{add_Message_success(ref.id)},add_Message_fail)
  }
  async updateID(ID,User,addSuccess,addFail){
    try{
    await firebase.firestore().collection("Todo").doc(User).collection("Today").doc(ID).update({id:ID})
      addSuccess();
    }
    catch(e){
      addFail()
      
    }
  }
  async updateStatus(ID,User,addSuccess,addFail){
    try{
    await firebase.firestore().collection("Todo").doc(User).collection("Today").doc(ID).update({status:'0'})
      addSuccess();
    }
    catch(e){
      addFail()
      
    }
  }
  async deleteTask(User,id,delete_Account_success,delete_Account_fail)
  {
    try {
        await firebase.firestore().collection('Todo').doc(User).collection("Today").doc(id).delete();
        delete_Account_success();
    } catch (e) {
        delete_Account_fail();
    }
  }
  async readMessage(User,Date,read_Message_success,read_Message_fail){
    let array=[]
    let query= await firebase.firestore().collection("Todo").doc(User).collection("Today").where('Date','==',Date).where('status','==','1').orderBy('time');
    query.get().then(snapshot=>{
      if(snapshot.emtry)
      {

        read_Message_fail();
        return;
      }
      snapshot.forEach(doc=>{
        // console.log(doc.data())
        // array.push(Object.values(doc.data()))
        array.push(doc.data())
        // read_Message_success(doc.data())
        
        })
        read_Message_success(array)
    })
    .catch(read_Message_fail());

    // let observer = query.onSnapshot(
    //   snapshot => {
    //     if (snapshot.empty) {
    //       read_Message_fail();
    //       return;
    //     }

    //     snapshot.forEach(doc => {
    //       read_Message_success(doc.data());
    //     })

    //   })

 }


 async readCompleted(User,Date,read_Message_success,read_Message_fail){
  let array=[]
  let query= await firebase.firestore().collection("Todo").doc(User).collection("Today").where('Date','==',Date).where('status','==','0').orderBy('time');
  query.get().then(snapshot=>{
    if(snapshot.emtry)
    {

      read_Message_fail();
      return;
    }
    snapshot.forEach(doc=>{
      // console.log(doc.data())
      // array.push(Object.values(doc.data()))
      array.push(doc.data())
      // read_Message_success(doc.data())
      
      })
      read_Message_success(array)
  })
  .catch(read_Message_fail());

  // let observer = query.onSnapshot(
  //   snapshot => {
  //     if (snapshot.empty) {
  //       read_Message_fail();
  //       return;
  //     }

  //     snapshot.forEach(doc => {
  //       read_Message_success(doc.data());
  //     })

  //   })

}


//   async addMessage(message,add_Message_success,add_Message_fail)
//    {
//     firebase.firestore().collection("Todo").doc(message).then(ref=>{add_Message_success(ref.id)},add_Message_fail);
//    }

//   async readOnce(id,read_Account_success,read_Account_fail)
//   {
//     let getDoc = firebase.firestore().collection("score").doc("score").get().then(doc=>{
//       if(doc.exists)
//       {
//         read_Account_success(doc.data());
//       }else {
//         read_Account_fail();
//       }
//     }).catch(read_Account_fail());
//   }



//   async readdata(id,read_Account_success,read_Account_fail)
//   {

//     let getDoc = firebase.firestore().collection("Account").doc(id).get().then(doc=>{
//       if(doc.exists)
//       {
//         read_Account_success(doc.data());
//       }else {
//         read_Account_fail();
//       }
//     }).catch(read_Account_fail());
//   }



//   async readAll(read_Account_success,read_Account_fail)
//   {
//     let getDoc = firebase.firestore().collection("Account").get().then(
//       snapshot => {
//         if (snapshot.empty) {
//           read_Account_fail();
//           return;
//         }

//         snapshot.forEach(doc => {
//           read_Account_success(doc.data());
//         })

//       }).catch(read_Account_fail());
//   }

//   async readListening(read_Account_success,read_Account_fail)
//   {
//     let getDoc = firebase.firestore().collection("score").onSnapshot(
//       snapshot => {
//         if (snapshot.empty) {
//           read_Account_fail();
//           return;
//         }

//         snapshot.forEach(doc => {
//           read_Account_success(doc.data());
//         })

//       }).catch(read_Account_fail());
//   }

//   async deleteAccount(id,delete_Account_success,delete_Account_fail)
//   {
//     try {
//         firebase.firestore().collection('Account').doc(id).delete();
//         delete_Account_success();
//     } catch (e) {
//         delete_Account_fail();
//     }
//   }

//   async updateAccount(account,update_Account_success,update_Account_fail)
//   {
//     try {
//         firebase.firestore().collection('score').doc('score').update(account);
//         update_Account_success();
//     } catch (e) {
//         update_Account_fail();
//     }
//   }



//   async createAccount(Account,add_Account_success,add_Account_fail)
//   {
//     firebase.firestore().collection("Account").add(Account).then(ref=>{add_Account_success(ref.id)},add_Account_fail);
//   }

//   async createAccount2(Account,add_Account_success,add_Account_fail)
//   {
//     //set ชื่อ doc
//     try {
//       await firebase.firestore().collection("Account").doc(Account.email).set(Account)
//       add_Account_success();
//     } catch (e) {
//       add_Account_fail();
//     } finally {

//     }

//   }
//   async addImage(id,url,add_Account_success,add_Account_fail)
//   {
//     //set ชื่อ doc
//     try {
//       console.log("ADDDDDDDDDDDDDDDDDDDD")
      
//       await firebase.firestore().collection("Account").doc(id).update({uri:url})
//       add_Account_success();
//     } catch (e) {
//       add_Account_fail();
//     } finally {

//     }

//   }


// ///////////
//   async addMessage(message,add_Message_success,add_Message_fail)
//   {
//     firebase.firestore().collection("Message").add(message).then(ref=>{add_Message_success(ref.id)},add_Message_fail);
//   }

//   async readMessageListening(read_Message_success,read_Message_fail)
//   {
//     let getDoc = firebase.firestore().collection("Message").orderBy("time").onSnapshot(
//       snapshot => {
//         if (snapshot.empty) {
//           read_Message_fail();
//           return;
//         }

//         snapshot.forEach(doc => {
//           read_Message_success(doc.data());
//         })

//       }).catch(read_Message_fail());
//   }

  ///////////////////////////

 



}

////////////////

const database = new Database();
export default database;

      
 
    
    
    
     
