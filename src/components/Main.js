import React, { Component, Fragment } from 'react'
import { Post, Header, Footer, About } from './../components'

class Blog extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/posts')
    .then((response) => {
      return response.json();
    })
    .then((json) => {
       this.setState({
         data: json
       });
    });
  }
  
  componentDidUpdate() {

  }
  git init
  
  printPosts = () => {
    let listaPosts = this.state.data;
    let posts = [];
    if (listaPosts.length > 0) {
      listaPosts.map((post) => {
        posts.push(
          <Post dataPosts={ post } />
        );
      });
    }
    return posts;
  }

  render() {
    return (
      <div className='container'>
        <Header />
        <div className='row col-md-12'>
          <div className='col-md-9 main-col'>{ this.printPosts() }</div>
          <div className='col-md-3 right-col'><About /></div>
        </div>  
        <Footer />  
      </div>
    )
  }
}

export default Blog