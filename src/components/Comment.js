import React from 'react'

const Comment = ({ commentData }) => 
        <div className='post-comment'>
          <span>{ commentData.id }</span>
          <span>{ commentData.data }</span>
          <p>{ commentData.conteudo }</p>
        </div>

export default Comment