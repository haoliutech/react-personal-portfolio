import Article from './Components/Article.tsx'
import Footer from './Components/Footer.tsx'
import Hero from './Components/Hero.tsx'
import Contact from './Components/Contact.tsx'
import ProjectsDisplay from './Components/ProjectsDisplay.tsx'
import Header from './Components/Header.tsx'

function App() {

  return (
    <> 
      <Article/>
      <Header/>
      <Hero/>
      <ProjectsDisplay></ProjectsDisplay>
      
      <Contact></Contact>
      
      <Footer></Footer>
    </>
  )
}

export default App
