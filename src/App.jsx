import { Route, Routes } from 'react-router-dom'
import ErrorPage from './pages/error-pages/ErrorPage.jsx'
import Layout from './layout/Layout.jsx'
import Join from './pages/Auth/join/Join.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/join" element={<Join />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  )
}

export default App
