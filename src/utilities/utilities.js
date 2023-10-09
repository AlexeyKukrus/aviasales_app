export const onSortTickets = (tickets, tab) => {
  switch (tab) {
    case 'cheapest':
      return tickets.sort((a, b) => (a.price > b.price ? 1 : -1));

    case 'fast':
      return tickets.sort((a, b) => {
        const aSum = a.segments[0].duration + a.segments[1].duration;
        const bSum = b.segments[0].duration + b.segments[1].duration;
        return aSum > bSum ? 1 : -1;
      });

    case 'optimal':
      return tickets.sort((a, b) => {
        const aSum = a.segments[0].duration + a.segments[1].duration;
        const bSum = b.segments[0].duration + b.segments[1].duration;
        return aSum + a.price > bSum + b.price ? 1 : -1;
      });

    default:
      return tickets;
  }
};

export const filterTickets = (reducerFilter, sortTickets) => {
  let newArr = [];
  reducerFilter.forEach((element) => {
    if (element.checked) newArr.push(element.value);
  });
  return sortTickets.filter((ticket) => {
    const count = ticket.segments[0].stops.length + ticket.segments[1].stops.length;
    return newArr.includes(count.toString());
  });
};
