import '../App.css'
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <div className="container">
          <NavLink to='/' className="navbar-brand text-light col-lg-6">Beverage's Mart</NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ">
              <li className="nav-item col-lg-4">
                <NavLink to="/" className="nav-link active text-light" aria-current="page" >
                  Home
                </NavLink>
              </li>

              <li className="nav-item col-lg-4">
                <NavLink to='/Menu' className="nav-link text-light" >Menu</NavLink>
              </li>
               <li className="nav-item col-lg-4">
                <NavLink to="/About" className="nav-link text-light" >About</NavLink>
              </li>
               <li className="nav-item col-lg-4">
                <NavLink className="nav-link text-light" to="/Contact">Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
