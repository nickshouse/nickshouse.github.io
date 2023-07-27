window.onload = function() {
    const projects = [
        { 
            name: "DisHub", 
            link: "https://github.com/nickshouse/githubdiscord",
            description: "This is a project about integrating GitHub with Discord.",
            icon: "fas fa-code"
        },
        { 
            name: "Amazon Bot", 
            link: "https://github.com/nickshouse/Amazon-Bot",
            description: "A bot to automate certain tasks on Amazon.",
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
            description: "A Bot for Discord that simulates raising Chao from Sonic games.",
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

    const hamburger = document.getElementById('hamburger');
    const sidebar = document.getElementById('sidebar');

    hamburger.addEventListener('click', function() {
        sidebar.classList.toggle('active');
    });

    // Add theme toggle functionality
    const themeToggle = document.getElementById('checkbox');

    themeToggle.addEventListener('change', function() {
        if (this.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
        }
    });
};
