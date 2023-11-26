import { Route, Routes } from 'react-router-dom';
import ErrorPage from './pages/error-pages/ErrorPage.jsx';
import Layout from './layout/Layout.jsx';
import Join from './pages/Auth/Join.jsx';
import VerifyEmail from './pages/Auth/VerifyEmail.jsx';
import ForgotPassword from './pages/Auth/ForgotPassword.jsx';
import ChangeEmail from './pages/Auth/ChangeEmail.jsx';
import NewPassword from './pages/Auth/NewPassword.jsx';
import Login from './pages/Auth/Login.jsx';
import { LoadingProvider } from './containts/context/LoadingProvider.jsx';

function App() {
  return (
    <LoadingProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="new-password" element={<NewPassword />} />
          <Route path="/verify-email" element={<VerifyEmail />} />
          <Route path="/change-email" element={<ChangeEmail />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </LoadingProvider>
  );
}

export default App;
