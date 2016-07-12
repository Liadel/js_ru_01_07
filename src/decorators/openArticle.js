import React from 'react'

export default (Component) => class DecoratedComponent extends React.Component {
  //привязка к статье в названиях плохо - вы же создаете декоратор для переиспользования логики в других местах, почему openArticle, openArticleId?
    state = {
        openArticleId: null
    }

    openArticle = id => ev => {
        if (ev) ev.preventDefault();

        this.setState({
            openArticleId: (id == this.state.openArticleId) ? null : id
        })
    }

    render() {
        return <Component {...this.props} openArticleId = {this.state.openArticleId} openArticle = {this.openArticle}/>
    }
}
