document.addEventListener('DOMContentLoaded', () => {
    // Scroll Animation Observer
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-fade-in');
    animatedElements.forEach(el => observer.observe(el));

    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            menuBtn.classList.toggle('open');
        });
    }

    // Dynamic Footer Year
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Initialize theme based on preference
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
        document.documentElement.removeAttribute('data-theme');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }

    // Interactive "Red Smoke" Water Ripple Effect
    const canvas = document.getElementById('ripple-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let width, height, size;
        let buffer1, buffer2;
        let ripple_data;
        let step = 2; // Resolution scale

        function init() {
            width = canvas.width = window.innerWidth / step;
            height = canvas.height = window.innerHeight / step;
            size = width * height;

            buffer1 = new Int16Array(size);
            buffer2 = new Int16Array(size);

            ripple_data = ctx.createImageData(width, height);
        }

        function disturb(x, y, z) {
            x = Math.floor(x / step);
            y = Math.floor(y / step);
            if (x < 1 || x > width - 1 || y < 1 || y > height - 1) return;
            let i = x + y * width;
            buffer1[i] += z;
        }

        function update() {
            let i = width;
            let a, data = ripple_data.data;

            for (let y = 1; y < height - 1; y++) {
                for (let x = 1; x < width - 1; x++) {
                    i++;
                    // Basic wave algorithm
                    a = (buffer1[i - 1] + buffer1[i + 1] + buffer1[i - width] + buffer1[i + width]) >> 1;
                    a -= buffer2[i];
                    a -= a >> 5; // Damping

                    buffer2[i] = a;

                    // Rendering "Red Smoke"
                    a = a > 255 ? 255 : (a < -255 ? -255 : a);

                    let pixel = i * 4;
                    // Red smoke tint: Vibrant red gradients
                    data[pixel] = 214;     // R (d63031 equivalent)
                    data[pixel + 1] = 48;  // G
                    data[pixel + 2] = 49;  // B
                    // Alpha based on wave height provides the smoke/liquid look
                    data[pixel + 3] = Math.abs(a) + 20;
                }
                i += 2;
            }

            // Swap buffers
            let temp = buffer1;
            buffer1 = buffer2;
            buffer2 = temp;

            ctx.putImageData(ripple_data, 0, 0);
        }

        window.addEventListener('resize', init);
        window.addEventListener('mousemove', (e) => disturb(e.clientX, e.clientY, 256));
        window.addEventListener('click', (e) => disturb(e.clientX, e.clientY, 1024));

        init();
        function loop() {
            update();
            requestAnimationFrame(loop);
        }
        loop();

        // Auto-ripples for "ambient smoke" effect
        setInterval(() => {
            disturb(Math.random() * window.innerWidth, Math.random() * window.innerHeight, 256);
        }, 1500);
    }
});
