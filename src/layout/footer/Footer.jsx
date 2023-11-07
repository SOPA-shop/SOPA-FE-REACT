import './style.scss';
import logo from '../../assets/image/logo.svg';
import logoInstagram from '../../assets/image/instagram.svg';
import logoFacebook from '../../assets/image/facebook.svg';
import logoTwitter from '../../assets/image/twitter.svg';
import { Col, Grid, Row } from 'rsuite';

export default function Footer() {
  return (
    <div className="footer">
      <Grid fluid>
        <Row className="wrap_footer">
          <Col xs={16} className="col_logo col_footer">
            <div className="wrap__logo">
              <img className='col_footerImg' src={logo} alt="iconLogo" />
            </div>
            <p className='col_logoTitle'>
              Stay informed about Sopa with our
              latest releases and founder news.
            </p>
            <button>Enter email here for updates</button>
          </Col>
          <Col xs={2} className="col_footer">
            <div className="col_footerItems">
              <h3 className='col_footerItemsTitle'>Product</h3>
              <ul className='col_footerItemsList'>
                <li className='col_footerItem'>
                  <a className='col_footerItemLink' href="">Model 000</a></li>
                <li className='col_footerItem'>
                  <a className='col_footerItemLink' href="">Model 001</a></li>
                <li className='col_footerItem'>
                  <a className='col_footerItemLink' href="">Laces</a></li>
                <li className='col_footerItem'>
                  <a className='col_footerItemLink' href="">Masks</a></li>
                <li className='col_footerItem'>
                  <a className='col_footerItemLink' href="">
                    No-show Socks
                  </a>
                </li>
                <li className='col_footerItem'>
                  <a className='col_footerItemLink' href="">Crew Socks</a>
                </li>
                <li className='col_footerItem'>
                  <a
                    className='col_footerItemLink'
                    href="">Gift Cards</a>
                </li>
              </ul>
            </div>
          </Col>
          <Col xs={2} className="col_footer">
            <div className="col_footerItems">
              <h3 className='col_footerItemsTitle'>Support</h3>
              <ul className='col_footerItemsList'>
                <li className='col_footerItem'>
                  <a className='col_footerItemLink' href="">Help Center</a>
                </li>
                <li className='col_footerItem'>
                  <a className='col_footerItemLink' href="">FAQs</a>
                </li>
                <li className='col_footerItem'>
                  <a className='col_footerItemLink' href="">Order</a>
                </li>
                <li className='col_footerItem'>
                  <a className='col_footerItemLink' href="">Order Status</a>
                </li>
                <li className='col_footerItem'>
                  <a className='col_footerItemLink' href="">
                    Returns & Exchanges</a>
                </li>
                <li className='col_footerItem'>
                  <a className='col_footerItemLink' href="">Contact Us</a>
                </li>
              </ul>
            </div>
          </Col>
          <Col xs={2} className="col_footer">
            <div className="col_footerItems">
              <h3 className='col_footerItemsTitle'>Everything Else</h3>
              <ul className='col_footerItemsList'>
                <li className='col_footerItem'>
                  <a className='col_footerItemLink' href="">Community</a>
                </li>
                <li className='col_footerItem'>
                  <a className='col_footerItemLink' href="">Why Sopa</a>
                </li>
                <li className='col_footerItem'>
                  <a className='col_footerItemLink' href="">About</a>
                </li>
                <li className='col_footerItem'>
                  <a className='col_footerItemLink' href="">Discount Program</a>
                </li>
                <li className='col_footerItem'>
                  <a className='col_footerItemLink' href="">Sopa Blog</a>
                </li>
                <li className='col_footerItem'>
                  <a className='col_footerItemLink' href="">
                    Sopa Ambassadors</a>
                </li>
              </ul>
            </div>
          </Col>
          <Col xs={2} className="col_footerLogo">
            <div className="col_footerItems">
              <ul className="col_footerLogoList">
                <li className="col_footerLogoItem" href="">
                  <img
                    className='col_footerLogoImg'
                    src={logoTwitter} alt="twitter" />
                  <span>Twitter</span>
                </li>
                <li className="col_footerLogoItem" href="">
                  <img
                    className='col_footerLogoImg'
                    src={logoInstagram}
                    alt="instagram" />
                  <span>Instagram</span>
                </li>
                <li className="col_footerLogoItem" href="">
                  <img
                    className='col_footerLogoImg'
                    src={logoFacebook}
                    alt="facebook" />
                  <span>Facebook</span>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Grid>
    </div>
  )
}
