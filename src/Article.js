import React, { Component } from 'react'
import CommentList from './CommentList'

class Article extends Component {
    state = {
        isOpen: false
    };

/*
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false
        }
    }
*/

    render() {
        const article = this.props.article;
        //console.log(article);
//        const { article } = this.props
//    const { article: { title, text } } = props
        const { isOpen } = this.state;
        const body = isOpen ? <section>{ article.text }</section> : null;
        const comments = <CommentList comments = {this.props.article.comments}/> ;

        return (
            <div>
                <h1 onClick = {this.toggleOpen}>{ article.title }</h1>
                {body}

                {comments}
            </div>

        )
    }

    toggleOpen = (ev) => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}



/*
function Article(props) {
    const article = props.article
//    const { article: { title, text } } = props

    return (
        <div>
            <h1>{ article.title }</h1>
            <section>{ article.text }</section>
        </div>
    )
}
*/

export default Article