import { Mail, Phone, Linkedin, Github } from "lucide-react";

export const PERSONAL_DATA = {
    name: "Daffa Farhan Raharja",
    location: "Sidoarjo, Jawa Timur",
    about: "Diving in Backend & System Design",
    summary:
        `
        I'm a fresh graduate from Airlangga University majoring in Information Systems, with a passion for backend development and building scalable systems. I've gained hands-on experience designing RESTful APIs, managing databases, and deploying applications on Google Cloud Platform. My core stack is Node.js (Express) and Laravel, with slight knowledge of Django and Python. Currently, I'm expanding my skills in Go and system design to better understand how to architect maintainable, production-grade systems. I'm eager to contribute to a team where I can continue learning from experienced engineers while delivering real impact.
        `,
    contact: {
        email: {
            address: "https://mailto:daffafarhan@gmail.com",
            icon: Mail,
        },
        phone: {
            number: "https://wa.me/6285790265029",
            icon: Phone,
        },
        social: [
            {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/daffa-farhan-raharja/",
                icon: Linkedin,
            },
            {
                name: "GitHub",
                url: "https://github.com/FarhanGits",
                icon: Github,
            },
        ],
    },
    education: {
        uni: "Universitas Airlangga",
        degree: "Bachelor of Information Systems",
        start: "Sep 2021",
        end: "Aug 2025",
    },
    skills: [
        "JavaScript/TypeScript",
        "PHP",
        "Python",
        "Node.js",
        "Express.js",
        "Laravel",
        "Django",
        "MySQL",
        "PostgreSQL",
        "Git",
        "Docker",
        "Postman"
    ],
};
