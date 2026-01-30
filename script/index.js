/* White Smoke*/
document.body.addEventListener('click', function(e) {
    const particleCount = 20; // Number of smoke particles
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('smoke-particle');
        
        // Position the particle at the click location
        particle.style.left = e.clientX + 'px';
        particle.style.top = e.clientY + 'px';

        document.body.appendChild(particle);

        // Remove the particle after the animation is done
        particle.addEventListener('animationend', () => {
            particle.remove();
        });
    }
});




document.addEventListener('DOMContentLoaded', () => {
    const banner = document.getElementById('cookie-banner');
    const acceptBtn = document.getElementById('accept-cookies-btn');
    const cookieName = 'infoBannerAccepted';

    const getCookie = (name) => {
        return document.cookie.split('; ').find(row => row.startsWith(name + '='));
    };

    // 1. If cookie is NOT found, remove 'hidden' to slide it UP
    if (!getCookie(cookieName)) {
        setTimeout(() => {
            banner.classList.remove('hidden');
        }, 300); 
    }

    acceptBtn.addEventListener('click', () => {
        // 2. Add 'hidden' to slide it DOWN
        banner.classList.add('hidden');
        
        const date = new Date();
        date.setTime(date.getTime() + (30 * 24 * 60 * 60 * 1000));
        // Fixed: Added backticks for the template literal
        document.cookie = `${cookieName}=true; expires=${date.toUTCString()}; path=/; secure; samesite=Lax`;
    });
});


    /*AUTO-CHANGE-YEAR*/
        document.getElementById('year').textContent = new Date().getFullYear();








