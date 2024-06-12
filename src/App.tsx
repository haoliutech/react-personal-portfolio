import Article from "./Components/Article.tsx";
import Footer from "./Components/Footer.tsx";
import Hero from "./Components/Hero.tsx";
import ProjectsDisplay from "./Components/ProjectsDisplay.tsx";
import Header from "./Components/Header.tsx";

function App() {
  return (
    <div className="bg-slate-50">
      <Article />
      <Header />
      <Hero />
      <ProjectsDisplay></ProjectsDisplay>
      <Footer></Footer>
    </div>
  );
}

export default App;
