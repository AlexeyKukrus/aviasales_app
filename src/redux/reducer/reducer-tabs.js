import { initialStateTabs } from '../initial-state';
import { TAB_CHEAPEST, TAB_FAST, TAB_OPTIMAL } from '../actions/action-types';

export const reducerTabs = (state = initialStateTabs, action) => {
  switch (action.type) {
    case TAB_CHEAPEST:
      return { ...state, tab: 'cheapest' };
    case TAB_FAST:
      return { ...state, tab: 'fast' };
    case TAB_OPTIMAL:
      return { ...state, tab: 'optimal' };
    default:
      return state;
  }
};
