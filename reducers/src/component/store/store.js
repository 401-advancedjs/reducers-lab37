import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import sport from '../decks/decks-reducer.js';
import team from '../cards/cards-reducer.js';

let reducers = combineReducers({
  sport,
  team
});

export default () => createStore(reducers, composeWithDevTools());