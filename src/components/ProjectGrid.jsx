import React from "react";
import ProjectCard from "./ProjectCard";
import "../styles/components/ProjectCard.css";

const projects = [
    {
        title: "Mini Facebook",
        description: "A social media platform built using Django.",
        githubLink: "https://github.com/yourusername/minifacebook",
    },
    {
        title: "Chess AI",
        description: "A chess-playing agent using Alpha-Beta pruning.",
        githubLink: "https://github.com/yourusername/chessai",
    },
    {
        title: "Carbon Footprint Calculator",
        description: "A web app to calculate transportation footprints.",
        githubLink: "https://github.com/yourusername/carbon-footprint",
    },
];

const ProjectGrid = () => {
    return (
        <section id="projects" className="projects">
            <div className="container">
                <h2>Projects</h2>
                <div className="project-grid">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            title={project.title}
                            description={project.description}
                            githubLink={project.githubLink}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectGrid;
