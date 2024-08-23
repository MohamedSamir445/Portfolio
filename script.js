/* ----------------------------------------------VARIABLES----------------------------------------- */
let pageStart = true;
let blueTheme = true;
const header = document.getElementsByClassName("header")[0];
const logoSrc = document.getElementById("logoSrc");

const nav = document.getElementsByClassName("navigation")[0];
const navLinks = nav.querySelectorAll("ul a");

const sectionTitleRule = document.querySelectorAll(".container-title");

const cards = document.querySelectorAll('.card');
const cardHeaders = document.querySelectorAll('.projects .content .card h5');

const websiteSrcRule = document.querySelector('.websiteCode');

const skillBarRule = document.querySelectorAll('.skill-bar');
const skillLevelRule = document.querySelectorAll('.skill-level');
var skillLevel;

const navIndicator = document.querySelector(".indicator");

const sections = document.querySelectorAll('section');
const bodyTag = document.getElementsByTagName('body')[0];
const windowHeight = window.innerHeight;

var webSiteCodeSrc = document.head.appendChild(document.createElement("style"));
var AfterSectionTitle = document.head.appendChild(document.createElement("style"));
var contactFormBtn = document.head.appendChild(document.createElement("style"));
var pageHint = document.head.appendChild(document.createElement("style"));
var cardAction = document.head.appendChild(document.createElement("style"));

const contactForm = document.getElementById('contact-form');
const form_name = document.getElementById('uName');
const form_email = document.getElementById('uEmail');;
const form_message = document.getElementById('uMessage');

var navHoverBackground = document.getElementsByClassName('navHoverBackground')[0];
/* -------------------------------------------VARIABLES----------------------------------------- */

// ARRAY OF SKILLS AND THEIR LEVELS
const skills = [	
	{ name: "Docker", level: 90 },
	{ name: "Kubernetes", level: 85 },
	{ name: "AWS", level: 80 },
	{ name: "Terraform", level: 75 },
	{ name: "Jenkins", level: 85 },
	{ name: "Ansible", level: 75 },
	{ name: "Python", level: 95 },
	{ name: "Linux", level: 90 },
	{ name: "Git", level: 85 },
	{ name: "Windows Server", level: 75 },
	{ name: "Networking", level: 75 },
	{ name: "Monitoring", level: 80 },
	{ name: "CI/CD", level: 80 },
	{ name: "helm", level: 90 }
];

// TYPING TEXT 
var type = new Typed(".changing_text", {
	strings: [
		"DevOps Engineer",
		"Cloud Architect",
		"Automation Specialist",
		"Monitoring Specialist",
	],
	startDelay: 1000,
	typeSpeed: 60,
	backSpeed: 20,
	backDelay: 1400,
	loop: true,
	cursorChar: "_",
});

// Function to add skills to the DOM
function addSkillsToDOM() {
    const skillsContainer = document.getElementById('skills-container');
    
    skills.forEach(skill => {
        const skillElement = document.createElement('div');
        skillElement.className = 'skill';
        
        skillElement.innerHTML = `
            <div class="skill-name">${skill.name}</div>
            <div class="skill-bar">
                <div class="skill-level" style="width: 0%"></div>
            </div>
        `;
        
        skillsContainer.appendChild(skillElement);
        
        // Trigger reflow to enable animation
        setTimeout(() => {
            skillElement.querySelector('.skill-level').style.width = `${skill.level}%`;
        }, 100);
    });
}

// Call the function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', addSkillsToDOM);