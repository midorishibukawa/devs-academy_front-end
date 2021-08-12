const themeToggle = document.getElementById('change-theme');
const themeStyle = document.getElementById('theme-style');
const socialMedia = document.getElementsByClassName('social-media');

themeToggle.onclick = function() {
    console.log('test');
    if (themeStyle.href.endsWith('css/light-theme.css')) {
       themeStyle.href = 'css/dark-theme.css';
       Array.from(socialMedia).forEach(element => {
           element.className = 'social-media dark';
       });
    } else {
        themeStyle.href = 'css/light-theme.css';
        Array.from(socialMedia).forEach(element => {
            element.className = 'social-media light';
        });
    }
};