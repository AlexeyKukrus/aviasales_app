import React from 'react';

import Logo from '../logo/logo';
import Filters from '../filters/filters';
import Tabs from '../tabs/tabs';
import TicketsList from '../tickets-list/tickets-list';

import classes from './app.module.scss';

const App = () => {
  /*  const [searchId, setSearchId] = useState();
  const [tickets, setTickets] = useState([]);
  useEffect(() => {
    fetch('https://aviasales-test-api.kata.academy/search')
      .then((res) => res.json())
      .then((res) => {
        console.log('res', res);
        setSearchId(res.searchId);
      })
      .catch((e) => console.log(e));
  }, []);
  useEffect(() => {
    if (searchId) {
      // eslint-disable-next-line no-inner-declarations
      async function subscribe() {
        let responce = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`);
        if (responce.status === 502 || responce.status === 500) {
          await subscribe();
        } else if (responce.status !== 200) {
          console.error(responce.statusText);
          await new Promise((resolve) => setTimeout(resolve, 1000));
          await subscribe();
        } else {
          let ticketsPart = await responce.json();
          setTickets(...tickets, ticketsPart.tickets);
          console.log(ticketsPart);
          if (!ticketsPart.stop) {
            await subscribe();
          } else {
            console.log(tickets);
          }
        }
      }
      subscribe();
    }
  }, [searchId]);*/
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
