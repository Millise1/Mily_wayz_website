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




document.addEventListener('DOMContentLoaded', (event) => {
    const banner = document.getElementById('cookie-banner');
    const acceptBtn = document.getElementById('accept-cookies-btn');
    const cookieName = 'infoBannerAccepted'; // Renamed cookie for clarity
    const cookieValue = 'true';
    const expirationDays = 30; 

    function getCookie(name) {
        const nameEQ = name + "=";
        const ca = document.cookie.split(';');
        for(let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    function setCookie(name, value, days) {
        let expires = "";
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "")  + expires + "; path=/; secure; samesite=Lax";
    }

    // 1. Check if the "Ok" button has been clicked before
    if (getCookie(cookieName) !== cookieValue) {
        // If not accepted, show the banner
        // We ensure it starts hidden in CSS and then remove the 'hidden' class 
        // OR, ensure the 'hidden' class is only added when the cookie is present.
        // For simplicity, make sure the HTML starts without 'hidden', and the JS hides it if the cookie is found.
        // For this code, the logic is: if NO cookie, show the banner.
    } else {
         // If the cookie IS present, hide the banner immediately on load
        banner.classList.add('hidden');
    }

    // 2. Add event listener to the button
    acceptBtn.addEventListener('click', () => {
        // Hide the banner
        banner.classList.add('hidden'); 
        
        // Set the acceptance cookie
        setCookie(cookieName, cookieValue, expirationDays);
    });
});


    /*AUTO-CHANGE-YEAR*/
        document.getElementById('year').textContent = new Date().getFullYear();







