import React from 'react'
import Article from './Article'
import openArticle from './mixins/openArticle'

const ArticleListOld = React.createClass({
    mixins: [openArticle],

    render() {
        const { articles } = this.props;
        const { openArticleId } = this.state;

        const listItems = articles.map((article) => <li key={article.id}>
            <Article article = {article}
                     isOpen = {article.id == openArticleId}
                     openArticle = {() => this.openArticle(article.id)}
            />
        </li>)

        return (
            <div>
                <h1>Article list</h1>
                <ul>
                    {listItems}
                </ul>
            </div>
        )
    }
})

export default ArticleListOld