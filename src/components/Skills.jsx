import React from "react";
import "../styles/components/Skills.css";

const skills = [
    "JavaScript",
    "React",
    "HTML & CSS",
    "Node.js",
    "Express",
    "MongoDB",
    "Java",
    "Django",
    "Git",
];

const Skills = () => {
    return (
        <section id="skills" className="skills">
            <div className="container">
                <h2>Technical Skills</h2>
                <ul className="skills-list">
                    {skills.map((skill, index) => (
                        <li key={index} className="skill">{skill}</li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Skills;
