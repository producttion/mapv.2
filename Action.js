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
var dbref = dbRef.ref("controler/-Ks8iWKUpEog7J2e1rUG/0/status");
dbref.on("value", function (snapshot) {
    var snap =snapshot.val()  
    console.log(snapshot.val())
    console.log('status: '+ snap)
      
    // $(document).ready(function () {
    //     var num = 0;
        if ( snapshot.val().status == 1) {
        $('#a1[type="button"]').prop('disabled', true);
            $('.buttonW').prop('disabled', true);
        //     num += 1
            
        }
        //  if (false == snapshot.val().status) {
            $('.buttonH').prop('disabled', false);
            $('.buttonW').prop('disabled', false);
            // num = 0

    //     }
    //     console.log('num: '+num)
    // })
})
var status = false;
var statc = [];
var arrytwo = [];
var count = 0;
var num = 0;

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
        for (var i = 0; i < arrytwo.length; i++) {
            var element = arrytwo[i];
            // console.log(element)
            if (element == value) {

                alert("มึงกดซ้ำไอ้สัส")
                count++;
                // count = 0;
            }
        }
    }
    if (count == 0) {
        statc.push({
            lock: value,
            status: status
        })
        arrytwo.push(value)


        count = 0;
    }

} // >5

// arrytwo.length == 0


function clickToFrom() {
    if (statc.length == 0) {
        alert("มึงยังไม่ได้กดเลยไอ้โง่")
    } else {
        document.getElementById('id01').style.display = 'block'

    }

}
console.log(statc.length)

