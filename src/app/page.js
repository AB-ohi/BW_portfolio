import About from "@/Component/About/About";
import Header from "@/Component/Header/Header";
import Skills from "@/Component/Skill/Skill";
const Home = () => {
  return <div className="mt-10">
    <Header/>
    <About/>
    <Skills/>
  </div>;
};

export default Home