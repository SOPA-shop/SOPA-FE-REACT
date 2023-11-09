import './Footer.scss';
import logo from '../../assets/image/Logo.svg';
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
          <Col className="footer__wraper">
            <div className="footer__logo">
              <div className="footer__logo__wraper">
                <img
                  className="footer__logo__wraper__img"
                  src={logo}
                  alt="iconLogo"
                />
              </div>
              <p className="footer__logo__title">
                Stay informed about Sopa with our latest releases and founder
                news.
              </p>
              <button className="footer__logo__btn">
                Enter email here for updates
              </button>
            </div>
          </Col>
          <div className="footer__col__wrap">
            {dataFooter.map((item, index) => {
              return (
                <Col className="footer__col" key={index}>
                  <div className="footer__col__items">
                    <h3 className="footer__col__items__title">{item.title}</h3>
                    <ul className="footer__col__items__list">
                      {item.list.map((item, indexItem) => {
                        return (
                          <li className="footer__col__items__list__item" key={indexItem}>
                            <Link className="footer__col__items__list__item__link" to="#">
                              {item}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </Col>
              )
            })}
            <Col className="footer__contact">
              <ul className="footer__contact__list">
                <li className="footer__contact__list__li">
                  <Link className="footer__contact__list__li__link" to="#">
                    <img
                      className="footer__contact__list__li__link__img"
                      src={logoTwitter}
                      alt="twitter"
                    />
                    <span>Twitter</span>
                  </Link>
                </li>
                <li className="footer__contact__list__li">
                  <Link className="footer__contact__list__li__link" to="#">
                    <img
                      className="footer__contact__list__li__link__img"
                      src={logoInstagram}
                      alt="instagram"
                    />
                    <span>Instagram</span>
                  </Link>
                </li>
                <li className="footer__contact__list__li">
                  <Link className="footer__contact__list__li__link" to="#">
                    <img
                      className="footer__contact__list__li__link__img"
                      src={logoFacebook}
                      alt="facebook"
                    />
                    <span>Facebook</span>
                  </Link>
                </li>
              </ul>
            </Col>
          </div>
        </Row>
      </Grid>
    </div>
  );
}
const dataFooter = [
  {
    title: 'Product',
    list: [
      'Model 000',
      'Model 001',
      'Laces',
      'Masks',
      'No-show Socks',
      'Crew Socks',
      'Gift Cards'
    ]
  },
  {
    title: 'Support',
    list: [
      'Help Center',
      'FAQs',
      'Order',
      'Order Status',
      'Returns & Exchanges',
      'Contact Us'
    ]
  },
  {
    title: 'Everything Else',
    list: [
      'Community',
      'Why Sopa',
      'About',
      'Discount Program',
      'Sopa Blog',
      'Sopa Ambassador'
    ]
  }
]
