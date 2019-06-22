import React, { Component, Fragment } from 'react'
import { BlogComment, BlogCommentForm, AppSectionHeader, AppSectionFooter, AppSectionSidebar} from '.'
import { ReactComponent as IcoThumbsUp } from '../assets/img/icons-site/thumbs-up.svg';
import { ReactComponent as IcoAngry } from '../assets/img/icons-site/angry.svg';
import { ReactComponent as IcoSurprise } from '../assets/img/icons-site/surprise.svg';
import { ReactComponent as IcoLove } from '../assets/img/icons-site/love.svg';
import api from '../configs/api'

class BlogSinglePost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            post: [],
            comments: []
        }
    }

    componentDidMount() {
        this.getPost(this.props.match.params.id);
    }

    getPost(id) {
        fetch(api.url + api.endpoints.post + '/' + id + '?q=comments')
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            const comments = json.comments ? json.comments : [];
            this.setState({
                post: json,
                comments: comments
            });
        });
    }

    printComments() {
        let listaComments = this.state.comments;
        let comments = [];
        if (listaComments.length > 0) {
            listaComments.map((comment, index) => {
                return comments.push(
                    <BlogComment key={index} commentData={comment} />
                );
            });
        }
        return comments;
    }

    render() {
        let post = this.state.post;
        let reactions = post.reactions ? post.reactions : {like: '-', love: '-', angry: '-', surprise: '-'}
        return (
            <Fragment>
                <AppSectionHeader />
                <div className="container pageBody pageSinglePost">
                    <div className='row'>
                        <div className="col-md-12">
                            <h3>{post.title}</h3>
                        </div>
                        <div className='col-md-9 main'>
                            <div className="postContainer">
                                <img src={post.image} alt={post.title} className={"img-responsive"} />
                                <div dangerouslySetInnerHTML={{ __html: post.content }} className='post-content' />
                                {this.printComments()}
                                <h4 className="headerReactions">React</h4>
                                <div className="btn-group" role="group" aria-label="...">
                                    <button type="button" className="btn btn-default"><IcoThumbsUp />{ reactions.like }</button>
                                    <button type="button" className="btn btn-default"><IcoLove />{ reactions.love }</button>
                                    <button type="button" className="btn btn-default"><IcoAngry />{ reactions.angry }</button>
                                    <button type="button" className="btn btn-default"><IcoSurprise />{ reactions.surprise }</button>
                                </div>
                                <h4 className="headerComments">Comment</h4>
                                <BlogCommentForm />
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

export default BlogSinglePost