import './App.css'
import AboutMe from './components/AboutMe/AboutMe'
import CloudStack from './components/TechStack/CloudStack'
import DatabaseStack from './components/TechStack/DatabaseStack'
import FrameworksStack from './components/TechStack/FrameworksStack'
import LanguageStack from './components/TechStack/LanguageStack'
import Languages from './components/Languages/Languages'
import Header from './components/Header/header'
import Experience from './components/Experience/Experience'
import Goals from './components/Goals/Goals'
import ContactBar from './components/ContactBar/ContactBar'

function App() {

  return (
    <>
      <Header/>
      <ContactBar/>
      <AboutMe/>
      <LanguageStack/>
      <FrameworksStack/>    
      <DatabaseStack/>
      <CloudStack/>
      <Languages/>
      <Experience/>
      <Goals/>  
    </>
  )
}

export default App
