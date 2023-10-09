import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import * as actions from '../../redux/actions/action-creators.js';

import classes from './filters.module.scss';

const Filters = () => {
  const filter = useSelector((state) => state.reducerFilter);
  const { toggleFilter } = actions;
  const dispatch = useDispatch();

  const handleChange = (value) => {
    dispatch(toggleFilter(value));
  };

  return (
    <div className={classes.filters}>
      <h2 className={classes.filters__title}>Количество пересадок</h2>
      <ul className={classes.filters__list}>
        {filter.map((filter) => (
          <li key={filter.value} className={classes.filters__item}>
            <label className={classes.filters__label}>
              <input
                type="checkbox"
                className={classes.filters__checkbox}
                checked={filter.checked}
                onChange={() => handleChange(filter.value)}
              />
              <span className={classes.filters__text}>{filter.label}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filters;
