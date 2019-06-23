import React, { Component, Fragment } from 'react'
import { BlogPost, AppSectionHeader, AppSectionFooter, AppSectionSidebar } from './../components'
import { Context } from '../context';
import ReactPaginate from 'react-paginate';
import * as Scroll from 'react-scroll';
class Blog extends Component {

    constructor(props) {
        super(props)
        let currentPage = props.match.params.page ? props.match.params.page : 1;
        this.state = {
            posts: [],
            currentPage: currentPage,
            totalPages: 1,
            pageLimit: 5
        }
    }

    componentDidMount() {
        this.context.fetchPosts();
        this.context.subscribePosts((posts) => {
            const pageLimit = this.state.pageLimit;
            const totalPages = Math.ceil(posts.length / pageLimit);
            this.setState({ posts, totalPages });
        });
    }
  
    printPosts = () => {
        let listaPosts = this.state.posts;

        let posts = [];

        const offset = (this.state.currentPage - 1) * this.state.pageLimit;

        const currentPosts = listaPosts.slice(offset, offset + this.state.pageLimit);
        
        if (currentPosts.length > 0) {
            currentPosts.map((post) => {
                console.log(post);
                const totalReactions = post.reactions.like + post.reactions.love + post.reactions.angry + post.reactions.surprise;
                return posts.push(
                    <BlogPost dataPosts={ post } reactions_count={ totalReactions } comments_count={ post.comments_count } key={ post.id } mainPage="1" />
                );
            });
        }
        return posts;
    }

    scrollToTop = () => {
        Scroll.animateScroll.scrollToTop();
    }


    handlePaginationClick = data => {
        let selected = data.selected + 1;
        this.props.history.push('/blog/' + selected)
        this.setState({
            currentPage: selected
        })
    }

    render() {
        return (
        <Fragment>
            <AppSectionHeader/>
            <div className="container pageBody pageBlog">
                <div className='row'>
                    <div className='col-md-12'>
                        <h3>Blog</h3>
                    </div>
                    <div className='col-md-9 main'>
                        <ReactPaginate
                            disableInitialCallback={ true }
                            initialPage = {parseInt(this.props.currentPage) -1}
                            activeClassName={'active'}
                            pageCount={parseInt(this.state.totalPages)}
                            pageRangeDisplayed={5}
                            marginPagesDisplayed={2}
                            containerClassName={"pagination"}
                            previousLabel={"Previous"}
                            nextLabel={"Next"}
                            onPageChange={this.handlePaginationClick}
                        />
                        { this.printPosts() }
                        
                    </div>
                    <div className='col-md-3 sidebar'>
                        <AppSectionSidebar/>
                    </div>
                </div>
            </div>
            <AppSectionFooter/>
        </Fragment>
        )
    }
}

Blog.contextType = Context;

export default Blog