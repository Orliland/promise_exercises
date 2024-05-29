/*

Fetch data in parallel

Using fetchSimulator simulate fetching data from three different URLs in parallel.

Each "fetch" will be represented by a Promise that resolves after a delay taken from the delays array.

Use Promise.all to wait for all these Promises to resolve and then process the results.

*/

// INPUT
const delays = [800, 1200, 1000];
const URLs = [
  "https://google.com",
  "https://youtube.com",
  "https://facebook.com",
];

const fetchSimulator = (url, delay) => {
  return new Promise((resolve) =>
    setTimeout(() => resolve(`Data from ${url}`), delay)
  );
};

let promises = URLs.map((url, index) => {
  return fetchSimulator(url, delays[index]);
});

Promise.all(promises).then((result) => console.log(result));
