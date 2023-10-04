import React from 'react';

import classes from './ticket.module.scss';
import logo from './S7_logo.png';
const Ticket = () => {
  return (
    <li className={classes.ticket}>
      <div className={classes.ticket__top}>
        <span className={classes.ticket__price}>13 400 P</span>
        <img src={logo} alt="S7_logo" />
      </div>
      <div>
        <div className={classes.ticket__info}>
          <div>
            <p className={classes.ticket__info_title}>MOW – HKT</p>
            <p className={classes.ticket__info_descr}>10:45 – 08:00</p>
          </div>
          <div>
            <p className={classes.ticket__info_title}>В пути</p>
            <p className={classes.ticket__info_descr}>21ч 15м</p>
          </div>
          <div>
            <p className={classes.ticket__info_title}>2 пересадки</p>
            <p className={classes.ticket__info_descr}>HKG, JNB</p>
          </div>
        </div>
        <div className={classes.ticket__info}>
          <div>
            <p className={classes.ticket__info_title}>MOW – HKT</p>
            <p className={classes.ticket__info_descr}>11:20 – 00:50</p>
          </div>
          <div>
            <p className={classes.ticket__info_title}>В пути</p>
            <p className={classes.ticket__info_descr}>13ч 30м</p>
          </div>
          <div>
            <p className={classes.ticket__info_title}>2 пересадки</p>
            <p className={classes.ticket__info_descr}>HKG</p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Ticket;
