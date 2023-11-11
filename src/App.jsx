import { Route, Routes } from 'react-router-dom';
import ErrorPage from './pages/error-pages/ErrorPage.jsx';
import Layout from './layout/Layout.jsx';
import Join from './pages/Auth/Join.jsx';
import VerifyEmail from './pages/Auth/VerifyEmail.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/join" element={<Join />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
