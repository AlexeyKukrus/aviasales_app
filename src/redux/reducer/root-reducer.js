import { combineReducers } from 'redux';

import { reducerFilter } from './reducer-filter';
import { reducerTabs } from './reducer-tabs';

const rootReducer = combineReducers({
  reducerFilter,
  reducerTabs,
});

export default rootReducer;
