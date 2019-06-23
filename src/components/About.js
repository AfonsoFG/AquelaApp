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
                            <h3>About</h3>
                        </div>
                        <div className='col-md-9 main'>
                            <p>Oh well! I got myself into a React development course! Jesus Christ! What was I thinking????</p>

                            <p>For now ... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae eros eu purus lacinia pulvinar. Nulla facilisi. Sed posuere lacinia purus et faucibus. Aliquam erat volutpat. Integer finibus sodales ipsum, vitae venenatis nisl accumsan in. Cras enim mi, vestibulum nec sem eget, sodales blandit tellus. Nulla at lorem nulla. Aliquam eleifend odio quis egestas aliquam. Aliquam egestas aliquam quam a consequat. Cras sed pharetra dolor, ut porttitor elit. Ut sit amet ex feugiat justo maximus egestas vel at ante. Cras posuere, nisl volutpat lacinia dapibus, felis enim faucibus mauris, eget lacinia justo urna quis enim. Curabitur condimentum ante tellus, non dignissim metus faucibus ut.</p>

                            <p>Nulla diam felis, tristique at arcu quis, scelerisque placerat velit. In quis ligula faucibus, condimentum purus eu, tempor metus. Nullam at turpis quis massa rhoncus iaculis quis sed elit. Proin tempus rutrum sem at tincidunt. Donec suscipit luctus tempus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc rutrum vestibulum fringilla. Curabitur hendrerit aliquam metus, non porta felis ornare at.</p>

                            <p>Nullam velit odio, ornare vitae elementum vitae, pharetra in magna. Nam suscipit lacus eu placerat ullamcorper. Vestibulum lectus diam, auctor ac diam eu, rutrum tristique ipsum. Ut accumsan mi dui, ac malesuada massa feugiat sit amet. Praesent suscipit ultrices turpis. Maecenas non turpis porttitor, dignissim urna eget, suscipit sem. Donec eget nunc eget neque commodo faucibus a vel ligula. Curabitur posuere, nisi et venenatis dignissim, mi elit commodo sapien, vel facilisis nunc risus id odio. Quisque in nunc ut elit luctus ornare. Duis dolor ex, laoreet ultrices velit id, sollicitudin venenatis justo.</p>
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