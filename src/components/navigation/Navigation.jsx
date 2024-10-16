import "./navigation.styles.scss";
import { useEffect, useState } from "react";
import {Link} from "react-router-dom"


const Navigation = () => {
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
          <Link
            to="/signInUp"
            className="nav-links"
            onClick={closeMobileMenu}
          >
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/services"
            className="nav-links"
            onClick={closeMobileMenu}
          >
            Cart
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-links" onClick={closeMobileMenu}>
          
            <div id="contain">
              <ul>
                <li className="category">
                  <h3 id="title">Products</h3>
                  <ul>
                    <li>
                      <Link to="/Hhats">Hats</Link>
                      <ul>
                        <li>
                          <Link to="/stylos">Stylos</Link>
                        </li>
                        <li>
                          <Link to="/classeurs">Classeurs</Link>
                        </li>
                        <li>
                          <Link to="/colles">Colles</Link>
                        </li>
                        <li>
                          <Link to="/marqueurs">Marqeurs</Link>
                        </li>
                        <li>
                          <Link to="/adhesifs">Rubans adhésifs</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/sneackers">Sneakerss</Link>
                      <ul>
                        <li>
                          <Link to="/pc_bureau">Pc bureautiques</Link>
                        </li>
                        <li>
                          <Link to="/ecrans">Ecrans</Link>
                        </li>
                        <li>
                          <Link to="/retroprojecteurs">
                            Rétroprojecteurs
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/jackets">Jackets</Link>
                      <ul>
                        <li>
                          <Link to="/fauteuils">Fauteuils</Link>
                        </li>
                        <li>
                          <Link to="/armoires">Armoires</Link>
                        </li>
                        <li>
                          <Link to="/chaises">Chaises</Link>
                        </li>
                        <li>
                          <Link to="/tables">Tables</Link>
                        </li>
                        <li>
                          <Link to="/ram">Papiers Ram</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/womens">Womens</Link>
                      <ul>
                        <li>
                          <Link to="/fauteuils">Fauteuils</Link>
                        </li>
                        <li>
                          <Link to="/armoires">Armoires</Link>
                        </li>
                        <li>
                          <Link to="/chaises">Chaises</Link>
                        </li>
                        <li>
                          <Link to="/tables">Tables</Link>
                        </li>
                        <li>
                          <Link to="/ram">Papiers Ram</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/mens">Mens</Link>
                      <ul>
                        <li>
                          <Link to="/fauteuils">Fauteuils</Link>
                        </li>
                        <li>
                          <Link to="/armoires">Armoires</Link>
                        </li>
                        <li>
                          <Link to="/chaises">Chaises</Link>
                        </li>
                        <li>
                          <Link to="/tables">Tables</Link>
                        </li>
                        <li>
                          <Link to="/ram">Papiers Ram</Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  </nav>
  )
}

export default Navigation