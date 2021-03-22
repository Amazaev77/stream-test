export const fetchData = (api: string) => {
  return (
    fetch(`https://jsonplaceholder.typicode.com/${api}?_start=0&_limit=20`)
      .then(response => response.json())
  );
}