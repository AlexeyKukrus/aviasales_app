import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as actions from '../../redux/actions/action-creators';
import Ticket from '../ticket/ticket';

import classes from './tickets-list.module.scss';

const TicketsList = () => {
  const reducerTickets = useSelector((state) => state.reducerTickets);
  const dispatch = useDispatch();
  const { tickets } = reducerTickets;

  useEffect(() => {
    const { getDataId } = actions;
    dispatch(getDataId());
  }, []);

  return (
    <>
      <ul className={classes.tickets__list}>
        {tickets.map((ticket) => (
          <Ticket key={ticket.id} item={ticket} />
        ))}
      </ul>
      <button className={classes.button__more}>Показать еще 5 билетов!</button>
    </>
  );
};

export default TicketsList;
