export const getTicketsData = async (searchId) => {
  const url = new URL('https://aviasales-test-api.kata.academy/tickets');
  url.searchParams.set('searchId', searchId);
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Status code ${response.status}`);
  const req = await response.json();
  const { tickets, stop } = req;
  return { tickets, stop };
};
