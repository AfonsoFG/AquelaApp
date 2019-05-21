import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
      return (
        <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom">
          <h5 className="my-0 mr-md-auto font-weight-normal">Blog notícias</h5>
          <nav className="my-2 my-md-0 mr-md-3">
          <Link  to='/about' className="p-2 text-dark">Link 1</Link>
          </nav>
        </div>
      );
  }
}

export default Header