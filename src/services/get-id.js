export const getSearchId = async () => {
  const url = new URL('https://aviasales-test-api.kata.academy/search');
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Status code ${response.status}`);
  const req = await response.json();
  const { searchId } = req;
  return await searchId;
};
