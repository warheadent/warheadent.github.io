const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

const sunIcon = '☀️';
const moonIcon = '🌙';

// Function to update the button icon
function updateButtonIcon() {
    if (body.classList.contains('dark-mode')) {
        themeToggle.innerHTML = sunIcon; // Dark mode is on, show sun to switch to light
    } else {
        themeToggle.innerHTML = moonIcon; // Light mode is on, show moon to switch to dark
    }
}

// Check for saved theme preference and set initial icon
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
}
updateButtonIcon(); // Set initial icon

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    updateButtonIcon(); // Update icon after toggle
    // Save theme preference
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.removeItem('theme');
    }
});