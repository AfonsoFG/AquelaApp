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
        let preview = postData.conteudo.substring(0, 250) + ' [...]';
        return (
            <Fragment>
                <h4 className='post-title'>{postData.titulo}</h4>
                <div dangerouslySetInnerHTML={{ __html: preview }} className='post-content' />
                
                <Link to={`/post/${postData.id}`} className="lermais">Ler mais</Link>
                <hr />
            </Fragment>
        )
    }
}

Post.contextType = Context;

export default Post