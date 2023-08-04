document.addEventListener("DOMContentLoaded", function () {
    const language = document.querySelector(".lang");
    console.log(language)

    language.addEventListener("click", switchLanguage);

    function switchLanguage(){
        if (language.innerText == "ES")
            language.innerText = "EN";
        else
            language.innerText = "ES";
    }
});