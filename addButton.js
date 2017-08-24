$(document).ready(function () {
    var blog1 = $('#blog1');
    var blog2 = $('#blog2');
    var blog3 = $('#blog3');
    var blog4 = $('#blog4');
    var numA1 = 1;
    var numA12 = 12;
    var numA13 = 13;
    var numA20 = 20;
    var numA21 = 21;
    var numA29 = 29;
    var numA30 = 30;
    var numA35 = 35;



    $(document).ready(function () {
        var endBox1 = setInterval(function () {
            if (numA1 == numA12) {
                clearInterval(endBox1);
            }
            blog1.append(`
            <input onclick="clickme(`+numA1+`)" type="button" value="A`+numA1+`" class="buttonH" >`);
            var newList = $('#blog1');
            newList.fadeIn();
            numA1 = numA1 + 1;
        }, 0)
            
        var endBox2 = setInterval(function () {
            if (numA13 == numA20) {
                clearInterval(endBox2);
            }
            blog2.append(`
            <input onclick="clickme(`+numA13+`)" type="button" value="A`+numA13+`" class="buttonW">
            `);
            var newList = $('#blog2');
            newList.fadeIn();
            numA13 = numA13 + 1;
        }, 0);

        var endBox3 = setInterval(function () {
            if (numA21 == numA29) {
                clearInterval(endBox3);
            }
            blog3.append(`
            <input onclick="clickme(`+numA21+`)" type="button" value="A`+numA21+`" class="buttonH">
             `);
            var newList = $('#blog3');
            newList.fadeIn();
            numA21 = numA21 + 1;
        }, 0);

        var endBox4 = setInterval(function () {
            if (numA30 == numA35) {
                clearInterval(endBox4);
            }
            blog4.append(`
            <input onclick="clickme(`+numA30+`)" type="button" value="A`+numA30+`" class="buttonW">
            `);
            var newList = $('#blog4');
            newList.fadeIn();
            numA30 = numA30 + 1;
        }, 0);

    });

});

 