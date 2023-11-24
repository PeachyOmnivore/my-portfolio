import LeftNav from "./Components/leftNav"
import Footer from "./Components/footer.jsx"
import { Routes, Route } from "react-router-dom"
import Home from "./Components/home.jsx"
import AboutMe from "./Components/about-me.jsx"
import Projects from "./Components/projects.jsx"
import EducationExperience from "./Components/education-experience.jsx"
import TechStack from "./Components/tech-stack.jsx"
import MessageMe from "./Components/message-me.jsx"
import Socials from "./Components/social-links.jsx"


function App() {
  

  return (
    <div className="main-app-grid">
      <LeftNav className="left-nav"/>
      <Socials className="header"/>
      <Footer />
      <Routes>
        <Route 
        path="/"
        element={<Home/>}
        />
        <Route 
        path="/about-me"
        element={<AboutMe/>}
        />
        <Route 
        path="/projects"
        element={<Projects/>}
        />
        <Route 
        path="/education-experience"
        element={<EducationExperience/>}
        />
        <Route 
        path="/tech-stack"
        element={<TechStack/>}
        />
        <Route 
        path="/message"
        element={<MessageMe/>}
        />
      </Routes>
    </div>
  )
}

export default App
