import React, { Component, Fragment } from 'react'
import Comment from './Comment'
import axios from 'axios';

class Post extends Component {
  constructor(props) {
    super(props)
    this.state = {
      commentSection: false
    }
  }

  toggleCommentSection = () => {
    axios.get(`http://localhost:3001/post/${this.props.postData.id}/comments`)
    .then((response) => {

    })
    .catch(function(error) {

    })
  }

  renderComments() {
    /* let comments = []
    return(
      <Comment commentData={i.data}/>
    ) */
  }

  render(){
    let postData = this.props.postData
    console.log('POSTDATA', postData)
    return (
      <Fragment>
        <div className='post-title'>{ postData.title }</div>
        <div className='post-content'>{ postData.content }</div>
        <button className='comments-btn' onClick={ this.props.loadPostComments(postData.id) }>{ !this.state.commentSection ? 'View Comments' : 'Hide Comments'}</button>
        { this.state.commentSection && 
          <div className='comment-section'>
            { this.renderComments()}
            <div className='comment-form-section'>
              <label for="Name">Name</label>
              <input type="text" id="name"/><br/>
              <label for="Email">Email</label>
              <input type="text" id="email"/><br/>
              <label for="Comment">Comment</label>
              <input type="text" id="comment"/><br/>
            </div>
          </div>
        }
      </Fragment>
    )
  }
}

export default Post