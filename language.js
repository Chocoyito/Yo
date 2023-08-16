document.addEventListener("DOMContentLoaded", function () {

    let words = {};

    fetch('languages.json')
    .then(response => response.json())
    .then(data => { 
        words = data; 
    });

    const languageButton = document.querySelector(".lang");

    languageButton.addEventListener('click', () => {
        const language = languageButton.textContent === 'ES' ? 'EN' : "ES"; 
        languageButton.textContent = language;
        updateContent(language);
    });
    
    function updateContent(language){
        const name = document.querySelector(".about-me h1");
        const about_me = document.querySelector(".about-me p");
        const stack = document.querySelector(".stack h2");
        const expedoc = document.querySelector(".expedoc .description");
        const gymcheck = document.querySelector(".gymcheck .description");
        const foraneo = document.querySelector(".foraneo .description");
        const projects = document.querySelector(".more-projects p")



        console.log(words);
        name.textContent = words[language].name;
        about_me.textContent = words[language].about_me;
        stack.textContent = words[language].stack;
        expedoc.textContent = words[language].expedoc;
        gymcheck.textContent = words[language].gymcheck;
        foraneo.textContent = words[language].gymcheck;
        projects.textContent = words[language].more_projects;
    }
});