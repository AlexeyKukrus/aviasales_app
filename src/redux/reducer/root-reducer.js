import { combineReducers } from 'redux';

import { reducerFilter } from './reducer-filter';
import { reducerTabs } from './reducer-tabs';
import { reducerTickets } from './reducer-tickets';

const rootReducer = combineReducers({
  reducerFilter,
  reducerTabs,
  reducerTickets,
});

export default rootReducer;
