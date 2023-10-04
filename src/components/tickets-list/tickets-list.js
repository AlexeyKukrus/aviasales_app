import React from 'react';

import Ticket from '../ticket/ticket';

import classes from './tickets-list.module.scss';

const TicketsList = () => {
  return (
    <>
      <ul className={classes.tickets__list}>
        <Ticket />
        <Ticket />
        <Ticket />
      </ul>
      <button className={classes.button__more}>Показать еще 5 билетов!</button>
    </>
  );
};

export default TicketsList;
