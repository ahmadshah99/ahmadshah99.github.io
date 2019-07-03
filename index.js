var projects = document.querySelectorAll('.project');
var themes = document.querySelectorAll('.theme-div');
var i = 0;

for (i = 0; i < projects.length; i++) {
    projects[i].addEventListener('click', showDiv, false);
    if (i < themes.length) {
        themes[i].addEventListener('click', changeColor, false);
    }
}

function showDiv(project) {
    name = project.target.id;
    x = document.getElementById(name);
    if (x.querySelector('.project-description').style.display === 'block') {
        x.querySelector('.project-description').style.display = 'none';
    } else {
        x.querySelector('.project-description').style.display = 'block';
    }
}

function changeColor(c) {
    color = c.target.id;
    if (color === 'orange') {
        document.body.style.backgroundColor = '#ff8133';
        document.querySelector('#header').style.backgroundColor = '#f5650a';
        var projects = document.querySelectorAll('.project');
        var bg = document.querySelectorAll('.section:nth-child(2n)');
        var bars = document.querySelectorAll('.pbarfill');
        var j;
        for (j = 0; j < bars.length; j++) {
            bars[j].style.backgroundColor = 'rgb(7, 160, 45)';
            if (j < bg.length) {
                bg[j].style.backgroundColor = '#F2220D';
            }
        }

        for (var k = 0; k < projects.length; k++) {
            projects[k].style.backgroundColor = "#F2220D";
        }
    } else if (color === 'dark') {
        document.body.style.backgroundColor = '#1f2833'
        document.querySelector('#header').style.backgroundColor = '#1a212b';
        var projects = document.querySelectorAll('.project');
        var bg = document.querySelectorAll('.section:nth-child(2n)');
        var bars = document.querySelectorAll('.pbarfill');
        var j;
        for (j = 0; j < bars.length; j++) {
            bars[j].style.backgroundColor = 'rgb(7, 160, 45)';
            if (j < bg.length) {
                bg[j].style.backgroundColor = 'black';
            }
        }

        for (var k = 0; k < projects.length; k++) {
            projects[k].style.backgroundColor = "black";
        }
    } else if (color === 'green') {
        document.body.style.backgroundColor = '#0b7b25';
        document.querySelector('#header').style.backgroundColor = '#015235';
        var projects = document.querySelectorAll('.project');
        var bg = document.querySelectorAll('.section:nth-child(2n)');
        var bars = document.querySelectorAll('.pbarfill');
        var j;
        for (j = 0; j < bars.length; j++) {
            bars[j].style.backgroundColor = '#00abff';
            if (j < bg.length) {
                bg[j].style.backgroundColor = 'darkgreen';
            }
        }

        for (var k = 0; k < projects.length; k++) {
            projects[k].style.backgroundColor = "darkgreen";
        }
    }
}
