import { connect } from 'react-redux';
import { Articles } from '../components/Articles';
import { deleteArticleByIndex } from '../actions/articles';

const articlesListSelector = (articles) =>
  articles.map((article, index) => ({ key: article, title: article, index }));

function mapStateToProps(state) {
  return {
    data: articlesListSelector(state.articles),
  };
}

// this is equivalent to
// (dispatch) => bindActionCreators({ deleteArticleByIndex }, dispatch);
// and
// (dispatch) => ({ deleteArticleByIndex: (...args) => dispatch(deleteArticleByIndex(...args)) });
const mapsDispatchToProps = { deleteArticleByIndex };

export const ArticlesContainer = connect(mapStateToProps, mapsDispatchToProps)(Articles);
