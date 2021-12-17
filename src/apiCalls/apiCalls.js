export const fetchData = (endPoint) => {
  return fetch(`http://localhost:3001/api/v1/${endPoint}`)
    .then(response => response.json())
    .then(data => data);
};