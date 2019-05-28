import React, { Component, Fragment } from 'react'
import { CommentForm } from './../components'

class Comment extends Component {
    
    constructor(props) {
        super(props)
    }
    
    componentDidMount() {
    
    }
  
    render() {
        return (
            <Fragment>
                <div className='post-comment'>
                    <span>AUTOR: { this.props.commentData.autor }</span>
                    <span>EMAIL: { this.props.commentData.email }</span>
                    <span>DATA: { this.props.commentData.data }</span>
                    <p>{ this.props.commentData.conteudo }</p>
                </div>
            </Fragment>
        )
    }
}


export default Comment