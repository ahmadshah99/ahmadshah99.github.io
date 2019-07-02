var projects = document.querySelectorAll('.project');
var i = 0;

for (i = 0; i < projects.length; i++) {
    projects[i].addEventListener('click', showDiv, false);
}

function showDiv(project) {
    name = project.target.id;
    x = document.getElementById(name);
    if (x.querySelector('.project-description').style.display === 'block') {
        x.querySelector('.project-description').style.display = 'none';
        fadeout();
    } else {
        x.querySelector('.project-description').style.display = 'block';
        fadein();
    }
}
