import { FETCH_TICKETS_START, FETCH_TICKETS_SUCCESS, FETCH_TICKETS_FAILURE, VIEW_MORE } from '../actions/action-types';
import { initialStateTickets } from '../initial-state';

export const reducerTickets = (state = initialStateTickets, action) => {
  switch (action.type) {
    case FETCH_TICKETS_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_TICKETS_SUCCESS:
      return {
        ...state,
        tickets: [...state.tickets, ...action.payload],
        loading: false,
      };
    case FETCH_TICKETS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case VIEW_MORE:
      return {
        ...state,
        counter: state.counter + 5,
      };
    default:
      return state;
  }
};
