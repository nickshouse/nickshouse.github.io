function populateProjects() {
    const projects = [
        { 
            name: "DisHub", 
            link: "https://github.com/nickshouse/DisHub",
            description: "This is a Discord bot that makes it possible to monitor the commits of a specified GitHub repository. The bot will post each commit to a specified Discord channel in real time.",
            icon: "fas fa-code"
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
        },
        { 
            name: "Chao Bot", 
            link: "https://github.com/nickshouse/Chao-Bot",
            description: "This is a Discord bot that simulates raising Chao from the Sonic Adventure games. It is a large scoped project that is currently a work in progress.",
            icon: "fas fa-gamepad"
        } 
    ];

    const projectsContainer = document.getElementById('projects');

    for (let project of projects) {
        const projectElement = document.createElement('div');
        projectElement.className = 'project';
        projectElement.innerHTML = `
            <a class="project-link" href="${project.link}" target="_blank">
                <h2 class="project-title">${project.name} <i class="${project.icon} icon-right"></i></h2>
                <p>${project.description}</p>
            </a>
        `;
        projectsContainer.appendChild(projectElement);
    }
}

function setupHamburgerMenu() {
    const hamburger = document.getElementById('hamburger');
    const sidebar = document.getElementById('sidebar');

    hamburger.addEventListener('click', function(event) {
        event.stopPropagation();
        sidebar.classList.toggle('active');
        hamburger.classList.toggle('is-active');
    });

    document.addEventListener('click', function(event) {
        if (!sidebar.contains(event.target)) {
            sidebar.classList.remove('active');
            hamburger.classList.remove('is-active');
        }
    });
}

function setupThemeToggle() {
    const themeToggle = document.getElementById('checkbox');

    themeToggle.addEventListener('change', function() {
        if (this.checked) {
            document.body.classList.remove('theme-light');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.add('theme-light');
            localStorage.setItem('theme', 'light');
        }
    });

    // Check for a stored theme
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        themeToggle.checked = (currentTheme === 'dark');
        if (currentTheme === 'light') {
            document.body.classList.add('theme-light');
        } else {
            document.body.classList.remove('theme-light');
        }
    } else {
        // Default theme is dark
        document.body.classList.remove('theme-light');
    }

    // Make the body visible now that the theme is loaded
    document.body.style.visibility = 'visible';
}

document.addEventListener('DOMContentLoaded', function() {
    populateProjects();
    setupHamburgerMenu();
    setupThemeToggle();
});
