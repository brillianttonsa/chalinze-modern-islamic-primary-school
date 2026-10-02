import { Route, Routes, useNavigate } from 'react-router-dom'
import AcademicsPage from '../../pages/AcademicsPage'
import AdmissionsPage from '../../pages/AdmissionsPage'
import AboutPage from '../../pages/AboutPage'
import CareersPage from '../../pages/CareersPage'
import ContactPage from '../../pages/ContactPage'
import GalleryPage from '../../pages/GalleryPage'
import HomePage from '../../pages/HomePage'
import IslamicLifePage from '../../pages/IslamicLifePage'
import ResultsPage from '../../pages/ResultsPage'
import StudentLifePage from '../../pages/StudentLifePage'
import type { Tab } from './types'
import { routeForTab } from './routes'

export default function PageRouter({ onApply }: { onApply: () => void }) {
  const navigate = useNavigate()
  const onNavigate = (tab: Tab) => navigate(routeForTab[tab])
  return <Routes>
    <Route path="/" element={<HomePage onApply={onApply} onNavigate={onNavigate} />} />
    <Route path="/about" element={<AboutPage onNavigate={onNavigate} />} />
    <Route path="/academics" element={<AcademicsPage />} />
    <Route path="/admissions" element={<AdmissionsPage onApply={onApply} />} />
    <Route path="/results" element={<ResultsPage />} />
    <Route path="/islamic-life" element={<IslamicLifePage />} />
    <Route path="/careers" element={<CareersPage />} />
    <Route path="/student-life" element={<StudentLifePage />} />
    <Route path="/gallery" element={<GalleryPage />} />
    <Route path="/contact" element={<ContactPage />} />
    <Route path="*" element={<HomePage onApply={onApply} onNavigate={onNavigate} />} />
  </Routes>
}
