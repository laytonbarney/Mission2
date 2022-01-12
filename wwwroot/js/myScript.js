// This contains the calulator for my website
$("#btnSend").click(function () {

    var textG = '';
    var as = $("#assignements").val();
    var qu = $("#quizzes").val();
    var i = $("#intex").val();
    var ex = $("#extracredit").val();

    var result = (as * .4367) + (qu * .131) + (i * .4323) + (ex * .022)

    result = Number(result).toFixed(2);

    if (result >= 95) {
        textG = "A";
    } else if (result >= 90) {
        textG = "A-";
    } else if (result >= 85) {
        textG = "B+";
    } else if (result >= 83) {
        textG = "B";
    } else if (result >= 80) {
        textG = "B-";
    } else if (result >= 75) {
        textG = "C+";
    } else if (result >= 70) {
        textG = "C";
    } else if (result >= 60) {
        textG = "D";
    } else {
        textG = "F";
    }


    alert("Your current score\n" + result +"% " + textG);
})