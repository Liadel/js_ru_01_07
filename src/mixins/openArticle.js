export default {
    getInitialState() {
        //this.props
        return {
            openArticleId: null
        }
    },

    openArticle(id) {
        //if (e) e.preventDefault();

        this.setState({
            openArticleId: (id == this.state.openArticleId) ? null : id
        })
    }
}