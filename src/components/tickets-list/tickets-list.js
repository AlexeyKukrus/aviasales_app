import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import Ticket from '../ticket/ticket';
import Loader from '../loader/loader';
import { ErrorWarning, ErrorError } from '../errors/errors';
import * as actions from '../../redux/actions/action-creators';
import { filterTickets, onSortTickets } from '../../utilities/utilities';

import classes from './tickets-list.module.scss';

const TicketsList = () => {
  const [counter, setCounter] = useState(5);
  const reducerTabs = useSelector((state) => state.reducerTabs);
  const reducerFilter = useSelector((state) => state.reducerFilter);
  const reducerTickets = useSelector((state) => state.reducerTickets);
  const dispatch = useDispatch();
  const { tab } = reducerTabs;
  const { tickets, loading, error } = reducerTickets;

  useEffect(() => {
    const { getDataId } = actions;
    dispatch(getDataId());
  }, []);

  const sortFilterTickets = useMemo(() => {
    return filterTickets(reducerFilter, onSortTickets(tickets, tab));
  }, [reducerFilter, onSortTickets, tickets, tab]);

  return (
    <>
      {!loading && !error ? <Loader /> : null}
      {error ? <ErrorError message={error} /> : null}
      <ul className={classes.tickets__list}>
        {sortFilterTickets.slice(0, counter).map((ticket) => {
          return <Ticket key={uuidv4()} item={ticket} />;
        })}
        {!sortFilterTickets.length && !error ? <ErrorWarning /> : null}
      </ul>
      {sortFilterTickets.length ? (
        <button onClick={() => setCounter(counter + 5)} className={classes.button__more}>
          Показать еще 5 билетов
        </button>
      ) : null}
    </>
  );
};

export default TicketsList;
