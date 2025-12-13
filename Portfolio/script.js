const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle.querySelector('i');
const htmlElement = document.documentElement;

// Check local storage for theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    htmlElement.setAttribute('data-theme', savedTheme);
    updateIcon(savedTheme);
}

themeToggle.addEventListener('click', () => {
    // Get current theme
    const currentTheme = htmlElement.getAttribute('data-theme');
    
    // Switch theme
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    htmlElement.setAttribute('data-theme', newTheme);
    
    // Save to local storage
    localStorage.setItem('theme', newTheme);
    
    // Update Icon
    updateIcon(newTheme);
});

function updateIcon(theme) {
    if (theme === 'dark') {
        themeIcon.classList.remove('bx-moon');
        themeIcon.classList.add('bx-sun');
    } else {
        themeIcon.classList.remove('bx-sun');
        themeIcon.classList.add('bx-moon');
    }
}