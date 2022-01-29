import { connect } from 'react-redux';
import { Articles } from '../components/Articles';
import { deleteArticle } from "../reducers/articlesSlice";

const articlesListSelector = (articles) =>
  articles.map((article, index) => ({ key: article, title: article, index }));

function mapStateToProps(state) {
  return {
    data: articlesListSelector(state.articles.items),
  };
}

// this is equivalent to
// (dispatch) => bindActionCreators({ deleteArticle }, dispatch);
// and
// (dispatch) => ({ deleteArticle: (...args) => dispatch(deleteArticle(...args)) });
const mapsDispatchToProps = { deleteArticle };

export const ArticlesContainer = connect(mapStateToProps, mapsDispatchToProps)(Articles);
