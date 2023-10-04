import React from 'react';

import Logo from '../logo/logo';
import Filters from '../filters/filters';
import Tabs from '../tabs/tabs';
import TicketsList from '../tickets-list/tickets-list';

import classes from './app.module.scss';

const App = () => {
  return (
    <div className={classes.container}>
      <Logo />
      <main className={classes.app}>
        <Filters />
        <div className={classes.app__main}>
          <Tabs />
          <TicketsList />
        </div>
      </main>
    </div>
  );
};

export default App;
