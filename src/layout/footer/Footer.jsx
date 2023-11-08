import './Footer.scss';
import logo from '../../assets/image/logo.svg';
import logoInstagram from '../../assets/image/instagram.svg';
import logoFacebook from '../../assets/image/facebook.svg';
import logoTwitter from '../../assets/image/twitter.svg';
import { Col, Grid, Row } from 'rsuite';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className="footer">
      <Grid fluid>
        <Row className="footer__container">
          <Col xs={16} className="footer__logo">
            <div className="footer__logo__wraper">
              <img className='footer__logo__wraper__img'
                src={logo} alt="iconLogo" />
            </div>
            <p className='footer__logo__title'>
              Stay informed about Sopa with our
              latest releases and founder news.
            </p>
            <button className='footer__logo__btn'>
              Enter email here for updates</button>
          </Col>
          <Col xs={2} className="footer__col">
            <div className="footer__col__items">
              <h3 className='footer__col__items__title'>Product</h3>
              <ul className='footer__col__items__list'>
                <li className='footer__col__items__list__item'>
                  <Link
                    className='footer__col__items__list__item__link'
                    to="#"
                  >
                    Model 000
                  </Link>
                </li>
                <li className='footer__col__items__list__item'>
                  <Link className='footer__col__items__list__item__link' to="#">
                    Model 001
                  </Link>
                </li>
                <li className='footer__col__items__list__item'>
                  <Link className='footer__col__items__list__item__link' to="#">
                    Laces
                  </Link>
                </li>
                <li className='footer__col__items__list__item'>
                  <Link className='footer__col__items__list__item__link' to="#">
                    Masks
                  </Link>
                </li>
                <li className='footer__col__items__list__item'>
                  <Link className='footer__col__items__list__item__link' to="#">
                    No-show Socks
                  </Link>
                </li>
                <li className='footer__col__items__list__item'>
                  <Link className='footer__col__items__list__item__link' to="#">
                    Crew Socks
                  </Link>
                </li>
                <li className='footer__col__items__list__item'>
                  <Link
                    className='footer__col__items__list__item__link'
                    to="#">Gift Cards</Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col xs={2} className="footer__col">
            <div className="footer__col__items">
              <h3 className='footer__col__items__title'>Support</h3>
              <ul className='footer__col__items__list'>
                <li className='footer__col__items__list__item'>
                  <Link className='footer__col__items__list__item__link' to="#">
                    Help Center
                  </Link>
                </li>
                <li className='footer__col__items__list__item'>
                  <Link className='footer__col__items__list__item__link' to="#">
                    FAQs
                  </Link>
                </li>
                <li className='footer__col__items__list__item'>
                  <Link className='footer__col__items__list__item__link' to="#">
                    Order
                  </Link>
                </li>
                <li className='footer__col__items__list__item'>
                  <Link className='footer__col__items__list__item__link' to="#">Order Status</Link>
                </li>
                <li className='footer__col__items__list__item'>
                  <Link className='footer__col__items__list__item__link' to="#">
                    Returns & Exchanges</Link>
                </li>
                <li className='footer__col__items__list__item'>
                  <Link className='footer__col__items__list__item__link' to="#">Contact Us</Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col xs={2} className="footer__col">
            <div className="footer__col__items">
              <h3 className='footer__col__items__title'>Everything Else</h3>
              <ul className='footer__col__items__list'>
                <li className='footer__col__items__list__item'>
                  <Link className='footer__col__items__list__item__link' to="#">Community</Link>
                </li>
                <li className='footer__col__items__list__item'>
                  <Link className='footer__col__items__list__item__link' to="#">Why Sopa</Link>
                </li>
                <li className='footer__col__items__list__item'>
                  <Link className='footer__col__items__list__item__link' to="#">About</Link>
                </li>
                <li className='footer__col__items__list__item'>
                  <Link className='footer__col__items__list__item__link' to="#">
                    Discount Program
                  </Link>
                </li>
                <li className='footer__col__items__list__item'>
                  <Link className='footer__col__items__list__item__link' to="#">Sopa Blog</Link>
                </li>
                <li className='footer__col__items__list__item'>
                  <Link className='footer__col__items__list__item__link' to="#">
                    Sopa Ambassadors</Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col xs={2} className="footer__contact">
            <ul className='footer__contact__list'>
              <li className="footer__contact__list__li">
                <Link className="footer__contact__list__li__link" to="#">
                  <img
                    className='footer__contact__list__li__link__img'
                    src={logoTwitter} alt="twitter" />
                  <span>Twitter</span>
                </Link>
              </li>
              <li className='footer__contact__list__li'>
                <Link className="footer__contact__list__li__link" to="#">
                  <img
                    className='footer__contact__list__li__link__img'
                    src={logoInstagram}
                    alt="instagram" />
                  <span>Instagram</span>
                </Link>
              </li>
              <li className='footer__contact__list__li'>
                <Link className="footer__contact__list__li__link" to="#">
                  <img
                    className='footer__contact__list__li__link__img'
                    src={logoFacebook}
                    alt="facebook" />
                  <span>Facebook</span>
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Grid>
    </div>
  )
}
