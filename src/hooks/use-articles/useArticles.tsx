import { useReducer, useEffect } from "react";
import { Articles } from "../../types";
import { getArticles } from "../../services";

interface State {
  articles: Articles;
  isLoaded: boolean;
}

interface Action {
  type: ActionType;
  payload: Articles;
}

type Reducer<S> = (state: S, action: Action) => S;

enum ActionType {
  SET_ARTICLES,
}

const initState: State = {
  articles: [],
  isLoaded: false,
};

const articlesReducer: Reducer<State> = (state, action) => {
  switch (action.type) {
    case ActionType.SET_ARTICLES:
      return {
        ...state,
        articles: action.payload,
        isLoaded: true,
      };

    default:
      return state;
  }
};

export const useArticles = () => {
  const [state, dispatch] = useReducer(articlesReducer, initState);
  const { articles, isLoaded } = state;

  const action = (articles: Articles) => {
    dispatch({ type: ActionType.SET_ARTICLES, payload: articles });
  };

  useEffect(() => {
    getArticles()
    .then(action)
    .catch((err) => console.log(err));
  }, [])

  return { articles, isLoaded };
};
