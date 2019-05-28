import React, { Component, Fragment } from 'react'
import { Post, Header, Footer, Sidebar } from './../components'
import api from '../configs/api'

class Erro404 extends Component {

    
    render() {
        return (
        <Fragment>
            <Header/>
            <div className="container pageBody page404">
                <div className='row'>
                    <div className='col-md-9 main'>
                        <h2>ERRO</h2>
                        <div className="text-center mt150">
                            <span className="big">Erro 404</span>
                            <br/>
                            <span className="small">Página não encontrada</span>
                        </div>
                    </div>
                    <div className='col-md-3 sidebar'>
                        <Sidebar/>
                    </div>
                </div>
            </div>
            <Footer/>
        </Fragment>
        )
    }
}

export default Erro404