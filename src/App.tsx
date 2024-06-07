import Article from './Components/Article.tsx'
import Footer from './Components/Footer.tsx'
import Hero from './Components/Hero.tsx'
import ProjectsDisplay from './Components/ProjectsDisplay.tsx'
import Header from './Components/Header.tsx'
import ContactForm from './Components/ContactForm.tsx'

function App() {

  return (
    <> 
      <Article/>
      <Header/>
      <Hero/>
      <ProjectsDisplay></ProjectsDisplay>
      <ContactForm></ContactForm>
      <Footer></Footer>
    </>
  )
}

export default App
