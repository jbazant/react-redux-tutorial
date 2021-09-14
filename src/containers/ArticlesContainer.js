import { connect } from 'react-redux';
import { Articles } from '../components/Articles';
import { deleteArticleByIndex } from '../actions/articles';
import { bindActionCreators } from 'redux';

const articlesListSelector = (articles) =>
  articles.map((article, index) => ({ key: article, title: article, index }));

function mapStateToProps(state) {
  return {
    data: articlesListSelector(state.articles),
  };
}

function mapsDispatchToProps(dispatch) {
  return bindActionCreators({ deleteArticleByIndex }, dispatch);
}
export const ArticlesContainer = connect(mapStateToProps, mapsDispatchToProps)(Articles);
