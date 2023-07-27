window.onload = function() {
    const projects = [
        { 
            name: "DisHub", 
            link: "https://github.com/nickshouse/githubdiscord",
            description: "This is a project about integrating GitHub with Discord."
        },
        { 
            name: "Amazon Bot", 
            link: "https://github.com/nickshouse/Amazon-Bot",
            description: "A bot to automate certain tasks on Amazon."
        },
        { 
            name: "Windows Stuff", 
            link: "https://github.com/nickshouse/Windows-Stuff",
            description: "A collection of scripts for managing Windows systems."
        },
        { 
            name: "Chao Bot", 
            link: "https://github.com/nickshouse/Chao-Bot",
            description: "A Bot for Discord that simulates raising Chao from Sonic games."
        } 
    ];

    const projectsContainer = document.getElementById('projects');

    for (let project of projects) {
        const projectElement = document.createElement('div');
        projectElement.className = 'project';
        projectElement.innerHTML = `
            <a class="project-link" href="${project.link}" target="_blank">
                <h2 class="project-title">${project.name}</h2>
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

    document.addEventListener('click', function(event) {
        const isClickInside = sidebar.contains(event.target);
        const isHamburgerClicked = hamburger.contains(event.target);

        if (!isClickInside && !isHamburgerClicked && sidebar.classList.contains('active')) {
            sidebar.classList.remove('active');
        }
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
