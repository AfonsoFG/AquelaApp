import React, { Component, Fragment } from 'react'
import { Post, Header, Footer, AboutMe } from './../components'
import axios from 'axios'

class Blog extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
    }
  }

  componentDidMount() {
    this.getContent()
  }
  
  getContent = () => {
    let postList
    axios.get(`http://localhost:3001/post/list`)
    .then((response) => {
      if (response.data && response.data.length > 0) {
       postList = response.data
       this.setState({
        data: postList
      })
      }
    })
    .catch(function(error) {
      console.log('ERROR', error)
    })
    
  }
  
  renderPosts = () => {
    let postList = this.state.data
    let posts = []
    if(postList.length > 0) {
      postList.map((post, idx) => {
        posts.push(
          <div className='post-wrapper'>
            <Post postData={post} loadPostComments={this.loadPostComments} /><br />
          </div>
        )
      })
      return posts
    } else {
      return false
    }
  }

  loadPostComments() {

  }

  render() {
    return (
      <div className='container'>
        <Header />
        <div className='row col-md-12'>
          <div className='col-md-3 left-col'></div>
          <div className='col-md-6 main-col'>{ this.renderPosts() }</div>
          <div className='col-md-3 right-col'>
            <AboutMe />
          </div>
        </div>  
        <Footer />  
      </div>
    )
  }
}

export default Blog