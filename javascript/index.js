'use strict';

const projects = [
    {
        title: 'MUSIC FIESTA',
        url: 'spotifyapi.html',
        githubUrl: 'https://github.com/EmileKost/SpotifyApi',
        imgUrl: 'assets/mockups/music-fiesta.png'
    },
    {
        title: 'SPACEX',
        url: 'spacex.html',
        githubUrl: 'https://github.com/EmileKost/SpaceX_EmileKost',
        imgUrl: 'assets/mockups/Spacex.png'
    },
    {
        title: 'NASA SPACEQUIZ',
        url: 'nasa.html',
        githubUrl: 'https://github.com/EmileKost/NASA_SpaceQuiz',
        imgUrl: 'assets/mockups/nasa.png'
    },
    {
        title: 'RIJKS ART SERVER',
        url: 'rijks.html',
        githubUrl: 'https://github.com/EmileKost/RijksServer_EmileKost',
        imgUrl: 'assets/mockups/Rijks.png'
    },
    {
        title: 'TODO APPLICATION',
        url: 'todo.html',
        githubUrl: 'https://github.com/EmileKost/ToDo',
        imgUrl: 'assets/mockups/todo.png'
    },
    {
        title: 'DISCOVER',
        url: 'discover.html',
        githubUrl: 'https://github.com/EmileKost/Discover',
        imgUrl: 'assets/mockups/discover.png'
    },
    {
        title: 'TESLA',
        url: 'tesla.html',
        githubUrl: 'https://github.com/EmileKost/Tesla_Remake',
        imgUrl: 'assets/mockups/Tesla.png'
    },
]

const skillItems = [
    {
        title: 'HTML',
        value: 'html',
        description: 'I learned to write good semantic HTML with user accessibility in mind to use as less divs as possible',
        skillIndex: 1
    },
    {
        title: 'CSS',
        value: 'css',
        description: `I love to create smooth lay-outs and experiment with animations and responsive design.`,
        skillIndex: 2
    },
    {
        title: 'Javascript',
        value: 'javascript',
        description: `Javascript is my first ever programming language what really got me interested in development. I have learned to write reusable and readable code but also to think logically.`,
        skillIndex: 3
    },
    {
        title: 'Nodejs',
        value: 'nodejs',
        description: 'With Node I learned a lot about server-side rendering, EJS and the middleware Express to set up a server and render my webpage on this server.',
        skillIndex: 4
    },
    {
        title: 'Tailwind',
        value: 'tailwind',
        description: `At my first ever internship I learned how to use tailwind for a faster development process.`,
        skillIndex: 5
    }
]

// Custom cursor event
let cursor = document.querySelector('.cursor');
const moveCursor = (event) => {
    const mouseY = event.clientY;
    const mouseX = event.clientX;
    cursor.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
}

// Navigate to sectiom
let menuItems = document.querySelectorAll('.menu-item');
let phoneMenuItems = document.querySelectorAll('.phone-menu-item');
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        scrollSectionInSight(item.value);
    })
})

phoneMenuItems.forEach(item => {
    item.addEventListener('click', () => {
        toggleMenu();
        setTimeout(() => {
            scrollSectionInSight(item.value);
        }, 500)
    })
})

function scrollSectionInSight(value) {
    let scrollItem = document.getElementById(`${value}`);
    scrollItem.scrollIntoView({
        behavior: 'smooth'
    });
}

const introLink = document.querySelector('header h4');
introLink.addEventListener('click', () => {
    scrollSectionInSight('intro');
})

// Change text on hover event
function toggleMenu() {
    let menu = document.querySelector('.menu');
    menu.classList.toggle('hide');
    setTimeout(() => {
        const closeBtn = document.querySelector('#close-menu');
        closeBtn.classList.toggle('close');
    }, 200)
}

// Observe ABOUTME
const closeBtn = document.querySelector('.menu-btn');
const aboutMeSection = document.querySelector('#aboutme');
const introSection = document.querySelector('#intro')
const aboutmeObserver = new IntersectionObserver(entries => {
    let menuItems = document.querySelectorAll('.menu-item');
    let myName = document.querySelector('header h4');
    if(entries[0].isIntersecting) {
        menuItems.forEach(item => {
            item.classList.add('white');
        })
        myName.classList.add('white');
        cursor.classList.add('white-bg');
        closeBtn.classList.add('white-btn');
    } else {
        menuItems.forEach(item => {
            item.classList.remove('white');
        })
        myName.classList.remove('white');
        cursor.classList.remove('white-bg');
        closeBtn.classList.remove('white-btn');
    }
}, 
{threshold: .95128})
aboutmeObserver.observe(aboutMeSection)


// Observe SKILLS
const skillsSection = document.querySelector('#skills');
const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            document.querySelector('.turn-blue').classList.add('blue');
        }
    })
}, {threshold: .95});

skillsObserver.observe(skillsSection)

// Skill list
let skillsList = document.querySelector('.skills-list');
function renderSkillList() {
    skillsList.innerHTML = '';
    skillItems.forEach(skill => {
        skillsList.insertAdjacentHTML('beforeend',
            `
                <li class="skill-item">
                    <button value=${skill.value} class="skill-btn">
                    <span>0${skill.skillIndex}</span>
                    ${skill.title}
                    </button>
                </li>
            `)
    })
}

renderSkillList()

// - Switch the button value
let skillText = document.getElementById('skill-text');
let skillsListItems = document.querySelectorAll('.skill-btn');

skillsListItems[0].classList.add('blue');
skillText.textContent = skillItems[0].description;

for(let i = 0; i < skillsListItems.length; i++) {
    skillsListItems[i].addEventListener('click', () => {
        skillsListItems.forEach(item => {
            item.classList.remove('blue');
            skillText.textContent = '';
        })

        skillsListItems[i].classList.toggle('blue');
        skillText.textContent = skillItems[i].description;
    })
}


// Render projects
const projectsList = document.querySelector('#projects-list');
function renderProjects() {
    projectsList.innerHTML = '';
    projects.forEach(project => {
        projectsList.insertAdjacentHTML('beforeend',
            `
            <li class="project-item">
            <a href=${project.url}>
                <figure>
                 <img src=${project.imgUrl} alt="project mockup">
                </figure>
                <h2>${project.title}</h2>
                </a>
            </li>
            `
        )
    })
}

renderProjects();

const moveLeftBtn = document.getElementById('move-left');
const moveRightBtn = document.getElementById('move-right');


function moveLeft() {
    projectsList.scrollBy({
        left: 280,
        right: 0,
        behavior: 'smooth'
    })
}

function moveRight() {
    projectsList.scrollBy({
        left: -280,
        behavior: 'smooth'
    })
}

moveLeftBtn.addEventListener('click', moveLeft);
moveRightBtn.addEventListener('click', moveRight);
document.addEventListener('keydown', (e) => {
    if(e.key === 'ArrowLeft') {
        moveLeft();
    } else if(e.key === 'ArrowRight') {
        moveRight();
    }
})

// Observe contact
const contactSection = document.getElementById('contact');
const contactObserver = new IntersectionObserver(entries => {
    let menuItems = document.querySelectorAll('.menu-item');
    let myName = document.querySelector('header h4');
    if(entries[0].isIntersecting) {
        console.log('intersecting')
        menuItems.forEach(item => {
            item.classList.remove('blue')
            myName.classList.remove('blue')
            item.classList.add('white')
            myName.classList.add('white')
        })
        cursor.classList.add('white-bg')
        closeBtn.classList.add('white-btn');
    } else {
        menuItems.forEach(item => {
            item.classList.remove('white')
            myName.classList.remove('white')
    })
        cursor.classList.remove('white-bg')
        closeBtn.classList.remove('white-btn');
    }
}, {threshold: .95})
contactObserver.observe(contactSection)

// FLY BACK UP FUNCTION
const flyUpBtn = document.getElementById('fly-up');
const intro = document.getElementById('intro');
flyUpBtn.addEventListener('click', () => {
    intro.scrollIntoView({
        behavior: 'smooth'
    })
})

// EVENT LISTNERS
const myselfFigure = document.querySelector('#me-image');
let myselfText = document.querySelector('.myself-text');

myselfFigure.addEventListener('mouseover', (event) => {
    myselfText.textContent = 'YEP, THIS IS ME'
});

myselfFigure.addEventListener('mouseleave', (event) => {
        myselfText.textContent = `PS, YES I'AM A NERD`;
})

window.addEventListener('mousemove', moveCursor);

const menuEventButtons = document.querySelectorAll('.menu-btn-event');
menuEventButtons.forEach((button) => {
    button.addEventListener('click', toggleMenu);
})

