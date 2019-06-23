import React, { Component, Fragment } from 'react'
import { Link } from "react-router-dom";
import { Context } from '../context';

class BlogPost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            comentarios: []
        }
    }


    render() {
        let postData = this.props.dataPosts;
        let preview = postData.content.substring(0, 250) + ' [...]';
        let comment_text = '';

        if (this.props.comments_count === 1) {
            comment_text = 'comment'
        } else if (this.props.comments_count  >= 2) {
            comment_text = 'comments'
        } else {
            comment_text = 'comments yet! :('
        }

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
                        <div className="row meta">
                            <div className="col-md-6 totals">
                            <span>{ this.props.reactions_count }</span> reactions <span>{ this.props.comments_count }</span> { comment_text }
                        </div>
                        <div className="col-md-6">
                            <Link to={`/post/${postData.id}`} className="lermais btn btn-success btn-sm pull-right">Read more</Link>
                        </div>
                        </div>
                    </div>
                    
                    
                </div>
            </Fragment>
        )
    }
}

BlogPost.contextType = Context;

export default BlogPost