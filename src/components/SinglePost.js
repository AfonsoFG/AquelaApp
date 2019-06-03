import React, { Component, Fragment } from 'react'
import { Comment, CommentForm, Header, Footer, Sidebar} from './../components'
import api from '../configs/api'


class SinglePost extends Component {
  constructor(props) {
    super(props)

    this.state = {
        post: [],
        comentarios: []
    }
  }

  componentDidMount() {
      this.getPost(this.props.match.params.id);
  }

  getPost (id) {
    fetch(api.url + api.endpoints.post + '/' + id + '?q=comentarios')
    .then((response) => {
      return response.json();
    })
    .then((json) => {
       this.setState({
            post: json
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






    render() {


    let post = this.state.post;
        return (
        <Fragment>
            <Header/>
            <div className="container pageBody pageMetronome">
                <div className='row'>
                    <div className='col-md-9 main'>
                        <div className="slideContainer">
                          <h3>{ post.titulo }</h3>
                          <h4 className='post-title'></h4>
        <div dangerouslySetInnerHTML={{ __html: post.conteudo }} className='post-content'/>

        { this.printComments() }
        <CommentForm/>

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

export default SinglePost