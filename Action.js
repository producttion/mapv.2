
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
    
<<<<<<< HEAD
=======

>>>>>>> 42dac6bb70ec311e65ac253afdd4741e5069b4b1
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
<<<<<<< HEAD
       
        dbref.push(statc)
       
         statc=[];
=======
        // for (var i = 0; i < statc.length; i++) {
        //     var element = statc[i].lock;
        //     dbref.push(element[i])
        //     console.log(element)
        // }
        document.getElementById('id01').style.display='block'
        // dbref.push(statc)
        //  statc=[];
>>>>>>> 42dac6bb70ec311e65ac253afdd4741e5069b4b1
    }
    
}


console.log(statc.length)

    
   
