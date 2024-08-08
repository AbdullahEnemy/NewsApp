import React, { Component } from "react";
import "./Navbar.css"; // Import the CSS file

export class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolled: false,
    };
  }

  handleScroll = () => {
    if (window.scrollY > 50) {
      this.setState({ scrolled: true });
    } else {
      this.setState({ scrolled: false });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  render() {
    const { scrolled } = this.state;

    return (
      <nav
        className={`navbar navbar-expand-lg navbar-dark bg-dark ${
          scrolled ? "scrolled" : ""
        }`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            News
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
