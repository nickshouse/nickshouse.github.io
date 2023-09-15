/**
 * Modular Approach: Encapsulating all functions and variables within the PortfolioApp module.
 */
const PortfolioApp = (() => {
    
    // Constants for projects data
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

    const populateProjects = () => {
        const projectsContainer = document.getElementById('projects');
        const duplicatedProjectsContainer = document.getElementById('duplicated-projects');
    
        if (duplicatedProjectsContainer) {
            const titleElement = document.createElement('div');
            titleElement.className = 'project-title-container';
            titleElement.innerText = "Projects";
            duplicatedProjectsContainer.appendChild(titleElement);
        }

        if (projectsContainer) {
            projects.forEach(project => {
                const projectElement = document.createElement('a');
                projectElement.className = 'project project-link';
                projectElement.href = project.link;
                projectElement.target = "_blank";
                
                projectElement.innerHTML = `
                    <div>
                        <h2 class="project-title">${project.name} <i class="${project.icon} icon-right"></i></h2>
                        <p>${project.description}</p>
                    </div>
                `;
                
                projectElement.addEventListener('click', function(event) {
                    this.classList.toggle('clicked');
                });

                projectsContainer.appendChild(projectElement);
            });
        }
    };

    const setupHamburgerMenu = () => {
        const hamburger = document.getElementById('hamburger');
        const sidebar = document.getElementById('sidebar');
        
        document.addEventListener('click', event => {
            if (event.target === hamburger || hamburger.contains(event.target)) {
                sidebar.classList.toggle('active');
            } else if (!sidebar.contains(event.target)) {
                sidebar.classList.remove('active');
            }
        });
    };

    const applyThemeTransition = () => {
        document.documentElement.classList.add('transition');
        setTimeout(() => {
            document.documentElement.classList.remove('transition');
        }, 1000);
    };

    const setupThemeToggle = () => {
        const themeToggle = document.getElementById('checkbox');
        const currentTheme = localStorage.getItem('theme') || 'dark';

        document.documentElement.setAttribute('data-theme', currentTheme);
        themeToggle.checked = (currentTheme === 'dark');

        themeToggle.addEventListener('change', function() {
            const theme = this.checked ? 'dark' : 'light';
            applyThemeTransition();
            document.documentElement.setAttribute('data-theme', theme);
            localStorage.setItem('theme', theme);
        });
    };

    const handleContactClick = () => {
        document.querySelector('.menu a[href="#contact"]').addEventListener('click', function(event) {
            event.preventDefault();
            document.getElementById('projects').classList.add('fade-out');
            document.getElementById('duplicated-projects').classList.add('fade-out');
            document.getElementById('contact-info').classList.remove('hidden');
            document.getElementById('sidebar').classList.remove('active');
        });
    };

    document.querySelector('.menu a[href="#home"]').addEventListener('click', function(event) {
        event.preventDefault();
        const projectsElement = document.getElementById('projects');
        const duplicatedProjectsElement = document.getElementById('duplicated-projects');
        projectsElement.classList.remove('fade-out');
        duplicatedProjectsElement.classList.remove('fade-out');
        projectsElement.classList.add('fade-in');
        duplicatedProjectsElement.classList.add('fade-in');
        document.getElementById('contact-info').classList.add('hidden');
        document.getElementById('sidebar').classList.remove('active');
        setTimeout(() => {
            projectsElement.classList.remove('fade-in');
            duplicatedProjectsElement.classList.remove('fade-in');
        }, 1000);
    });

    return {
        init: () => {
            populateProjects();
            setupHamburgerMenu();
            setupThemeToggle();
            handleContactClick();
        }
    };
})();

document.addEventListener('DOMContentLoaded', PortfolioApp.init);
