import React, { Component, Fragment } from 'react'
import { Comment } from './../components'
import api from '../configs/api'
import { Button } from "reakit/Button";

class Post extends Component {
  constructor(props) {
    super(props)
    this.state = {
      comentarios: []
    }
  }


  

  componentDidMount() {
    this.getComments(this.props.dataPosts.id);
  }

  getComments (id) {
    fetch(api.url + api.endpoints.post + '/' + id + '?q=comentarios')
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      const comments = this.state.comentarios;
      comments.push(json);
       this.setState({
         comentarios: comments
       });
    });
  }

  printComments () {
    let listaComments = this.state.comentarios;
    let comments = [];
    if (listaComments.length > 0) {
      listaComments.map((comment, index) => {
        return comments.push(
          <Comment key={index} commentData={ comment } />
        );
      });
    }
    return comments;
  }

  render(){
    let postData = this.props.dataPosts
    
    return (
      <Fragment>
        <div className='post-title'>{ postData.titulo }</div>
        <div className='post-content'>{ postData.conteudo }</div>
        { this.printComments() }
        <Button className='btn  btn-sm btn-info'>Button</Button>
        <hr/>
      </Fragment>
    )
  }
}

export default Post