export async function getTicketsData() {
  try {
    const searchResponse = await fetch('https://aviasales-test-api.kata.academy/search');
    const searchResult = await searchResponse.json();
    const searchId = searchResult.searchId;

    let ticketsResult;
    let retryCount = 0;

    while (!ticketsResult) {
      const ticketsResponse = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`);
      if (ticketsResponse.status === 500) {
        retryCount++;
        if (retryCount === 5) {
          throw new Error('Failed to fetch tickets. Max retry count reached!');
        }
        await new Promise((resolve) => setTimeout(resolve, 1000));
      } else {
        ticketsResult = await ticketsResponse.json();
        console.log(ticketsResult);
      }
    }

    return ticketsResult;
  } catch (error) {
    console.error('Error while fetching tickets:', error);
    return [];
  }
}
