// Course data - Bulgarian and English
const coursesData = [
    { bg: "Въведение в предприемачеството", en: "Introduction to Entrepreneurship", grade: "5", ects: "B" },
    { bg: "Въведение в компютърните науки", en: "Introduction to Computer Science", grade: "6", ects: "A" },
    { bg: "Компютърни архитектури", en: "Computer Architectures", grade: "3", ects: "E" },
    { bg: "Линейна алгебра и аналитична геометрия", en: "Linear Algebra & Analytic Geometry", grade: "4", ects: "C" },
    { bg: "Академично писане", en: "Academic Writing", grade: "6", ects: "A" },
    { bg: "Програмиране", en: "Programming", grade: "6", ects: "A" },
    { bg: "Операционни системи", en: "Operating Systems", grade: "4", ects: "C" },
    { bg: "Уеб технологии", en: "Web Technologies", grade: "6", ects: "A" },
    { bg: "Математически анализ", en: "Mathematical Analysis", grade: "6", ects: "A" },
    { bg: "ИТ средства за анализ на данни", en: "IT Tools for Data Analysis", grade: "5", ects: "B" },
    { bg: "Обектно-ориентирано програмиране", en: "Object-Oriented Programming", grade: "6", ects: "A" },
    { bg: "Структури от данни и алгоритми", en: "Data Structures & Algorithms", grade: "5", ects: "B" },
    { bg: "Потребителски интерфейси и използваемост", en: "User Interfaces & Usability", grade: "6", ects: "A" },
    { bg: "Компютърни мрежи и комуникации", en: "Computer Networks & Communications", grade: "5", ects: "B" },
    { bg: "Математически основи на информатиката", en: "Mathematical Foundations of Informatics", grade: "3", ects: "E" },
    { bg: "Бази данни", en: "Databases", grade: "3", ects: "E" },
    { bg: "Вероятности и статистика", en: "Probability & Statistics", grade: "4", ects: "C" },
    { bg: "Програмиране с PHP", en: "Programming with PHP", grade: "5", ects: "B" },
    { bg: "Техники на програмиране", en: "Programming Techniques", grade: "5", ects: "B" },
    { bg: "3D моделиране и принтиране", en: "3D Modeling & Printing", grade: "5", ects: "B" },
    { bg: "JavaScript технологии", en: "JavaScript Technologies", grade: "6", ects: "A" },
    { bg: "Въведение в микроконтролерите", en: "Introduction to Microcontrollers", grade: "6", ects: "A" },
    { bg: "Компютърна графика", en: "Computer Graphics", grade: "6", ects: "A" },
    { bg: "Програмиране с Python", en: "Programming with Python", grade: "6", ects: "A" },
    { bg: "Криптография", en: "Cryptography", grade: "4", ects: "C" },
    { bg: "Въведение в мениджмънта", en: "Introduction to Management", grade: "4", ects: "C" },
    { bg: "Софтуерно инженерство", en: "Software Engineering", grade: "6", ects: "A" },
    { bg: "Разработка на мобилни приложения", en: "Mobile App Development", grade: "6", ects: "A" },
    { bg: "Психология на интелекта", en: "Psychology of Intelligence", grade: "5", ects: "B" },
    { bg: "Киберсигурност", en: "Cybersecurity", grade: "5", ects: "B" },
    { bg: "Уеб услуги и облачни технологии", en: "Web Services & Cloud Technologies", grade: "6", ects: "A" },
    { bg: "Анимация в уеб", en: "Web Animation", grade: "6", ects: "A" },
    { bg: "Функционално програмиране", en: "Functional Programming", grade: "4", ects: "C" },
    { bg: "Управление на бизнес процеси", en: "Business Process Management", grade: "6", ects: "A" },
    { bg: "Софтуерни архитектури", en: "Software Architectures", grade: "3", ects: "E" },
    { bg: "Научноизследователски стаж", en: "Research Internship", grade: "6", ects: "A" },
    { bg: "Интелигентни системи", en: "Intelligent Systems", grade: "4", ects: "D" },
    { bg: "Електронен бизнес", en: "E-business", grade: "4", ects: "D" },
    { bg: "Мултимедийни системи – практикум", en: "Multimedia Systems – practicum", grade: "6", ects: "A" },
    { bg: "Уеб дизайн – практикум", en: "Web Design – practicum", grade: "5", ects: "B" },
    { bg: "Операционни системи /практикум/", en: "Operating Systems practicum", grade: "4", ects: "C" },
    { bg: "Невронауки", en: "Neurosciences", grade: "6", ects: "A" },
    { bg: "Преддипломна практика/стаж", en: "Pre-graduation internship", grade: "4", ects: "C" }
];

// Theme toggle
const toggleSwitch = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'light') toggleSwitch.checked = true;
}

toggleSwitch.addEventListener('change', function(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
});

// Language switching
let currentLang = 'bg';

function updateLanguage(lang) {
    currentLang = lang;
    
    // Update active class on language switcher buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // Update all translatable elements
    document.querySelectorAll('[data-bg][data-en]').forEach(el => {
        el.textContent = el.dataset[lang];
    });

    // Switch content sections
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(`content-${lang}`).classList.add('active');

    // Update active tab
    document.querySelectorAll('.tab-btn').forEach(btn => {
        if (btn.dataset.tab === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// Language switcher buttons
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        updateLanguage(btn.dataset.lang);
    });
});

// Tab buttons
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        updateLanguage(btn.dataset.tab);
    });
});

// Render courses
function renderCourses() {
    const listBg = document.getElementById('courseListBg');
    const listEn = document.getElementById('courseListEn');
    
    listBg.innerHTML = '';
    listEn.innerHTML = '';
    
    coursesData.forEach((course, index) => {
        // Bulgarian item
        const bgItem = document.createElement('div');
        bgItem.className = 'course-item';
        bgItem.innerHTML = `
            <span class="course-num">${index + 1}.</span>
            <span class="course-name">${course.bg}</span>
            <span class="course-grade">${course.grade}</span>
            <span class="course-ects">${course.ects}</span>
        `;
        listBg.appendChild(bgItem);

        // English item
        const enItem = document.createElement('div');
        enItem.className = 'course-item';
        enItem.innerHTML = `
            <span class="course-num">${index + 1}.</span>
            <span class="course-name">${course.en}</span>
            <span class="course-grade">${course.grade}</span>
            <span class="course-ects">${course.ects}</span>
        `;
        listEn.appendChild(enItem);
    });
}

// Initial render
renderCourses();