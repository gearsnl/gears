import './App.css'
import { SiteHeader } from './components/SiteHeader'
import { Hero } from './components/Hero'
import { SectionAbout } from './components/SectionAbout'
import { SectionActivities } from './components/SectionActivities'
import { SectionEvents } from './components/SectionEvents'
import { SectionMembership } from './components/SectionMembership'
import { SectionContact } from './components/SectionContact'
import { SiteFooter } from './components/SiteFooter'

function App() {
  return (
    <div className="site">
      <SiteHeader />
      <main>
        <Hero />
        {// <SectionAbout />
        //<SectionActivities />
        //<SectionEvents /> 
        // <SectionMembership />
        }
        <SectionContact />
      </main>
      <SiteFooter />
    </div>
  )
}

export default App
