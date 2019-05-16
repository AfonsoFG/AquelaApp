import React, { Component, Fragment } from 'react'

class Post extends Component {
  constructor(props) {
    super(props)
  }

  render(){
    let postData = this.props.dataPosts
    console.log(postData);
    return (
      <Fragment>
        <div className='post-title'>{ postData.titulo }</div>
        <div className='post-content'>{ postData.conteudo }</div>
      </Fragment>
    )
  }
}

export default Post