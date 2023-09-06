document.addEventListener('DOMContentLoaded', () => {
    populateProjects();
    setupHamburgerMenu();
    setupThemeToggle();
});

function populateProjects() {
    const projects = [
        { 
            name: "DisHub", 
            link: "https://github.com/nickshouse/DisHub",
            description: "This is a Discord bot that makes it possible to monitor the commits of a specified GitHub repository. The bot will post each commit to a specified Discord channel in real time.",
            icon: "fas fa-code"
        },
        { 
            name: "Cursor Cloak", 
            link: "https://github.com/nickshouse/Cursor-Cloak",
            description: "Cursor Cloak is an innovative C++ application that enhances user experience by cleverly auto-hiding the cursor during idle times. <br><br> It also features a convenient system tray icon for easy termination. <br><br> It showcases strong skills in C++ and Windows-specific APIs.",
            icon: "fas fa-mouse-pointer"
        },
        { 
            name: "Chao Bot", 
            link: "https://github.com/nickshouse/Chao-Bot",
            description: "This is a Discord bot that simulates raising Chao from the Sonic Adventure games. It is a large scoped project that is currently a work in progress.",
            icon: "fas fa-gamepad"
        },
        { 
            name: "Amazon Bot", 
            link: "https://github.com/nickshouse/Amazon-Bot",
            description: "This is an unfinished automation bot.",
            icon: "fas fa-robot"
        },
        { 
            name: "Windows Stuff", 
            link: "https://github.com/nickshouse/Windows-Stuff",
            description: "A collection of scripts for managing Windows systems.",
            icon: "fas fa-windows"
        }


    ];

    const projectsContainer = document.getElementById('projects');

    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.className = 'project';
        projectElement.innerHTML = `
            <a class="project-link" href="${project.link}" target="_blank">
                <h2 class="project-title">${project.name} <i class="${project.icon} icon-right"></i></h2>
                <p>${project.description}</p>
            </a>
        `;
        projectsContainer.appendChild(projectElement);
    });
}

function setupHamburgerMenu() {
    const hamburger = document.getElementById('hamburger');
    const sidebar = document.getElementById('sidebar');

    hamburger.addEventListener('click', event => {
        event.stopPropagation();
        sidebar.classList.toggle('active');
    });

    document.addEventListener('click', event => {
        if (!sidebar.contains(event.target)) {
            sidebar.classList.remove('active');
        }
    });
}

function setupThemeToggle() {
    const themeToggle = document.getElementById('checkbox');
    const currentTheme = localStorage.getItem('theme') || 'dark';

    document.documentElement.setAttribute('data-theme', currentTheme);
    themeToggle.checked = (currentTheme === 'dark');

    themeToggle.addEventListener('change', function() {
        const theme = this.checked ? 'dark' : 'light';
        trans();
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    });

    const trans = () => {
        document.documentElement.classList.add('transition');
        setTimeout(() => {
            document.documentElement.classList.remove('transition');
        }, 1000);
    };
}

document.querySelector('.menu a[href="#contact"]').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('main-content').style.display = 'none';
    document.getElementById('contactPage').style.display = 'block';
    document.getElementById('sidebar').classList.remove('active');
});
