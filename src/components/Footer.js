import React, { Component } from 'react';

class Footer extends Component {

  render() {
    return (
    <footer className="pt-md-5">
      <div className="container">
        <div className="row">
          <div className="col-4 col-md">
            <h5>Header 1</h5>
            <ul className="list-unstyled text-small">
              <li><a href="http://google.com">Link 1</a></li>
              <li><a href="http://google.com">Link 2</a></li>
              <li><a href="http://google.com">Link 3</a></li>
            </ul>
          </div>
          <div className="col-4 col-md">
            <h5>Header 2</h5>
            <ul className="list-unstyled text-small">
              <li><a href="http://google.com">Link 1</a></li>
              <li><a href="http://google.com">Link 2</a></li>
              <li><a href="http://google.com">Link 3</a></li>
            </ul>
          </div>
          <div className="col-4 col-md">
            <h5>Header 3</h5>
            <ul className="list-unstyled text-small">
              <li><a href="http://google.com">Link 1</a></li>
              <li><a href="http://google.com">Link 2</a></li>
              <li><a href="http://google.com">Link 3</a></li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <hr/>
            <p className="text-center">&copy; 2017-2019</p>
          </div>
        </div>
      </div>
    </footer>
    );
  }
}

export default Footer;
