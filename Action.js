
// Initialize Firebase
var config = {

    apiKey: "AIzaSyB6bQk1TDpCH3ylmFL3HHbqMjqMapiLZpU",
    authDomain: "test-c5a03.firebaseapp.com",
    databaseURL: "https://test-c5a03.firebaseio.com",
    projectId: "test-c5a03",
    storageBucket: "test-c5a03.appspot.com",
    messagingSenderId: "919585579120"
};

firebase.initializeApp(config);

var dbRef = firebase.database();
var dbref =dbRef.ref("controler");
dbref.on("value",function(snapshot) {
    console.log(snapshot.val())

    
})
var status = true;
var statc =[];

var num = 0 

function clickme(value) {

    
    if(statc.length >= 5){
   alert("มึงจะกดเกิน 5 ครั้งไม่ได้นะไอ้สัส")
    }else{
        statc.push({
            lock : value,
            status :status
        })
    }
  
}

function clickToFrom() {


    if (statc.length == 0) {
        alert("มึงยังไม่ได้กดเลยไอ้โง่")
    }else{
       
        dbref.push(statc)
       
         statc=[];
    }
    
}


console.log(statc.length)

    
   
