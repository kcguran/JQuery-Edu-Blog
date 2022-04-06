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