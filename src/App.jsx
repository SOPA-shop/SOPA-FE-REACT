import { Route, Routes } from 'react-router-dom'
import ErrorPage from './pages/error-pages/ErrorPage.jsx'
import Layout from './layout/Layout.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}></Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  )
}

export default App
