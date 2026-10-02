import { useEffect, useState } from 'react'
import { BrowserRouter, useLocation } from 'react-router-dom'
import ApplicationModal from './components/ApplicationModal'
import AnnouncementBar from './components/common/AnnouncementBar'
import Header from './components/common/Header'
import PageRouter from './components/common/PageRouter'
import Footer from './components/common/Footer'

export default function Website() {
  const [applicationModalOpen, setApplicationModalOpen] = useState(false)
  const openApplication = () => setApplicationModalOpen(true)

  return (
  <BrowserRouter><ScrollToTop /><div className="min-h-screen bg-[#FDFBF7] text-[#1D2A24] font-sans antialiased selection:bg-[#1E4D3A] selection:text-white">
    <AnnouncementBar onApply={openApplication} />
    <Header onApply={openApplication} />
    <main>
        <PageRouter onApply={openApplication} />
    </main>
    {applicationModalOpen && <ApplicationModal onClose={() => setApplicationModalOpen(false)} />}
    <Footer />
  </div></BrowserRouter>)
}

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }, [pathname])
  return null
}
