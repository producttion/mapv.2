$(document).ready(function () {
    var blog1 = $('#blog1');
    var blog2 = $('#blog2');
    var blog3 = $('#blog3');
    var blog4 = $('#blog4');
    var numA1 = 1;
    var numA8 = 8;
    var numA9 = 9;
    var numA15 = 15;
    var numA16 = 16;
    var numA21 = 21;
    var numA22 = 22;
    var numA26 = 26;



    $(document).ready(function () {
        var endBox1 = setInterval(function () {
            if (numA1 == numA8) {
                clearInterval(endBox1);
            }
            blog1.append(`
            <div class="blogH ">
            <input onclick="clickme(`+numA1+`)" type="button" value="A`+numA1+`" class="button button1">
             </div>
             `);
            var newList = $('#blog1');
            newList.fadeIn();
            numA1 = numA1 + 1;
        }, 0);
            
        var endBox2 = setInterval(function () {
            if (numA9 == numA15) {
                clearInterval(endBox2);
            }
            blog2.append(`
            <div class="blogW">
            <input onclick="clickme(`+numA9+`)" type="button" value="A`+numA9+`" class="button button2">
            </div>
            `);
            var newList = $('#blog2');
            newList.fadeIn();
            numA9 = numA9 + 1;
        }, 0);

        var endBox3 = setInterval(function () {
            if (numA16 == numA21) {
                clearInterval(endBox3);
            }
            blog3.append(`
            <div class="blogH">
            <input onclick="clickme(`+numA16+`)" type="button" value="A`+numA16+`" class="button button1">
             </div>
             `);
            var newList = $('#blog3');
            newList.fadeIn();
            numA16 = numA16 + 1;
        }, 0);

        var endBox4 = setInterval(function () {
            if (numA22 == numA26) {
                clearInterval(endBox4);
            }
            blog4.append(`
            <div class="blogW">
            <input onclick="clickme(`+numA22+`)" type="button" value="A`+numA22+`" class="button button2">
           
            </div>
            `);
            var newList = $('#blog4');
            newList.fadeIn();
            numA22 = numA22 + 1;
        }, 0);

    });

});

 