import React, { Component, Fragment } from 'react'
import { Comment, CommentForm, AppSectionHeader, AppSectionFooter, AppSectionSidebar} from './../components'
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

    getPost(id) {
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
        let post = this.state.post;
        return (
            <Fragment>
                <AppSectionHeader />
                <div className="container pageBody pageMetronome">
                    <div className='row'>
                        <div className='col-md-9 main'>
                            <div className="slideContainer">
                                <h3>{post.titulo}</h3>
                                <div dangerouslySetInnerHTML={{ __html: post.conteudo }} className='post-content' />
                                {this.printComments()}
                                <CommentForm />
                            </div>
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

export default SinglePost