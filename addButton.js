$(document).ready(function () {
    var blog1 = $('#blog1');
    var blog2 = $('#blog2');
    var blog3 = $('#blog3');
    var blog4 = $('#blog4');
    var numA1 = 1;
    var numA9 = 9;
    var numA10 = 10;
    var numA17 = 17;
    var numA18 = 18;
    var numA24 = 24;
    var numA25 = 25;
    var numA30 = 30;



    $(document).ready(function () {
        var endBox1 = setInterval(function () {
            if (numA1 == numA9) {
                clearInterval(endBox1);
            }
            blog1.append(`
            <input id="a`+numA1+`" onclick="clickme(`+numA1+`)" type="button" value="A`+numA1+`" class="buttonH btn btn-primary" >`);
            var newList = $('#blog1');
            newList.fadeIn();
            numA1 = numA1 + 1;
        }, 0)
            
        var endBox2 = setInterval(function () {
            if (numA10 == numA17) {
                clearInterval(endBox2);
            }
            blog2.append(`
            <input id="a`+numA10+`" onclick="clickme(`+numA10+`)" type="button" value="A`+numA10+`" class="buttonW btn btn-primary">
            `);
            var newList = $('#blog2');
            newList.fadeIn();
            numA10 = numA10 + 1;
        }, 0);

        var endBox3 = setInterval(function () {
            if (numA18 == numA24) {
                clearInterval(endBox3);
            }
            blog3.append(`
            <input id="a`+numA18+`" onclick="clickme(`+numA18+`)" type="button" value="A`+numA18+`" class="buttonH btn btn-primary">
             `);
            var newList = $('#blog3');
            newList.fadeIn();
            numA18 = numA18 + 1;
        }, 0);

        var endBox4 = setInterval(function () {
            if (numA25 == numA30) {
                clearInterval(endBox4);
            }
            blog4.append(`
            <input id="a`+numA25+`" onclick="clickme(`+numA25+`)" type="button" value="A`+numA25+`" class="buttonW btn btn-primary">
            `);
            var newList = $('#blog4');
            newList.fadeIn();
            numA25 = numA25 + 1;
        }, 0);

    });

});

 