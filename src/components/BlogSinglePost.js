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

    getPost = (id) => {
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

    handleReaction = (post, reaction) => {

        let new_val = post.reactions[reaction] + 1

        post.reactions[reaction] = new_val;

        fetch(api.url + api.endpoints.updateReactions, {
            method: 'PUT',
            body: JSON.stringify({
                post_id: post.id,
                reaction: reaction,
                value: new_val
            }),
            headers: {
                'Content-Type': 'application/json'
            } 
        })
        .then((response) => {
            return response.json();
        })
        .then((json) => { 
            if (json.success) {
                this.setState({
                    post
                });
            }
        });
    }

    newComment = (comment)  => {

        const comments = this.state.comments;

        comments.push(comment); 

        this.setState({
            comments
        });

    }
    
    
    printComments = () => {
        let listaComments = this.state.comments;
        let comments = [];
        if (listaComments.length > 0) {
            listaComments.map((comment, index) => {
                return comments.push(
                    <BlogComment key={index} numero={index + 1} commentData={comment} />
                );
            });
        } else {
            comments = '<p>No comments yet! Be the first to comment!</p>'
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
                                <div><b>Published at: </b> { post.created_at}</div>          
                                <h4 className="headerReactions">React</h4>
                                <div className="btn-group" role="group" aria-label="...">
                                    <button type="button" className="btn btn-like" onClick={() => { this.handleReaction(post, 'like')}}><IcoThumbsUp /><span id="total-like">{ reactions.like }</span></button>
                                    <button type="button" className="btn btn-love" onClick={() => { this.handleReaction(post, 'love')}}><IcoLove /><span id="total-love">{ reactions.love }</span></button>
                                    <button type="button" className="btn btn-angry" onClick={() => { this.handleReaction(post, 'angry')}}><IcoAngry /><span id="total-angry">{ reactions.angry }</span></button>
                                    <button type="button" className="btn btn-surprise" onClick={() => { this.handleReaction(post, 'surprise')}}><IcoSurprise /><span id="total-surprise">{ reactions.surprise }</span></button>
                                </div>
                                <h4 className="headerComments">Comments</h4>
                                { this.printComments() }
                                <h4 className="headerComment">Write a comment</h4>
                                <BlogCommentForm postId={post.id} newComment={(c) => { this.newComment(c) }} />
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