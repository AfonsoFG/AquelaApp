import React, { Component } from 'react'
import * as moment from 'moment'
import api from '../configs/api'

class BlogCommentForm extends Component {

    
    addComment = (e, postId) => {
        e.preventDefault();

        const author = document.getElementById("comment_name").value;
        const email = document.getElementById("comment_email").value;
        const content = document.getElementById("comment_content").value;

        const date = moment(new Date(), 'hh:mm DD-MM-YYYY')

        const new_comment = {
            post_id: postId,
            author: author,
            email: email,
            date: date.format('hh:mm DD-MM-YYYY'),
            content: content
        }

        fetch(api.url + api.endpoints.addComments, {
            method: 'POST',
            body: JSON.stringify(new_comment),
            headers: {
                'Content-Type': 'application/json'
            } 
        })
        .then((response) => {
            return response.json();
        })
        .then((json) => { 
            if (json.success) {
                this.props.newComment(new_comment);
            }
        });
    }
    
    render() {
        return (
            <form className="row">
                <div className="form-group col-md-12">
                    <input type="text" className="form-control form-control-sm" id="comment_name" placeholder="Name"/>
                </div>
                <div className="form-group col-md-12">
                    <input type="email" className="form-control form-control-sm" id="comment_email" placeholder="Email"/>
                </div>

                <div className="form-group col-md-12">
                    <textarea className="form-control form-control-sm" id="comment_content" placeholder="Comment" type='textarea' rows='6'/>
                </div>
                <div className='col-md-12'>
                    <button className='btn btn-flat btn-success btn-sm btn-block' onClick={(e) => this.addComment(e, this.props.postId)}>Enviar</button>
                </div>
            </form>
        )
    }

}

export default BlogCommentForm;