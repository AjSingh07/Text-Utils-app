import {Link} from "react-router-dom"
export default function Navbar(props) {
  return (
    <>
      <nav
        class={`navbar navbar-expand-lg bg-${props.darkMode} navbar-${props.darkMode}`}
      >
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            {props.title}
          </a>
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
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to="/" class="nav-link active" aria-current="page">Home</Link>
              
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/about" >About</Link>
              </li>
              {/* <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul> 
              </li> */}
              
            </ul>
            
            <div class={` mx-3 form-check form-switch text-${props.darkMode==='light'?'dark':'light'}`} >
              <input
                class="form-check-input"
                type="checkbox"
                role="switch"
               onClick={props.toggleswitch}
                id="flexSwitchCheckDefault"
              />
              <label class="form-check-label" for="flexSwitchCheckDefault">
                Enable dark mode
              </label>
            </div>
            <div class="form-check form-switch"></div>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.defaultProps = {
  title: "Title",
};
