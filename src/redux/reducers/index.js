import { combineReducers } from 'redux';
import errors from './errorsReducer';
import loginMode from './loginModeReducer';
import user from './userReducer';
import searchlist from './searchReducer'
import archive from './archiveReducer'
import gamePage from './gameReducer'
import genre from './genreReducer'
import userSearch from './userSearchReducer'
import friends from './friendReducer'
import favorite from './favoriteReducer'
import favoriteList from './favoriteListReducer'
// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  loginMode, // will have a value of 'login' or 'registration' to control which screen is shown
  user,
  searchlist,
  archive,
  gamePage,
  genre,
  userSearch,
  friends,
  favorite,
  favoriteList, // will have an id and username if someone is logged in
});

export default rootReducer;
