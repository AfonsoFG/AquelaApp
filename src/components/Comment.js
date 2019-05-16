import React from 'react'

const Comment = ({ commentData }) => 
        <div className='post-comment'>
          <span>{ commentData.user }</span>
          <span>{ commentData.email }</span>
          <p>{ commentData.comment }</p>
        </div>

export default Comment