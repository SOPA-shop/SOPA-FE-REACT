import { Outlet } from 'react-router-dom'
import Header from './header/Header'
import Footer from './footer/Footer.jsx'

const Layout = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
      }}
    >
      <Header />
      <main
        style={{
          flex: '1 1 0',
          marginTop: '128px',
          width: '1172px',
          margin: '128px auto 0 auto',
        }}
      >
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
export default Layout
