/*

The fastest response wins

Using fetchSimulator simulate fetching data from three different URLs
with a twist.

Each 'fetch' will ve represented by a Promise that resolve 
after a delay taken from the delays array.

Use Promise.race to get the fastest response!

*/

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

Promise.race(promises).then((result) => console.log(result));
