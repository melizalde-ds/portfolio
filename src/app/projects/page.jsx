import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Intro from "@/components/Intro/Intro";
import Project from "@/components/Project/Project";
import "./Projects.css";

export const metadata = {
  title: "Things I’ve made trying to put my dent in the universe.",
  description:
    "Welcome to my projects gallery! Here, you'll find a curated collection of my endeavors showcasing my skills and expertise in the realms of machine learning, artificial intelligence, software engineering, and beyond. Each project represents a journey of exploration, innovation, and problem-solving, reflecting my passion for leveraging technology to drive impactful solutions. From predictive modeling to natural language processing and software development, these projects offer a glimpse into my creative process, technical proficiency, and commitment to excellence. Join me on this journey as we explore the exciting world of technology through the lens of innovation and discovery.    ",
  projects: [
    {
      company: "Company",
      description: "Creating technology to empower civilians to explore space on their own terms.",
      link: "https://company.com",
    },
    {
      company: "Company",
      description: "Creating technology to empower civilians to explore space on their own terms.",
      link: "https://company.com",
    },
    {
      company: "Company",
      description: "Creating technology to empower civilians to explore space on their own terms.",
      link: "https://company.com",
    },
    {
      company: "Company",
      description: "Creating technology to empower civilians to explore space on their own terms.",
      link: "https://company.com",
    },
    {
      company: "Company",
      description: "Creating technology to empower civilians to explore space on their own terms.",
      link: "https://company.com",
    },
    {
      company: "Company",
      description: "Creating technology to empower civilians to explore space on their own terms.",
      link: "https://company.com",
    },
  ],
};

export default function Projects() {
  const projects = metadata.projects.map((project, index) => (
    <Project key={index} company={project.company} description={project.description} link={project.link} />
  ));
  return (
    <div id="page-wrapper">
      <Header />
      <div id="main-content">
        <Intro title={metadata.title} introduction={metadata.description} />
        <div id="projects">{projects}</div>
      </div>
      <Footer />
    </div>
  );
}
