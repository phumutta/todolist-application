// import * as firebase from 'firebase';
// import '@firebase/firestore';

// const config = {
//   apiKey: "AIzaSyBr8LGOcF3-in3teSIEHL3lqE5v6exSxcM",
//   authDomain: "seproject-8401e.firebaseapp.com",
//   databaseURL: "https://seproject-8401e.firebaseio.com",
//   projectId: "seproject-8401e",
//   storageBucket: "seproject-8401e.appspot.com",
//   messagingSenderId: "227320017183",
//   appId: "1:227320017183:web:f8a98329d1461188b3c02a"
// };

// class Database{
//     constructor() {
//         if (!firebase.apps.length) {
//             firebase.initializeApp(config);
//               console.log("firebase apps initializeApp");
//         } else {
//             console.log("firebase apps already running...");
//         }
//       }
    
  
    
//       async readOnce(id,read_Account_success,read_Account_fail)
//       {
//         let getDoc = firebase.firestore().collection("score").doc("score").get().then(doc=>{
//           if(doc.exists)
//           {
//             read_Account_success(doc.data());
//           }else {
//             read_Account_fail();
//           }
//         }).catch(read_Account_fail());
//       }
    
    
    
//       async readdata(id,read_Account_success,read_Account_fail)
//       {
    
//         let getDoc = firebase.firestore().collection("Account").doc(id).get().then(doc=>{
//           if(doc.exists)
//           {
//             read_Account_success(doc.data());
//           }else {
//             read_Account_fail();
//           }
//         }).catch(read_Account_fail());
//       }
    
    
    
//       async readAll(read_Account_success,read_Account_fail)
//       {
//         let getDoc = firebase.firestore().collection("Account").get().then(
//           snapshot => {
//             if (snapshot.empty) {
//               read_Account_fail();
//               return;
//             }
    
//             snapshot.forEach(doc => {
//               read_Account_success(doc.data());
//             })
    
//           }).catch(read_Account_fail());
//       }
    
      
 
    
    
    
     
//       async addMessage(message,add_Message_success,add_Message_fail)
//       {
//         firebase.firestore().collection("Message").add(message).then(ref=>{add_Message_success(ref.id)},add_Message_fail);
//       }
    
//       async readMessageListening(read_Message_success,read_Message_fail)
//       {
//         let getDoc = firebase.firestore().collection("Message").orderBy("time").onSnapshot(
//           snapshot => {
//             if (snapshot.empty) {
//               read_Message_fail();
//               return;
//             }
    
//             snapshot.forEach(doc => {
//               read_Message_success(doc.data());
//             })
    
//           }).catch(read_Message_fail());
//       }
    
    
    
// const database = new Database();
// export default database;
    