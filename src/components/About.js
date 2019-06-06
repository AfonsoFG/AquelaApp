import React, { Component, Fragment } from 'react';
import { AppSectionHeader, AppSectionFooter, AppSectionSidebar } from './'

class About extends Component {

    render() {
        return (
            <Fragment>
                <AppSectionHeader />
                <div className="container pageBody pageAbout">
                    <div className='row'>
                        <div className="col-md-12">
                            <h3>About me</h3>
                        </div>
                        <div className='col-md-9 main'>
                            <p>Page About</p>
                        </div>
                        <div className='col-md-3 sidebar'>
                            <AppSectionSidebar />
                        </div>
                    </div>
                </div>
                <AppSectionFooter />
            </Fragment>
        )
    }
}

export default About