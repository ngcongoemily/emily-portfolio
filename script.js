// script.js – dark/light mode toggle with localStorage persistence

const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Check localStorage for saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    themeToggle.textContent = '☀️ Light';
} else {
    // default light (no class) – ensure button text matches
    themeToggle.textContent = '🌙 Dark';
}

// Toggle function
function toggleTheme() {
    if (body.classList.contains('dark-mode')) {
        // switch to light
        body.classList.remove('dark-mode');
        themeToggle.textContent = '🌙 Dark';
        localStorage.setItem('theme', 'light');
    } else {
        // switch to dark
        body.classList.add('dark-mode');
        themeToggle.textContent = '☀️ Light';
        localStorage.setItem('theme', 'dark');
    }
}

// Event listener
themeToggle.addEventListener('click', toggleTheme);