// 1. Create a function called `delayedIncDec(n, mode, timeout)`

// - n: Initial number
// - mode: A string - either "inc" or "dec"
// - timeout: delay time in ms - should have a default time of 2.5 seconds if not provided
//   `delayedIncDec` returns a promise that resolves to the initial number increment or decremented - think about what might cause this promise to reject

// 2. Call this function three times with different values of n, modes, and timeouts
// 3. Log each value to the console.

const delayedIncDec = (n, mode, timeout = 2500) => {
  return new Promise((resolve, reject) => {
    if (typeof n !== "number") {
      reject(new Error("n must be a number"));
    }

    if (mode.toLowerCase() !== "inc" && mode.toLowerCase() !== "dec") {
      reject(new Error("Mode must be inc or Dec"));
    }

    if (timeout < 0) {
      reject(new Error("Timeout must be positive"));
    }
    setTimeout(() => {
      if (mode.toLowerCase() === "inc") {
        resolve(n + 1);
      }
      resolve(n - 1);
    }, timeout);
  });
};

delayedIncDec(10, "inc", 100).then((result) => console.log(result));
delayedIncDec(10, "dec", 200).then((result) => console.log(result));
delayedIncDec(20, "sdfsd", 300).catch((e) => console.log(e));
delayedIncDec(20, "dec", -300).catch((e) => console.log(e));
delayedIncDec("a", "dec", -300).catch((e) => console.log(e));

// # Delayed filter

// 1. Create a function called `delayedFilter(array, callback, timeout)`

// - n: Initial Array
// - callback: a filter function
// - timeout: delay time in ms - should have a default time of 2.5 seconds if not provided
//   `delayedFilter` returns a promise that resolves to the filtered array- think about what might cause this promise to reject

// 2. Call this function three times with different values of array, callback, timeout
// 3. Log each result to the console.

const delayedFilter = (arr, cb, timeout = 2500) => {
  return new Promise((resolve, reject) => {
    if (typeof cb !== "function") {
      reject(new Error("Cb must be a function"));
    }
    if (!Array.isArray(arr)) {
      reject(new Error("arr  must be an array"));
    }

    if (timeout < 0) {
      reject(new Error("timeout must be positive"));
    }

    setTimeout(() => {
      const filtered = arr.filter(cb);
      resolve(filtered);
    }, timeout);
  });
};

const isEven = (n) => n % 2 === 0;

delayedFilter([1, 2, 3, 4, 5], isEven, 500).then((result) =>
  console.log(result)
);
