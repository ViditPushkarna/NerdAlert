import AboutPage from '@/routes/about'
import ContactPage from '@/routes/contact'
import FaqsPage from '@/routes/faqs'
import HomePage from '@/routes/home'
import SupportPage from '@/routes/support'
import SignIn from '@/routes/signin.jsx'
import SignUp from '@/routes/signup.jsx'
import Verify from '@/routes/verifyEmail.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { ScrollToTop } from './components/scroll-to-top'

export default function App() {
  /**
   * Vite exposes env variables on the special import.meta.env object.
   * Basename needs to be set for GitHub Pages to function properly.
   *
   * @link https://vitejs.dev/guide/env-and-mode.html
   */
  const basename = import.meta.env.BASE_URL

  return (
    <BrowserRouter basename={basename}>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="faqs" element={<FaqsPage />} />
          <Route path="support" element={<SupportPage />} />
          <Route path="login" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="/verify/:tokenKey" element={<Verify />} />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  )
}
