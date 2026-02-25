// Theme Toggle functionality
const toggleSwitch = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');

// Set initial theme
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'light') {
        toggleSwitch.checked = true;
    }
} else {
    // Default to dark theme
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
}

// Theme switch function
function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
}

toggleSwitch.addEventListener('change', switchTheme);

// Tech Stack Toggle
const techStackHeader = document.getElementById('techStackHeader');
const techStackContent = document.getElementById('techStackContent');
const toggleIcon = document.getElementById('toggleIcon');

if (techStackHeader && techStackContent && toggleIcon) {
    techStackHeader.addEventListener('click', function() {
        techStackContent.classList.toggle('collapsed');
        toggleIcon.textContent = techStackContent.classList.contains('collapsed') ? '▶' : '▼';
    });
}

// Image error handling for skill badges
document.querySelectorAll('.skill-badge img').forEach(img => {
    img.addEventListener('error', function() {
        const parent = this.parentElement;
        const techName = this.alt;
        
        // Map technology names to Material Icons
        const iconMap = {
            'HTML5': 'code',
            'CSS3': 'palette',
            'JavaScript': 'javascript',
            'React': 'code',
            'Node.js': 'settings',
            'Express': 'bolt',
            'Git': 'share',
            'Bash': 'terminal',
            'WordPress': 'web',
            'Canva': 'brush',
            'Photoshop': 'brush',
            'Google Cloud': 'cloud',
            'Salesforce': 'cloud',
            'Windows': 'window',
            'Unix/Linux': 'terminal'
        };
        
        // Replace image with Material Icon
        parent.innerHTML = `
            <span class="material-icons">${iconMap[techName] || 'code'}</span>
            <span>${techName}</span>
        `;
    });
});

// Добавете тези функции в края на съществуващия script.js файл

// Анимация при скрол
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Приложи анимация към различни елементи
document.querySelectorAll('.skill-category, .soft-skill-item, .project-card, .education-item, .experience-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Добави клас за активна навигация
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(`.nav-item a[href="#${sectionId}"]`)?.classList.add('active');
        } else {
            document.querySelector(`.nav-item a[href="#${sectionId}"]`)?.classList.remove('active');
        }
    });
});

// Добави стил за активен навигационен елемент
const style = document.createElement('style');
style.textContent = `
    .nav-item a.active {
        color: var(--accent);
        border-bottom: 2px solid var(--accent);
    }
    
    .nav-item a.active::after {
        content: '';
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: var(--accent);
        animation: slideIn 0.3s ease;
    }
    
    @keyframes slideIn {
        from {
            width: 0;
        }
        to {
            width: 100%;
        }
    }
`;

document.head.appendChild(style);