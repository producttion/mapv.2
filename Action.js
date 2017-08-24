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
var dbref0 = dbRef.ref("controler/-Ks8iWKUpEog7J2e1rUG/0/status");
dbref0.on("value", function (snapshot) {
    var snap0 =snapshot.val()  
    console.log(snap0)
    if( snap0 == 1){
        $('#a1').prop('disabled', true);
    }else {$('#a1').prop('disabled', false);}
});
var dbref1 = dbRef.ref("controler/-Ks8iWKUpEog7J2e1rUG/1/status");
dbref1.on("value", function (snapshot) {
    var snap1 =snapshot.val()  
    console.log(snap1)
    if( snap1 == 1){
        $('#a2').prop('disabled', true);
    }else {$('#a2').prop('disabled', false);}
});
var dbref2 = dbRef.ref("controler/-Ks8iWKUpEog7J2e1rUG/2/status");
dbref2.on("value", function (snapshot) {
    var snap2 =snapshot.val()  
    console.log(snap2)
    if( snap2 == 1){
        $('#a3').prop('disabled', true);
    }else {$('#a3').prop('disabled', false);}
});
var dbref3 = dbRef.ref("controler/-Ks8iWKUpEog7J2e1rUG/3/status");
dbref3.on("value", function (snapshot) {
    var snap3 =snapshot.val()  
    console.log(snap3)
    if( snap3== 1){
        $('#a4').prop('disabled', true);
    }else {$('#a4').prop('disabled', false);}
});
var dbref4 = dbRef.ref("controler/-Ks8iWKUpEog7J2e1rUG/4/status");
dbref4.on("value", function (snapshot) {
    var snap4 =snapshot.val()  
    console.log(snap4)
    if( snap4 == 1){
        $('#a5').prop('disabled', true);
    }else {$('#a5').prop('disabled', false);}
});
var status = false;
var statc = [];
var arrytwo = [];
var count = 0;
var num = 0;


// var firstName = $('#firstName').val();
// var telePhone = $('#telephone').val();
// var proDuct = $('#product').val();
// function writeUserData() {
//    var Reservations = dbRef.child("Reservations").set({
//     firstName: firstName,
//     telePhone: telePhone,
//     proDuct: proDuct
// })}
function clickme(value) {

    if (statc.length >= 5) {
        alert("มึงจะกดเกิน 5 ครั้งไม่ได้นะไอ้สัส")
    }

    if (arrytwo.length == 0) {
        statc.push({
            lock: value,
            [status[value]]: status
        })
        arrytwo.push(value)
    } else {
        if (arrytwo.length == 0) {
            statc.push({
                lock: value,
                status: status
            })
            arrytwo.push(value)

        } else {
            for (var i = 0; i < arrytwo.length; i++) {
                var element = arrytwo[i];
            }

            if (element === value) {
                alert("กดแบ้ว")
            } else {
                statc.push({
                    lock: value,
                    status: status
                })
                arrytwo.push(value)
            }
        }
    }




}

function clickToFrom() {
    if (statc.length == 0) {
        alert("มึงยังไม่ได้กดเลยไอ้โง่")
    } else {
        document.getElementById('id01').style.display = 'block'

    }

}
console.log(statc.length)

