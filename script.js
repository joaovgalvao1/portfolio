// ==========================================================================
// Portfólio - João Vitor Godoy
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {

    // ----- 1. Ano atual no rodapé -----
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // ----- 2. Alternar tema claro/escuro -----
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const themeIcon = themeToggle ? themeToggle.querySelector('i') : null;

    // Aplica o tema salvo anteriormente (se houver)
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        body.classList.add('light-theme');
        if (themeIcon) {
            themeIcon.classList.replace('fa-moon', 'fa-sun');
        }
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            body.classList.toggle('light-theme');
            const isLight = body.classList.contains('light-theme');

            if (themeIcon) {
                themeIcon.classList.toggle('fa-moon', !isLight);
                themeIcon.classList.toggle('fa-sun', isLight);
            }
            localStorage.setItem('theme', isLight ? 'light' : 'dark');
        });
    }

    // ----- 3. Menu hambúrguer (mobile) -----
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
        });

        // Fecha o menu ao clicar em um link
        mainNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mainNav.classList.remove('active');
            });
        });
    }

    // ----- 4. Feedback do formulário de contato -----
    const form = document.getElementById('contact-form');
    const feedback = document.getElementById('form-feedback');

    if (form && feedback) {
        form.addEventListener('submit', () => {
            feedback.textContent = 'Enviando sua mensagem...';
        });
    }

    // ----- 5. Fundo de partículas (particles.js) -----
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: { value: 70, density: { enable: true, value_area: 800 } },
                color: { value: '#22d3ee' },
                shape: { type: 'circle' },
                opacity: { value: 0.5, random: true },
                size: { value: 3, random: true },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#3b82f6',
                    opacity: 0.35,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: 'none',
                    random: false,
                    out_mode: 'out'
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: { enable: true, mode: 'grab' },
                    onclick: { enable: true, mode: 'push' },
                    resize: true
                },
                modes: {
                    grab: { distance: 160, line_linked: { opacity: 0.6 } },
                    push: { particles_nb: 3 }
                }
            },
            retina_detect: true
        });
    }
});
