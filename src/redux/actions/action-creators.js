import { getTicketsData } from '../../services/get-tickets';

import {
  TOGGLE_FILTER,
  TAB_CHEAPEST,
  TAB_FAST,
  TAB_OPTIMAL,
  FETCH_TICKETS_START,
  FETCH_TICKETS_SUCCESS,
  FETCH_TICKETS_FAILURE,
} from './action-types';

export const toggleFilter = (id) => ({ type: TOGGLE_FILTER, payload: { id } });

export const onTabCheapest = () => ({ type: TAB_CHEAPEST });
export const onTabFast = () => ({ type: TAB_FAST });
export const onTabOptimal = () => ({ type: TAB_OPTIMAL });

export const fetchTicketsStart = () => ({ type: FETCH_TICKETS_START });
export const fetchTicketsSuccess = (tickets) => ({
  type: FETCH_TICKETS_SUCCESS,
  payload: tickets,
});
export const fetchTicketsFailure = (error) => ({
  type: FETCH_TICKETS_FAILURE,
  payload: error,
});

export const fetchTickets = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_TICKETS_START });
    try {
      const ticketsData = await getTicketsData();
      dispatch({ type: FETCH_TICKETS_SUCCESS, payload: ticketsData });
    } catch (error) {
      dispatch({ type: FETCH_TICKETS_FAILURE, payload: error.message });
    }
  };
};

const getData = async (id, dispatch) => {
  try {
    const response = await getTicketsData(id);
    const { tickets, stop } = response;
    if (stop) return dispatch(fetchTicketsStart());
    else if (tickets.length) {
      dispatch(fetchTicketsSuccess(tickets));
      getData(id, dispatch);
    }
  } catch (e) {
    if (e.message === 'Status code 500') {
      console.error(e.message);
      getData(id, dispatch);
    } else {
      dispatch(fetchTicketsFailure(e.message));
    }
  }
};

export const getDataId = () => {
  return async (dispatch) => {
    const id = await getTicketsData();
    await getData(id, dispatch);
  };
};
