import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { NamePage } from './pages/NamePage'
import { Q2Page } from './pages/Q2Page'
import { Q3Page } from './pages/Q3Page'
import { Q4Page } from './pages/Q4Page'
import { AnswersPage } from './pages/AnswersPage'
import { Answer2Page } from './pages/Answer2Page'
import { Answer3Page } from './pages/Answer3Page'
import { Answer4Page } from './pages/Answer4Page'
import { EndPage } from './pages/EndPage'

export default function App() {
  const location = useLocation()

  return (
    <div key={location.pathname} className="page-dissolve">
      <Routes location={location}>
        <Route path="/" element={<HomePage />} />
        <Route path="/name" element={<NamePage />} />
        <Route path="/q2" element={<Q2Page />} />
        <Route path="/q3" element={<Q3Page />} />
        <Route path="/q4" element={<Q4Page />} />
        <Route path="/answer2" element={<Answer2Page />} />
        <Route path="/answer3" element={<Answer3Page />} />
        <Route path="/answer4" element={<Answer4Page />} />
        <Route path="/answers" element={<AnswersPage />} />
        <Route path="/end" element={<EndPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  )
}
