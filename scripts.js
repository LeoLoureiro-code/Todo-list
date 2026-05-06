const THEMES = {
    light: "light",
    dark: "dark",
}

const STATE = {
    Theme: THEMES.light,
    InputValue: "",
    Todos: []
}

const body = document.querySelector('body');
const themeIcon = document.querySelector('.theme_img');

function RenderTheme(){
    body.className = STATE.Theme;
}

function Render(){
    RenderTheme();
}

body.addEventListener("click", function (){
    if(STATE.Theme === THEMES.light){
        themeIcon.src = "./images/icon-sun.svg";
        STATE.Theme = THEMES.dark;
        Render();
    }
    else if(STATE.Theme === THEMES.dark){
        themeIcon.src = "./images/icon-moon.svg";
        STATE.Theme = THEMES.light;
        Render();
    }
});