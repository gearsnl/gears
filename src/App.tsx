import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import { SiteHeader } from './components/SiteHeader'
import { Hero } from './components/Hero'
import { SectionActivities } from './components/SectionActivities'
import { SectionMembership } from './components/SectionMembership'
import { SectionContact } from './components/SectionContact'
import { SiteFooter } from './components/SiteFooter'
import { SectionAbout } from './components/SectionAbout'
import { SectionLogin } from './components/SectionLogin'

function App() {
  return (
    <div className="site">
      <SiteHeader />
      <main>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/activities" element={<SectionActivities />} />
          <Route path="/loginn" element={<SectionLogin />} />
          <Route path="/membership" element={<SectionMembership />} />
          <Route path="/contact" element={<SectionContact />} />
          <Route path="/about" element={<SectionAbout />} />
          <Route path="*" element={<Navigate to="/" replace />} />
          
        </Routes>
      </main>
      <SiteFooter />
    </div>
  )
}

export default App
