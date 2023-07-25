window.onload = function() {
    const projects = [
        { name: "Github Discord", link: "https://github.com/nickshouse/githubdiscord" },
        { name: "Amazon Bot", link: "https://github.com/nickshouse/Amazon-Bot" },
        { name: "Windows Stuff", link: "https://github.com/nickshouse/Windows-Stuff" }
    ];

    const projectsContainer = document.getElementById('projects');

    for (let project of projects) {
        const projectElement = document.createElement('div');
        projectElement.className = 'project';
        projectElement.innerHTML = `
            <a class="project-link" href="${project.link}" target="_blank">
                <h2 class="project-title">${project.name}</h2>
                <p>Check this project on GitHub</p>
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
            transition();
            document.documentElement.setAttribute('data-theme', 'light');
        } else {
            transition();
            document.documentElement.setAttribute('data-theme', 'dark');
        }
    });

    let transition = () => {
        document.documentElement.classList.add('transition');
        window.setTimeout(() => {
            document.documentElement.classList.remove('transition');
        }, 1000)
    }

    // Default to dark mode
    document.documentElement.setAttribute('data-theme', 'dark');
};
