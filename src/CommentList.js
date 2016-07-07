import React, { Component } from 'react'
import Comment from './Comment'


class CommentList extends Component {
    state = {
        isOpen: false
    };
    
    render() {
        const comments = this.props.comments;

        if (!comments) return (null);

        const { isOpen } = this.state;
        const button = <a href="#" onClick= {this.toggleOpen}> {isOpen ? 'Close comments ' : 'Open comments '} [{comments.length}]</a>;

        const listItems = (isOpen && comments.length)? comments.map((comment) => <Comment comment = {comment} key = {comment.id}/>) : null;

        return (
            <section>
                {button}
                <ul>
                    {listItems}
                </ul>
            </section>

        )
    }
    toggleOpen = (ev) => {
        ev.preventDefault;
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}


export default CommentList