$(function () {
    var autoComplete = [
        "ActionScript",
        "AppleScript",
        "Asp",
        "Ajax",
        "BASIC",
        "Bootstrap",
        "C",
        "C++",
        "Clojure",
        "COBOL",
        "ColdFusion",
        "Css3",
        "Erlang",
        "Fortran",
        "Groovy",
        "Haskell",
        "Html5",
        "Java",
        "JavaScript",
        "Jquery",
        "Lisp",
        "Perl",
        "PHP",
        "Python",
        "Ruby",
        "Scala",
        "Scheme"
    ];
    $("#tags").autocomplete({
        source: autoComplete
    });
});

$(function (){
    $("#btn_giris").click(function(){
        $("#myUye").modal();
    });
})

/* form validation Jquery */

$(function () {
    $("#btnSubmit").click(function() {
        var email,phone,password;
        email=$("#user_email").val();
        phone=$("#user_phone").val();
        password=$("#user_password").val();
        if (email=="") {
            
        }
    });
});