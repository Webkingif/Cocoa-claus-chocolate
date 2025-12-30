document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Theme Toggle Logic ---
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;
    const iconSpan = themeToggleBtn.querySelector('.icon');

    // Check LocalStorage for saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.setAttribute('data-theme', 'dark');
        iconSpan.textContent = '☀️';
    }

    themeToggleBtn.addEventListener('click', () => {
        if (body.getAttribute('data-theme') === 'dark') {
            body.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
            iconSpan.textContent = '🌙';
        } else {
            body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            iconSpan.textContent = '☀️';
        }
    });

    // --- 2. Snowfall Effect (Performance Optimized) ---
    const createSnow = () => {
        const snowContainer = document.getElementById('snow-container');
        const particleCount = 50; // Limit for performance

        for (let i = 0; i < particleCount; i++) {
            const snowflake = document.createElement('div');
            snowflake.classList.add('snowflake');
            
            // Randomize position and size
            const size = Math.random() * 5 + 2 + 'px';
            snowflake.style.width = size;
            snowflake.style.height = size;
            snowflake.style.left = Math.random() * 100 + 'vw';
            
            // Randomize animation duration to create natural feel
            const duration = Math.random() * 3 + 2 + 's'; // Between 2s and 5s
            snowflake.style.animationDuration = duration;
            snowflake.style.animationDelay = Math.random() * 5 + 's';
            
            snowContainer.appendChild(snowflake);
        }
    };

    createSnow();
});