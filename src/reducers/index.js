import { combineReducers } from 'redux';
import selectedRepos from './reducerRepos';

const allReducers = combineReducers({
  repos: selectedRepos
});

export default allReducers
