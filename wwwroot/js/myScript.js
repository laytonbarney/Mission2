$("#btnSend").click(function () {

    var as = $("#assignements").val();
    var qu = $("#quizzes").val();
    var i = $("#intex").val();
    var ex = $("#extracredit").val();

    var result = (as*.4367)+(qu*.131)+(i*.4323)+(ex*.022)
    alert("You would score " + result +"% in this class");
})