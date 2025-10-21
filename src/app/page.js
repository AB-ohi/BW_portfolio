import About from "@/Component/About/About";
import Header from "@/Component/Header/Header";
import Skills from "@/Component/Skill/Skill";

const Home = () => {
  return (
    <div className="mt-24">
      <section id="home"><Header /></section>
      <section id="about" className="mt-32"><About /></section>
      <section id="skill" className="mt-32"><Skills /></section>
      <section id="project" className="mt-32 text-center text-3xl text-purple-400 font-bold">My Project Section</section>
    </div>
  );
};

export default Home;
