import React, { Component } from 'react'

class CommentForm extends Component {
    /*
    constructor(props) {
      super(props)
      
    }
    */
    componentDidMount() {
        console.log('CommentForm DidMount');
    }

    addComment() {
        console.log('Disparou addComment');
    }
    
    render() {
        return (
            <form className="row">
                <div className="form-group col-md-12">
                    <input type="text" className="form-control form-control-sm" id="comment_name" placeholder="Nome"/>
                </div>
                <div className="form-group col-md-12">
                    <input type="email" className="form-control form-control-sm" id="comment_name" placeholder="Email"/>
                </div>

                <div className="form-group col-md-12">
                    <textarea className="form-control form-control-sm" id="comment_text" placeholder="Comentário" type='textarea' rows='6'/>
                </div>
                <div className='col-md-12'>
                    <button className='btn btn-flat btn-success btn-sm btn-block' onClick={() => this.addComment()}>Enviar</button>
                </div>
            </form>
        )
    }

}

export default CommentForm;