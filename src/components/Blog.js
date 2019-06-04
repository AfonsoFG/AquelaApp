import React, { Component, Fragment } from 'react'
import { Post, Header, Footer, Sidebar } from './../components'
import api from '../configs/api'
import ReactPaginate from 'react-paginate';

class Blog extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        fetch(api.url + api.endpoints.posts)
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

    printPosts = () => {
        let listaPosts = this.state.data;
        let posts = [];
        if (listaPosts.length > 0) {
            listaPosts.map((post) => {
                return posts.push(
                    <Post dataPosts={ post } key={ post.id } mainPage="1" />
                );
            });
        }
        return posts;
    }

    render() {
        return (
        <Fragment>
            <Header/>
            <div className="container pageBody pageBlog">
                <div className='row'>
                    <div className='col-md-9 main'>
                        <h3>Blog</h3>
                        { this.printPosts() }
                        <ReactPaginate pageCount={10} pageRangeDisplayed={5} marginPagesDisplayed={2} containerClassName={"pagination"} previousLabel={"Anterior"} nextLabel={"Próximo"}/>

                    </div>
                    <div className='col-md-3 sidebar'>
                        <Sidebar/>
                    </div>
                </div>
            </div>
            <Footer/>
        </Fragment>
        )
    }
}

export default Blog