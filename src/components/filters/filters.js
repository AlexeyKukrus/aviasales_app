import React from 'react';

import classes from './filters.module.scss';

const Filters = () => {
  return (
    <div className={classes.filters}>
      <h2 className={classes.filters__title}>Количество пересадок</h2>
      <ul className={classes.filters__list}>
        <li className={classes.filters__item}>
          <label className={classes.filters__label}>
            <input type="checkbox" className={classes.filters__checkbox} />
            <span className={classes.filters__text}>Все</span>
          </label>
        </li>
        <li className={classes.filters__item}>
          <label className={classes.filters__label}>
            <input type="checkbox" className={classes.filters__checkbox} />
            <span className={classes.filters__text}>Без пересадок</span>
          </label>
        </li>
        <li className={classes.filters__item}>
          <label className={classes.filters__label}>
            <input type="checkbox" className={classes.filters__checkbox} />
            <span className={classes.filters__text}>1 пересадка</span>
          </label>
        </li>
        <li className={classes.filters__item}>
          <label className={classes.filters__label}>
            <input type="checkbox" className={classes.filters__checkbox} />
            <span className={classes.filters__text}>2 пересадки</span>
          </label>
        </li>
        <li className={classes.filters__item}>
          <label className={classes.filters__label}>
            <input type="checkbox" className={classes.filters__checkbox} />
            <span className={classes.filters__text}>3 пересадки</span>
          </label>
        </li>
      </ul>
    </div>
  );
};

export default Filters;
