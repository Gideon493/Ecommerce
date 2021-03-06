import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container">
          <NavLink class="navbar-brand fw-bold fs-4 text-danger" to="/">
            GidPX COLLECTION
          </NavLink>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0 text-secondary ">
              <li class="nav-item">
                <NavLink class="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link" to="/products">
                  Products
                </NavLink>
              </li>

              <li class="nav-item">
                <NavLink class="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link" to="/foods">
                  Foods
                </NavLink>
              </li>
            </ul>
            <form class="d-flex" role="search"></form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
