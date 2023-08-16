document.addEventListener("DOMContentLoaded", function () {

    let words = {};

    fetch('languages.json')
    .then(response => response.json())
    .then(data => { 
        words = data; 
    });

    const languageSelect = document.querySelector(".lang");

    languageSelect.addEventListener('change', () => {
        const language = languageSelect.value;
        console.log(language);
        updateContent(language);
    });
    
    function updateContent(language){

        console.log(words);

        const name = document.querySelector(".about-me h1").textContent = words[language].name;
        const about_me = document.querySelector(".about-me p").textContent = words[language].about_me;
        const stack = document.querySelector(".stack h2").textContent = words[language].stack;
        const curriculum = document.querySelector(".curriculum button").textContent = words[language].resume;
        const lang = document.querySelector(".language p").textContent = words[language].language;
        const expedoc = document.querySelector(".expedoc .description").textContent = words[language].expedoc;
        const gymcheck = document.querySelector(".gymcheck .description").textContent = words[language].gymcheck;
        const foraneo = document.querySelector(".foraneo .description").textContent = words[language].gymcheck;
        const projects = document.querySelector(".more-projects p").textContent = words[language].more_projects;
    }
});