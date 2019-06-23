import React, { Component, Fragment } from 'react';

class BlogComment extends Component {
  
    render() {
        return (
            <Fragment>
                <div className='aComment'>
                    <div className='row'>
                        <div className="col-md-2 aCommentNumber">
                            <p>{ this.props.numero }</p>
                        </div>
                        <div className="col-md-10">
                            <div className="row">
                                <div className="col-md-8 aCommentAutor">
                                    { this.props.commentData.author }
                                </div>
                                <div className="col-md-4 aCommentDate">
                                    { this.props.commentData.date }
                                </div>
                                <div className="col-md-12">
                                    <p>{ this.props.commentData.content }</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
            </Fragment>
        )
    }
}


export default BlogComment