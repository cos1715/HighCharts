import { REPOS_SELECTED, REPOS_FETCHED } from '../actions';

const initState = {
  fethedRepos: null,
  selected: []
};

export default (state = initState, action) => {
  switch (action.type) {
    case REPOS_SELECTED:
      return Object.assign({}, state, { selected: action.payload });
    case REPOS_FETCHED:
      return Object.assign({}, state, { fethedRepos: action.payload });
    default:
      return state;
  }
};
