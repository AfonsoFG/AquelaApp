import React, { Component } from 'react'

class Header extends Component {
  render() {
      return (
        <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom">
          <h5 className="my-0 mr-md-auto font-weight-normal">Blog notícias</h5>
          <nav className="my-2 my-md-0 mr-md-3">
            <a className="p-2 text-dark" href="http://google.com">Link 1</a>
          </nav>
        </div>
      );
  }
}

export default Header