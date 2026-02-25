// Companies data с детайлна информация
const companies = [
    { 
        name: "ДИ ТИ ЕС ГРУП ООД", 
        activity: "Търговия на дребно", 
        vat: "Регистрация по ЗДДС",
        period: "2023 - 2025",
        link: "https://portal.registryagency.bg/CR/en/Reports/ActiveConditionTabResult?uic=201632656"
    },
    { 
        name: "НОВА ГРУП 2023 ЕООД", 
        activity: "Търговия на дребно", 
        vat: "Регистрация по ЗДДС",
        period: "2024 - 2025",
        link: "https://portal.registryagency.bg/CR/en/Reports/ActiveConditionTabResult?uic=207307908"
    },
    { 
        name: "МИТОВ МАКС ЕООД", 
        activity: "Инвестиции в строителството", 
        vat: "Регистрация по ЗДДС",
        period: "2024 - 2025",
        link: "https://portal.registryagency.bg/CR/en/Reports/ActiveConditionTabResult?uic=207721841"
    },
    { 
        name: "ПРОПЪРТИ ВЕНЧЪРС ЕООД", 
        activity: "Консултантски услуги", 
        vat: "Регистрация по ЗДДС",
        period: "2023 - 09.2025",
        link: "https://portal.registryagency.bg/CR/en/Reports/ActiveConditionTabResult?uic=175353191"
    },
    { 
        name: "АРС ВИВЕНДИ МК ЕООД", 
        activity: "Преводаческа дейност", 
        vat: "",
        period: "2020 - 2025",
        link: "https://portal.registryagency.bg/CR/en/Reports/ActiveConditionTabResult?uic=202046055"
    },
    { 
        name: "ВЕРИНА ЕМ ЕООД", 
        activity: "Ремонт и поддръжка на мебели", 
        notes: "",
        vat: "",
        period: "2020 - 2026",
        link: "https://portal.registryagency.bg/CR/en/Reports/ActiveConditionTabResult?uic=203172516"
    },
    { 
        name: "НАТ – СТРОЙ 92 ЕООД", 
        activity: "Търговия на дребно", 
        vat: "",
        period: "2024 - 2025",
        link: "https://portal.registryagency.bg/CR/en/Reports/ActiveConditionTabResult?uic=207346843"
    },
    { 
        name: "ЗЕЛЕНОТО КУЧЕ ЕООД", 
        activity: "Търговия на дребно", 
        vat: "",
        period: "2022 - 2025",
        link: "https://portal.registryagency.bg/CR/en/Reports/ActiveConditionTabResult?uic=203974085"
    },
    { 
        name: "ЕРФУРИ И ЕТИ ООД", 
        activity: "Търговия на дребно", 
        vat: "",
        period: "2020 - 2025",
        link: "https://portal.registryagency.bg/CR/en/Reports/ActiveConditionTabResult?uic=200732059"
    },
    { 
        name: "ДЕЙС-ОПТИК – ДАНИЕЛА ПАНЕКОВА ЕТ", 
        activity: "Търговия на дребно", 
        vat: "",
        period: "2023 - май 2025",
        link: "https://portal.registryagency.bg/CR/en/Reports/ActiveConditionTabResult?uic=204672862"
    },
    { 
        name: "ЕВРООДИТ И ПАРТНЬОРИ ЕООД", 
        activity: "Консултантски услуги", 
        vat: "",
        period: "2023 - 09.2025",
        link: "https://portal.registryagency.bg/CR/en/Reports/ActiveConditionTabResult?uic=201878558"
    },
    { 
        name: "ФОНДАЦИЯ ЕВРОКОМПАС", 
        activity: "Консултантски услуги", 
        vat: "",
        period: "2023 - 09.2025",
        link: "https://portal.registryagency.bg/CR/en/Reports/ActiveConditionTabResult?uic=176978112"
    },
    { 
        name: "ФОНДАЦИЯ ЕВРОИНТЕГРА", 
        activity: "Организация на форуми и срещи, Членски внос", 
        vat: "",
        period: "2023 - 09.2025",
        link: "https://portal.registryagency.bg/CR/en/Reports/ActiveConditionTabResult?uic=176914960"
    },
    { 
        name: "БЪЛГАРО-КИТАЙСКА ТЪРГОВСКО-ПРОМИШЛЕНА КАМАРА", 
        activity: "Търговско-промишлена камара", 
        vat: "",
        period: "2023 - 09.2025",
        link: "https://portal.registryagency.bg/CR/Reports/ActiveConditionTabResult?uic=208107860"
    },
    { 
        name: "БЪЛГАРСКА ХЪНТИНГТЪН АСОЦИАЦИЯ", 
        activity: "Делегирана държавна дейност", 
        vat: "",
        period: "07.2025 - 2025",
        link: "https://portal.registryagency.bg/CR/en/Reports/ActiveConditionTabResult?uic=176658639"
    },
    { 
        name: "ЕДНОКРАТНА УПОТРЕБА ЕООД", 
        activity: "Производство", 
        notes: "Месечно обслужване - продажби и банкови транзакции отдел София",
        vat: "",
        period: "2020 - 2026",
        link: ""
    }
];

// Responsibilities data
const responsibilities = [
    "Изготвяне и осчетоводяване на първични и вторични документи",
    "Осчетоводяване на ведомости за заплати",
    "Осчетоводяване на банкови и касови операции",  
    "Водене на складови наличности",  
    "Изготвяне на валутни отчети",  
    "Анализ и контрол на разчети",  
    "Поддържане на кореспонденция с клиенти и доставчици",     
    "Отчитане на строителни инвестиционни проекти и проектно финансиране", 
    "Изготвяне на ДДС декларации",
    "Участие в изготвяне на ГФО и ГДД",
    "Електронна комуникация",  
    "Работа със счетоводен софтуер и вътрешни системи"
];

// Technical skills data - без нива
const technicalSkills = [
    { 
        name: "BulMar Office", 
        description: "Счетоводство+, ТРЗ",
        icon: "fa-calculator",
        link: "https://bulmar.com/bg/accounting-software"
    },
    { 
        name: "ERP система", 
        description: "Кредо 2000",
        icon: "fa-database"
    },
    { 
        name: "CRM системи", 
        description: "Клиентски взаимоотношения",
        icon: "fa-handshake"
    },
    { 
        name: "MS Office", 
        description: "Excel, Word, Outlook",
        icon: "fa-file-excel"
    }
];

// Render technical skills
function renderTechnicalSkills() {
    const container = document.getElementById('technicalSkillsGrid');
    if (!container) return;
    
    container.innerHTML = '';
    
    technicalSkills.forEach(skill => {
        const item = document.createElement('div');
        item.className = 'skill-item';
        
        // За BulMar Office - специален формат с линк
        if (skill.name === "BulMar Office") {
            item.innerHTML = `
                <div class="skill-icon">
                    <i class="fas ${skill.icon}"></i>
                </div>
                <div class="skill-info">
                    <h4><a href="${skill.link}" target="_blank" rel="noopener" class="skill-title-link">${skill.name} <i class="fas fa-external-link-alt"></i></a></h4>
                    <div class="skill-description">${skill.description}</div>
                </div>
            `;
        } else {
            item.innerHTML = `
                <div class="skill-icon">
                    <i class="fas ${skill.icon}"></i>
                </div>
                <div class="skill-info">
                    <h4>${skill.name}</h4>
                    <div class="skill-description">${skill.description}</div>
                </div>
            `;
        }
        container.appendChild(item);
    });
}

// Theme toggle
const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
    themeToggle.checked = true;
}

themeToggle.addEventListener('change', function() {
    if (this.checked) {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
});

// Render companies
function renderCompanies() {
    const tbody = document.getElementById('companyBody');
    tbody.innerHTML = '';
    
    companies.forEach(company => {
        const row = document.createElement('tr');
        
        // Подготовка на бележките с период и VAT статус
        let notesContent = company.notes ? company.notes : '';
        
        // Добавяне на периода като badge
        if (company.period) {
            if (notesContent) notesContent += ' ';
            notesContent += `<span class="period-badge">📅 ${company.period}</span>`;
        }
        
        // Добавяне на VAT като badge
        if (company.vat) {
            notesContent += ` <span class="vat-badge">${company.vat}</span>`;
        }
        
        // Ако има линк, името става кликаемо с икона
        const nameContent = company.link 
            ? `<a href="${company.link}" target="_blank" rel="noopener" class="company-link">${company.name} <i class="fas fa-external-link-alt"></i></a>`
            : company.name;
        
        row.innerHTML = `
            <td class="company-name">${nameContent}</td>
            <td>${company.activity}</td>
            <td class="company-notes">${notesContent}</td>
        `;
        tbody.appendChild(row);
    });
}

// Render responsibilities
function renderResponsibilities() {
    const grid = document.getElementById('responsibilitiesGrid');
    grid.innerHTML = '';
    
    responsibilities.forEach(resp => {
        const item = document.createElement('div');
        item.className = 'resp-item';
        item.innerHTML = `
            <i class="fas fa-check-circle"></i>
            <span>${resp}</span>
        `;
        grid.appendChild(item);
    });
}

// Render technical skills
function renderTechnicalSkills() {
    const container = document.getElementById('technicalSkillsGrid');
    if (!container) return;
    
    container.innerHTML = '';
    
    technicalSkills.forEach(skill => {
        const item = document.createElement('div');
        item.className = 'skill-item';
        
        const linkContent = skill.link 
            ? `<a href="${skill.link}" target="_blank" rel="noopener" class="skill-link">${skill.description} <i class="fas fa-external-link-alt"></i></a>`
            : skill.description;
        
        item.innerHTML = `
            <div class="skill-icon">
                <i class="fas ${skill.icon}"></i>
            </div>
            <div class="skill-info">
                <h4>${skill.name}</h4>
                <div class="skill-description">${linkContent}</div>
       
            </div>
        `;
        container.appendChild(item);
    });
}

// Update stats based on actual data
function updateStats() {
    const totalCompanies = companies.length;
    const yearsSpan = "3+";
    
    const statCards = document.querySelectorAll('.stat-card');
    if (statCards.length >= 2) {
        const companyCountCard = statCards[0].querySelector('.stat-number');
        const periodCard = statCards[1].querySelector('.stat-number');
        
        if (companyCountCard) companyCountCard.textContent = totalCompanies;
        if (periodCard) periodCard.textContent = yearsSpan;
    }
}

// Initialize rendering
renderCompanies();
renderResponsibilities();
renderTechnicalSkills();
updateStats();
