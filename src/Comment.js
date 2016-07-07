import React, { Component } from 'react'

function Comment(props) {
    const comment = props.comment;

    return (
        <li>
            <strong>{comment.user}:</strong>
            <br/>
            <div>{comment.text}</div>
        </li>
    )
}

export default Comment