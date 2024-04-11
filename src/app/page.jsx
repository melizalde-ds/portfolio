import Header from "@/components/Header/Header";
import Intro from "@/components/Introduction/intro";
import ArticleCard from "@/components/ArticleCard/ArticleCard";
import SignupWidget from "@/components/SignupWidget/SignupWidget";
import WorkWidget from "@/components/WorkedWidget/WorkedWidget";
import SkillsWidget from "@/components/SkillsWidget/SkillsWidget";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "Portfolio - Home",
  description: "Home page of my portfolio.",
};

const articles = [
  {
    date: "April 10, 2024",
    title: "Mastering Data Pipelines: ELT with Python",
    content:
      "Unlock the power of data pipelines with Python as we explore the Extract, Load, Transform (ELT) process. Discover how Python libraries like pandas and SQLAlchemy streamline data extraction from various sources, loading it into a target destination, and transforming it to meet your analysis needs. From data warehousing to real-time analytics, learn how ELT empowers businesses to harness the full potential of their data. Whether you're a data engineer, analyst, or enthusiast, this article provides a practical guide to building robust ELT pipelines with Python.",
  },
  {
    date: "April 5, 2024",
    title: "Demystifying Computer Vision: A Snapshot of Visual Intelligence",
    content:
      "Dive into the world of computer vision, where images and videos come alive with meaning. Explore the basics of algorithms and deep learning models powering visual recognition systems. From autonomous vehicles to healthcare, uncover how computer vision is reshaping industries. Whether you're a tech enthusiast or a curious mind, join us for a quick tour of this fascinating field.",
  },
  {
    date: "March 29, 2024",
    title: "My Journey in AI & ML: From Passion to Portfolio",
    content:
      "Join me as I share my personal journey in the world of artificial intelligence and machine learning. From my earliest experiments to building a robust portfolio of AI projects, I offer insights, lessons learned, and tips for aspiring AI enthusiasts.",
    link: "#",
  },
];

const intro = {
  image: "profile.jpeg",
  title: "AI Unboxed: Miguel Elizalde's AI & ML Expedition",
  introduction:
    "Hey there! I'm Miguel, and I'm excited to have you here in my digital space dedicated to artificial intelligence and machine learning. Within these pages, you'll find a curated selection of my adventures in AI, from predicting the future to understanding human language. Each project represents not just my skills but also my passion for exploring the endless possibilities of AI and ML. So, buckle up and join me on this journey. Let's dive into the thrilling world of AI together!",
  linkedIn_link: "https://www.linkedin.com/in/miguelelizaldecruz/",
  x_link: "https://www.twitter.com",
  github_link: "https://www.github.com/melizalde-ds",
};

const skills = [
  { name: "Python", proficiency: 80, icon: "python.png" },
  { name: "TensorFlow", proficiency: 50, icon: "tensorflow.png" },
  { name: "JavaScript", proficiency: 60, icon: "javascript.png" },
];

export default function Home() {
  return (
    <div id="page-wrapper">
      <Header />
      <Intro
        image={intro.image}
        title={intro.title}
        introduction={intro.introduction}
        linkedIn_link={intro.linkedIn_link}
        x_link={intro.x_link}
        github_link={intro.github_link}
      />
      <div className="content-wrapper">
        <div id="main-content">
          {articles.map((article, index) => (
            <ArticleCard
              key={index}
              date={article.date}
              title={article.title}
              content={article.content}
              link={article.link}
            />
          ))}
        </div>

        <div id="main_right">
          <SignupWidget
            title={"Stay up to date"}
            content={
              "Get notified when I publish something new, and unsubscribe at any time."
            }
          />
          <WorkWidget
            title={"Work"}
            content={"My work experience."}
            experiences={[
              {
                logo: "kaaktek.png",
                organization: "KaakTek",
                jobTitle: "Founder and CEO",
                startYear: 2024,
                endYear: null,
              },
              {
                logo: "ensign_college.png",
                organization: "Ensign College",
                jobTitle: "Data Scientist",
                startYear: 2023,
                endYear: 2024,
              },
              {
                logo: "cg-consultores-juridicos.png",
                organization: "Consultores Juridicos Cruz",
                jobTitle: "Software Engineer & Data Scientist",
                startYear: 2020,
                endYear: 2023,
              },
            ]}
          />
          <SkillsWidget
            title={"Skills"}
            content={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi."
            }
            skills={skills}
          />
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
