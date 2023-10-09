import React from 'react';
import { Spin } from 'antd';

import classes from './loader.module.scss';

const Loader = () => {
  return <Spin className={classes.loader}></Spin>;
};

export default Loader;
