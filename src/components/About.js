import React, { Component, Fragment } from 'react';
import {  } from './../components'

class About extends Component {

render() {
  return(
  <Fragment>
       <div className='container'>
        <Header />
        <div className='row col-md-12'>
          <div className='col-md-9 main-col'>
          
                <div className='about-me-section'>
            <h4>Sobre</h4>
            <p>Morbi porta eros ex, eget condimentum dolor vehicula quis. Fusce pellentesque facilisis sapien, vel pulvinar diam tempor vitae. Donec at urna in metus luctus dapibus eu vel lectus. In luctus egestas urna, ut aliquam elit lacinia at. Morbi dolor massa, vehicula sit amet lectus vel, sodales ultrices nunc. Nullam finibus gravida lorem non consequat</p>
            <p>Morbi porta eros ex, eget condimentum dolor vehicula quis. Fusce pellentesque facilisis sapien, vel pulvinar diam tempor vitae. Donec at urna in metus luctus dapibus eu vel lectus. In luctus egestas urna, ut aliquam elit lacinia at. Morbi dolor massa, vehicula sit amet lectus vel, sodales ultrices nunc. Nullam finibus gravida lorem non consequat</p>
            <p>Morbi porta eros ex, eget condimentum dolor vehicula quis. Fusce pellentesque facilisis sapien, vel pulvinar diam tempor vitae. Donec at urna in metus luctus dapibus eu vel lectus. In luctus egestas urna, ut aliquam elit lacinia at. Morbi dolor massa, vehicula sit amet lectus vel, sodales ultrices nunc. Nullam finibus gravida lorem non consequat</p>
          </div>
          </div>
          <div className='col-md-3 right-col'><About /></div>
        </div>  
        <Footer />  
      </div>
  </Fragment>
  )
}

}

export default About