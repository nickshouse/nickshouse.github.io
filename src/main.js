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
            <h2 class="project-title"><a class="project-link" href="${project.link}" target="_blank">${project.name}</a></h2>
            <p>Check this project on <a class="project-link" href="${project.link}" target="_blank">GitHub</a></p>
        `;
        projectsContainer.appendChild(projectElement);
    }
};
