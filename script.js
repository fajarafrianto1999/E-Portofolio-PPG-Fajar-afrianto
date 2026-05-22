document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.getElementById('nav-links');
    const mobileMenuIcon = mobileMenuBtn.querySelector('i');

    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        if (navLinks.classList.contains('active')) {
            mobileMenuIcon.classList.replace('ph-list', 'ph-x');
        } else {
            mobileMenuIcon.classList.replace('ph-x', 'ph-list');
        }
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileMenuIcon.classList.replace('ph-x', 'ph-list');
        });
    });

    // 2. Navbar Background on Scroll
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 3. Typewriter Effect
    const words = ["Guru Teknik Mesin", "Instruktur Pengelasan", "Pendidik Profesional", "Inovator Welding"];
    let i = 0;
    let timer;
    const typewriterElement = document.getElementById('typewriter');

    function typingEffect() {
        if(!typewriterElement) return;
        let word = words[i].split("");
        var loopTyping = function() {
            if (word.length > 0) {
                typewriterElement.innerHTML += word.shift();
            } else {
                setTimeout(deletingEffect, 2000); // Wait 2s before deleting
                return false;
            }
            timer = setTimeout(loopTyping, 100);
        };
        loopTyping();
    }

    function deletingEffect() {
        let word = words[i].split("");
        var loopDeleting = function() {
            if (word.length > 0) {
                word.pop();
                typewriterElement.innerHTML = word.join("");
            } else {
                if (words.length > (i + 1)) {
                    i++;
                } else {
                    i = 0;
                }
                setTimeout(typingEffect, 500); // Wait before typing next
                return false;
            }
            timer = setTimeout(loopDeleting, 50);
        };
        loopDeleting();
    }

    // Start typing effect
    setTimeout(typingEffect, 1000);

    // 4. Update Copyright Year
    document.getElementById('year').textContent = new Date().getFullYear();

    // 5. Active Link Switching on Scroll
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href').includes(current)) {
                item.classList.add('active');
            }
        });
    });

    // 6. Form Submission (Prevent default for demo)
    const contactForm = document.getElementById('contactForm');
    if(contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button');
            const originalText = btn.innerHTML;
            
            btn.innerHTML = '<i class="ph ph-spinner ph-spin"></i> Sending...';
            
            // Simulate sending
            setTimeout(() => {
                btn.innerHTML = '<i class="ph ph-check"></i> Sent Successfully!';
                btn.style.background = '#10b981'; // Green
                contactForm.reset();
                
                setTimeout(() => {
                    btn.innerHTML = originalText;
                    btn.style.background = '';
                }, 3000);
            }, 1500);
        });
    }

    // 7. Spark Particle Generator
    const sparkContainer = document.getElementById('spark-container');
    if (sparkContainer) {
        const createSpark = () => {
            const spark = document.createElement('div');
            spark.classList.add('spark');
            
            // Random properties
            const size = Math.random() * 3 + 2; // 2px to 5px
            const left = Math.random() * 100; // 0% to 100%
            const duration = Math.random() * 4 + 3; // 3s to 7s
            const delay = Math.random() * 2; // 0s to 2s
            const drift = (Math.random() * 120) - 60; // -60px to 60px horizontal drift
            
            // Set styles
            spark.style.width = `${size}px`;
            spark.style.height = `${size}px`;
            spark.style.left = `${left}%`;
            spark.style.animationDuration = `${duration}s`;
            spark.style.animationDelay = `${delay}s`;
            spark.style.setProperty('--drift', `${drift}px`);
            
            // Random color variations (varying orange/flame hues)
            const hue = Math.floor(Math.random() * 25) + 10; // 10 to 35 (red-orange to gold-orange)
            spark.style.backgroundColor = `hsl(${hue}, 100%, 60%)`;
            spark.style.boxShadow = `0 0 ${size * 2}px hsl(${hue}, 100%, 50%)`;

            sparkContainer.appendChild(spark);
            
            // Remove after animation completes
            setTimeout(() => {
                spark.remove();
            }, (duration + delay) * 1000);
        };

        // Create initial batch of sparks
        for (let idx = 0; idx < 30; idx++) {
            createSpark();
        }

        // Keep spawning sparks
        setInterval(createSpark, 150);
    }
});
