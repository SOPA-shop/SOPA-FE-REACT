import { Link } from 'react-router-dom'
import ic_user from '/src/assets/image/icons/ic_user.svg'
import ic_cart from '/src/assets/image/icons/ic_cart.svg'
import './Header.scss'

export default function Header() {
  return (
    <div className="header">
      <div className="hero-banner">Free US shipping on order $80+</div>
      <div className="nav-header">
        <Link to="/" className="logo-brand" />
        <nav className="navigation__menu">
          <Link to="/" className="navigation__menu__item">
            Men
          </Link>
          <Link to="/" className="navigation__menu__item">
            Women
          </Link>
          <Link to="/" className="navigation__menu__item">
            Accessories
          </Link>
          <Link to="/" className="navigation__menu__item">
            About
          </Link>
          <Link to="/" className="navigation__menu__item">
            <div className="navigation__menu__item__quiz">Shoe Finder Quiz</div>
          </Link>
        </nav>
        <div className="navigation__user">
          <Link to="/" className="navigation__user__text">
            Support
          </Link>
          <Link to="/" className="navigation__user__user">
            <img className="navigation__icon" src={ic_user} alt="" />
          </Link>
          <Link to="/" className="navigation__user__cart">
            <img className="navigation__icon" src={ic_cart} alt="" />
          </Link>
        </div>
      </div>
    </div>
  )
}
