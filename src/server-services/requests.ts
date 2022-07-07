export const fetchData = async () => {
  const data = await fetch('http://localhost:5555/goods');
  const json = await data.json();
  return json;
};
