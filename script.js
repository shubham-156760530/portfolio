const toggleSwitch = document.querySelector('input[type=checkbox]');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('img1');
const image2 = document.getElementById('img2');
const image3 = document.getElementById('img3');
const image4 = document.getElementById('img4');
const image5 = document.getElementById('img5');
const image6 = document.getElementById('img6');
const image7 = document.getElementById('img7');
const image8 = document.getElementById('img8');
const image9 = document.getElementById('img9');
const textBox = document.getElementById('text-box');

function changeImageMode(color){
    image1.src = `./mode-${color}.svg`;
    image2.src = `./mode-${color}.svg`;
    image3.src = `./mode-${color}.svg`;
    image4.src = `./mode-${color}.svg`;
    image5.src = `./mode-${color}.svg`;
    image6.src = `./mode-${color}.svg`;
    image7.src = `./mode-${color}.svg`;
    image8.src = `./mode-${color}.svg`;
    image9.src = `./mode-${color}.svg`;
}

function darkMode(){
    toggleIcon.children[0].textContent = 'Dark Mode';
    toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
    changeImageMode('dark');
}

function lightMode(){
    toggleIcon.children[0].textContent = 'Light Mode';
    toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    changeImageMode('light');
}

function switchTheme(event){
    if(event.target.checked){
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        lightMode();
    }
    else{
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        darkMode();
    }
}

toggleSwitch.addEventListener('change', switchTheme);

// Check Local Storage
const currentTheme = localStorage.getItem('theme');
if(currentTheme){
    document.documentElement.setAttribute('data-theme', currentTheme);
    if(currentTheme === 'light')
    {
        toggleSwitch.checked = true;
        lightMode();
    }
}