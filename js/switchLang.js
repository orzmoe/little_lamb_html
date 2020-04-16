var lang_flag = 0;
var LangConfig = [zh, en];

jQuery(document).ready(function ($) {
    function switchLang() {
        for (var i = 0; i < ids.length; i++) {
            var lang_config = LangConfig[lang_flag];
            console.log(ids[i])
            document.getElementById(ids[i]).innerHTML = lang_config[i];
        }
    };
    switchLang(lang_flag);
    $("#zh").click(function () {
        document.getElementById("zh").style.display = "none";
        document.getElementById("en").style.display = "block";
        lang_flag = 0;
        switchLang(lang_flag);
        localStorage.setItem("lang", "zh")
    });
    $("#en").click(function () {
        document.getElementById("en").style.display = "none";
        document.getElementById("zh").style.display = "block";
        lang_flag = 1;
        switchLang(lang_flag);
        localStorage.setItem("lang", "en")
    });
    var lang = localStorage.getItem("lang")
    console.log(lang)
    if (lang) {
        switch (lang) {
            case "en":
                document.getElementById("en").style.display = "none";
                document.getElementById("zh").style.display = "block";
                lang_flag = 1;
                switchLang(lang_flag);

                break
            case "zh":
                document.getElementById("zh").style.display = "none";
                document.getElementById("en").style.display = "block";
                lang_flag = 0;
                switchLang(lang_flag);
                break
        }
    } else {
        localStorage.setItem("lang", "zh")
    }
});
