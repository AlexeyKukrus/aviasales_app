import { TOGGLE_FILTER, TAB_CHEAPEST, TAB_FAST, TAB_OPTIMAL } from './action-types';

export const toggleFilter = (id) => ({ type: TOGGLE_FILTER, payload: { id } });

export const onTabCheapest = () => ({ type: TAB_CHEAPEST });
export const onTabFast = () => ({ type: TAB_FAST });
export const onTabOptimal = () => ({ type: TAB_OPTIMAL });
