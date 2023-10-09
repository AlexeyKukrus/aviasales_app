export const initialStateFilter = [
  { label: 'Все', value: 'all', checked: false },
  { label: 'Без пересадок', value: '0', checked: false },
  { label: '1 пересадка', value: '1', checked: false },
  { label: '2 пересадки', value: '2', checked: false },
  { label: '3 пересадки', value: '3', checked: false },
];

export const initialStateTabs = {
  tab: 'cheapest',
};

export const initialStateTickets = {
  tickets: [],
  loading: false,
  error: null,
  counter: 5,
};
