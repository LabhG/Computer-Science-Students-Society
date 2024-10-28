// Example: Dynamically add new projects
const projectList = document.getElementById('project-list');

// Sample data - Replace this with real data or fetch from a form/database
const projects = [
    { name: "Sorting Visualizer", link: "https://github.com/user/sorting-visualizer" },
    { name: "Weather App", link: "https://github.com/user/weather-app" }
];

projects.forEach(project => {
    const li = document.createElement('li');
    li.innerHTML = `${project.name}: <a href="${project.link}" target="_blank">${project.link}</a>`;
    projectList.appendChild(li);
});
