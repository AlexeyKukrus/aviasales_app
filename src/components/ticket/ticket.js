import React from 'react';
import { format } from 'date-fns';

import classes from './ticket.module.scss';

const Ticket = ({ item }) => {
  const { price, segments, carrier } = item;

  const createPrice = (price) => {
    return `${price.toString().replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, '$1 ')}`;
  };

  const createTransfers = (transfer) => {
    const textArr = ['пересадка', 'пересадки', 'пересадок'];
    let result = '';
    if (transfer === 1) result += textArr[0];
    if (transfer > 1 && result <= 4) result += textArr[1];
    if (transfer >= 4) result += textArr[2];
    return transfer ? `${transfer} ${result}` : 'Нет пересадок';
  };

  const createTimePeriod = (data, duration) => {
    const startTimePeriod = format(new Date(data), 'HH:mm');
    const endTimePeriod = format(new Date(new Date(data).getTime() + duration * 60000), 'HH:mm');
    return `${startTimePeriod} - ${endTimePeriod}`;
  };

  const createTime = (duration) => {
    return `${Math.trunc(duration / 60)}ч ${duration % 60}м`;
  };

  return (
    <li className={classes.ticket}>
      <div className={classes.ticket__top}>
        <span className={classes.ticket__price}>{createPrice(price)} P</span>
        <img src={`https://pics.avs.io/99/36/${carrier}.png`} alt={carrier} />
      </div>
      <div>
        <div className={classes.ticket__info}>
          <div>
            <p className={classes.ticket__info_title}>
              {segments[0].origin}-{segments[0].duration}
            </p>
            <p className={classes.ticket__info_descr}>{createTimePeriod(segments[0].date, segments[0].duration)}</p>
          </div>
          <div>
            <p className={classes.ticket__info_title}>В пути</p>
            <p className={classes.ticket__info_descr}>{createTime(segments[0].duration)}</p>
          </div>
          <div>
            <p className={classes.ticket__info_title}>{createTransfers(segments[0].stops.length)}</p>
            <p className={classes.ticket__info_descr}>{segments[0].stops.join(', ')}</p>
          </div>
        </div>
        <div className={classes.ticket__info}>
          <div>
            <p className={classes.ticket__info_title}>
              {segments[1].origin}-{segments[1].duration}
            </p>
            <p className={classes.ticket__info_descr}>{createTimePeriod(segments[1].date, segments[1].duration)}</p>
          </div>
          <div>
            <p className={classes.ticket__info_title}>В пути</p>
            <p className={classes.ticket__info_descr}>{createTime(segments[1].duration)}</p>
          </div>
          <div>
            <p className={classes.ticket__info_title}>{createTransfers(segments[1].stops.length)}</p>
            <p className={classes.ticket__info_descr}>{segments[1].stops.join(', ')}</p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Ticket;
