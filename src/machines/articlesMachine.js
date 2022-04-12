import { assign, createMachine } from "xstate";

const addArticle = assign({
  articles: (context, {title}) => {
    const key = 'k' + Math.floor(Math.random() * 1e3);
    const article = { key, title };
    context.articles.push(article);
    return context.articles;
  }
});

export const articlesMachine = createMachine(
  {
    id: 'articlesService',
    context: {
      articles: [
        { key: 'a', title: 'item 1' },
      ],
    },
    initial: 'idle',
    states: {
      idle: {
        on: {
          ADD_ARTICLE: {
            target: 'idle',
            actions: ['addArticle']
          }
        }
      }
    },
  },
  {
    actions: { addArticle }
  }
);
