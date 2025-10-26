import About from "@/Component/About/About";
import Header from "@/Component/Header/Header";
import Project from "@/Component/Project/Project";
import Skills from "@/Component/Skill/Skill";

const Home = () => {
  return (
    <div className="mt-24">
      <section id="home"><Header /></section>
      <section id="about" className="mt-32"><About /></section>
      <section id="skill" className="mt-20"><Skills /></section>
      <section id="project" className="mt-32"><Project/></section>
    </div>
  );
};

export default Home;