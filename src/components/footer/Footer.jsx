import { Link } from "react-router-dom";
import "./footer.styles.scss";

const Footer = () => {
    const year = new Date().getFullYear();
  return (
    <div className="footer-container">
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              Home
            </Link>
            <div className="vl"></div>
            <Link to="/" className="social-logo">
              About
            </Link>
            <div className="vl"></div>
            <Link to="/" className="social-logo">
              Contact
            </Link>
          </div>
          <div className="social-icons">
            <Link
              className="social-icon-link phone"
              to="/"
              target="_blank"
              aria-label="Phone"
            >
              <i className="fa-solid fa-phone"></i>
              <span>+216 ** *** ***</span>
            </Link>
            <Link
              className="social-icon-link mail"
              to="/"
              target="_blank"
              aria-label="E-mail"
            >
              <i className="fa-solid fa-envelope"></i>
              <span>email@gmail.com</span>
            </Link>
          </div>
          <small className="website-rights">{`© Entreprise ou Société ${year}`}</small>
        </div>
      </section>
    </div>
  )
}

export default Footer