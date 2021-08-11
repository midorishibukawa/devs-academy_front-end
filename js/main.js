const themeToggle = document.getElementById('change-theme');
const themeStyle = document.getElementById('theme-style');

themeToggle.onclick = function() {
    console.log('test');
    if (themeStyle.href.endsWith('css/light-theme.css')) {
       themeStyle.href = 'css/dark-theme.css';
    } else {
        themeStyle.href = 'css/light-theme.css';
    }
};