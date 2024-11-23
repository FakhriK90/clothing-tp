import "./navigation.styles.scss";
import { useEffect, useState, useContext } from "react";
import {Link} from "react-router-dom";
import {UserContext} from "../../contexts/user.context"
import {signOutUser} from "../../utils/firebase/Firebase.utils"
import CartIcon from "../cart-icon/CartIcon";
import CartDropdown from "../cart-dropdown/CartDropdown";


const Navigation = () => {
  const {currentUser} = useContext(UserContext);

  /* Setting scroll method */
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const signOutHandler = async() => {
      await signOutUser();
    };

    const handleSignOutClick = () => {
      closeMobileMenu();
      signOutHandler();
    };


  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
      <div className="title-logo">
        <span>Crawn Clothing</span>
      </div>
    </Link>
    <div className="navbar-container">
      <div className="menu-icon" onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"} />
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item">
          <Link to="/shop" className="nav-links" 
            onClick={closeMobileMenu}>
          Shop
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-links" 
            onClick={closeMobileMenu}>
          Conatct
          </Link>
        </li>
      {currentUser ? (
        <li className="nav-item">
          <Link
            to="/"
            className="nav-links"
            onClick={handleSignOutClick}
          >
            Sign Out
          </Link>
        </li>
          ) : (
            <li className="nav-item">
          <Link
            to="/signIn"
            className="nav-links"
            onClick={closeMobileMenu}
          >
            Login
          </Link>
        </li>
          )}
        <li className="nav-item">
          <Link
            to="/services"
            className="nav-links"
            onClick={closeMobileMenu}
          >
            <CartIcon/>
          </Link>
        </li>
      </ul>
    </div>
    <CartDropdown/>
  </nav>
  )
}

export default Navigation