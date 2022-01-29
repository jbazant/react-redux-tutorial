import { ofType } from "redux-observable";
import { ajax } from "rxjs/ajax";
import { map, mergeMap } from "rxjs/operators";
import { addArticle } from "../actions/articles";
import { FIND_ARTICLE_ON_SERVER } from "../constants/newArticleForm";

// TODO here should come your logic
export const findArticleEpic = action$ => action$.pipe(
  ofType(FIND_ARTICLE_ON_SERVER),
  mergeMap(({payload: { articlePrefix }}) => ajax.getJSON(`https://bazant.dev/tools/titles.php?prefix=${articlePrefix}&?sleep=0`).pipe(
     map(({title}) => addArticle(title)),
  )),
)

