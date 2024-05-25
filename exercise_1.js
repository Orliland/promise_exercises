/*

50% of the time works 100% of the time

Create a JavaScript Promise that, after a delay of 2 seconds, 
either resolves with the message "Hello World" or rejects 
with the error message "Error occurred".

The outcome (resolve or reject) should be determined by a 
random condition, ensuring a 50/50 chance of either 
occurring each time the code runs.

*/

const randomPromise = new Promise((resolve, reject) => {
  const probability = Math.floor(Math.random() * 10);
  if (probability > 5) {
    setTimeout(() => resolve("Hello World"), 2000);
  } else {
    setTimeout(() => reject("Error occurred"), 2000);
  }
});

// INPUT
randomPromise
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  });
