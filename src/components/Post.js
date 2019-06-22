import React, { Component, Fragment } from 'react'
import { Comment } from './../components'
import { Link } from "react-router-dom";
import { Context } from '../context';
import api from '../configs/api'

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

    getComments(id) {
        fetch(api.url + api.endpoints.post + '/' + id + '?q=comentarios')
            .then((response) => {
                return response.json();
            })
            .then((json) => {
                this.setState({
                    comentarios: json.comentario
                });
            });
    }

    printComments() {
        let listaComments = this.state.comentarios;
        let comments = [];
        if (listaComments.length > 0) {
            listaComments.map((comment, index) => {
                return comments.push(
                    <Comment key={index} commentData={comment} />
                );
            });
        }
        return comments;
    }

    render() {
        let postData = this.props.dataPosts;
        let preview = postData.content.substring(0, 250) + ' [...]';
        return (
            <Fragment>
                
                <div className="row itemPost">
                    <div className='col-md-12'>
                        <h4 className='post-title'>{postData.title}</h4>
                    </div>
                    <div className="col-md-4">
                        <img src={ postData.image } alt='' className="img-responsive" />
                        
                    </div>
                    <div className="col-md-8">
                        <div dangerouslySetInnerHTML={{ __html: preview }} className='post-content' />
                        <Link to={`/post/${postData.id}`} className="lermais btn btn-success btn-sm pull-right">Read more</Link>
                    </div>
                    
                </div>
            </Fragment>
        )
    }
}

Post.contextType = Context;

export default Post