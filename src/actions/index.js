export const REPOS_SELECTED = 'REPOS_SELECTED';
export const REPOS_FETCHED = 'REPOS_FETCHED';

export const reposSelected = (repos) => {
  return {
    type: REPOS_SELECTED,
    payload: repos
  }
};

export const reposFetched = (api) => {
  return dispatch => {
    fetch(api)
      .then(data => data.json())
      .then(elements => elements.items.splice(0, 5))
      .then(repos => dispatch({
        type: REPOS_FETCHED,
        payload: repos
      }));
  };
};
