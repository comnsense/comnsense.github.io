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

// Office Skills Data
const officeSkills = [
    { 
        name: "BulMar Office", 
        description: "Счетоводство+, ТРЗ - счетоводен софтуер",
        icon: "fa-calculator",
        link: "https://bulmar.com/bg/accounting-software"
    },
    { 
        name: "Кредо 2000", 
        description: "ERP система за счетоводство и управление",
        icon: "fa-database",
        link: "#"
    },
    
    { 
        name: "MS Office", 
        description: "Excel, Word, Outlook, PowerPoint - напреднало ниво",
        icon: "fa-file-excel",
        link: "#"
    },
    { 
        name: "Google Workspace", 
        description: "Docs, Sheets, Gmail, Calendar, Meet",
        icon: "fa-google",
        link: "#"
    },
      { 
        name: "Google Analytics", 
        description: "Анализ на уеб трафик, проследяване на посетители, поведенчески анализи, GA4 конфигурация",
        icon: "fa-chart-line",
     
    },
    { 
        name: "CRM Системи", 
        description: "Управление на клиентски взаимоотношения и продажби",
        icon: "fa-handshake",
        link: "#"
    }
    
    
];

// Render Office Skills
function renderOfficeSkills() {
    const container = document.getElementById('officeSkillsContainer');
    if (!container) return;
    
    container.innerHTML = officeSkills.map((skill, index) => {
        // Проверка дали има линк
        const hasValidLink = skill.link && skill.link !== '#';
        
        const linkHtml = hasValidLink 
            ? `<a href="${skill.link}" class="office-skill-link" target="_blank" rel="noopener">
                <i class="fas fa-external-link-alt"></i> Научи повече
                <i class="fas fa-arrow-right"></i>
               </a>`
            : `<span class="office-skill-link" style="opacity: 0.7; cursor: default;">
                
               </span>`;
        
        return `
            <div class="office-skill-card" data-index="${index}" data-has-link="${hasValidLink}">
                <div class="office-skill-header">
                    <div class="office-skill-icon">
                        <i class="fas ${skill.icon}"></i>
                    </div>
                    <h4 class="office-skill-name">${skill.name}</h4>
                </div>
                <p class="office-skill-description">${skill.description}</p>
                ${linkHtml}
            </div>
        `;
    }).join('');
    
     
    // Добавяне на hover ефект за линковете
    document.querySelectorAll('.office-skill-link[href="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const card = e.target.closest('.office-skill-card');
            const index = card.dataset.index;
            const skill = officeSkills[index];
            
            card.style.transform = 'scale(0.98)';
            setTimeout(() => {
                card.style.transform = '';
            }, 200);
            
            console.log(`Детайли за ${skill.name}: ${skill.description}`);
        });
    });
}

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
document.querySelectorAll('.skill-category, .soft-skill-item, .project-card, .education-item, .experience-item, .office-skill-card').forEach(el => {
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

    /* Office Skills Card Styles - ако не са в CSS файла */
    .office-skills-section {
        margin: 3rem 0;
        padding: 1rem 0;
        width: 100%;
    }

    .office-skills-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 1.5rem;
        margin-top: 2rem;
    }

    .office-skill-card {
        background: var(--bg-secondary);
        border: 2px solid var(--border-color);
        border-radius: 16px;
        padding: 1.5rem;
        position: relative;
        overflow: hidden;
        transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        cursor: pointer;
        animation: fadeInUp 0.6s ease backwards;
    }

    .office-skill-card::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 4px;
        background: linear-gradient(90deg, var(--accent), var(--accent-hover));
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 0.4s ease;
    }

    .office-skill-card:hover {
        transform: translateY(-8px) scale(1.02);
        border-color: var(--accent);
        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
    }

    .office-skill-card:hover::before {
        transform: scaleX(1);
    }

    .office-skill-header {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-bottom: 1rem;
    }

    .office-skill-icon {
        width: 50px;
        height: 50px;
        background: linear-gradient(145deg, var(--skill-bg), var(--accent));
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.8rem;
        color: white;
        transition: all 0.4s ease;
    }

    .office-skill-card:hover .office-skill-icon {
        transform: rotate(360deg) scale(1.1);
        background: linear-gradient(145deg, var(--accent), var(--accent-hover));
        box-shadow: 0 0 20px var(--accent);
    }

    .office-skill-name {
        font-size: 1.3rem;
        font-weight: 700;
        color: var(--text-primary);
        margin: 0;
        transition: color 0.3s ease;
    }

    .office-skill-card:hover .office-skill-name {
        color: var(--accent);
    }

    .office-skill-description {
        color: var(--text-secondary);
        font-size: 1rem;
        line-height: 1.5;
        margin: 0.8rem 0 1.2rem;
        padding-left: 0.5rem;
        border-left: 3px solid transparent;
        transition: all 0.3s ease;
    }

    .office-skill-card:hover .office-skill-description {
        border-left-color: var(--accent);
        padding-left: 1rem;
        color: var(--text-primary);
    }

    .office-skill-link {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        color: var(--accent);
        text-decoration: none;
        font-weight: 600;
        font-size: 0.95rem;
        padding: 0.5rem 0;
        transition: all 0.3s ease;
        opacity: 0;
        transform: translateX(-10px);
    }

    .office-skill-card:hover .office-skill-link {
        opacity: 1;
        transform: translateX(0);
    }

    .office-skill-link:hover {
        color: white;
        transform: translateX(5px) !important;
    }

    .office-skill-link i {
        font-size: 0.9rem;
        transition: transform 0.3s ease;
    }

    .office-skill-link:hover i {
        transform: translateX(5px);
    }

    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .office-skill-card:nth-child(1) { animation-delay: 0.1s; }
    .office-skill-card:nth-child(2) { animation-delay: 0.2s; }
    .office-skill-card:nth-child(3) { animation-delay: 0.3s; }
    .office-skill-card:nth-child(4) { animation-delay: 0.4s; }
    .office-skill-card:nth-child(5) { animation-delay: 0.5s; }
 

    [data-theme="dark"] .office-skill-card {
        background: linear-gradient(145deg, #1a2533, #1e2a3a);
        border-color: #2a3a4a;
    }

    [data-theme="dark"] .office-skill-card:hover {
        background: linear-gradient(145deg, #1e2f40, #2a3a4a);
        border-color: #69a7cd;
        box-shadow: 0 20px 30px rgba(0, 0, 0, 0.6);
    }

    [data-theme="dark"] .office-skill-description {
        color: #b0b7cc;
    }

    [data-theme="dark"] .office-skill-card:hover .office-skill-description {
        color: #ffffff;
    }

    [data-theme="light"] .office-skill-card {
        background: white;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    }

    [data-theme="light"] .office-skill-card:hover {
        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
    }

    @media (max-width: 768px) {
        .office-skills-container {
            grid-template-columns: 1fr;
        }
        
        .office-skill-card {
            padding: 1.2rem;
        }
        
        .office-skill-icon {
            width: 40px;
            height: 40px;
            font-size: 1.4rem;
        }
        
        .office-skill-name {
            font-size: 1.1rem;
        }
    }
`;

document.head.appendChild(style);

// Инициализация при зареждане на страницата
document.addEventListener('DOMContentLoaded', () => {
    renderOfficeSkills();
    
    // Добавяне на анимация за office-skill-card след като бъдат създадени
    setTimeout(() => {
        document.querySelectorAll('.office-skill-card').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    }, 100);
});
