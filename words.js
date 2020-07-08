// function findMostUsedWord(targetString) {
//   const words = [...targetString.matchAll(/\b(\w+?)\b/gi)].map(
//     (match) => match[1]
//   );
//   const occurencesOfEachWord = {};

//   for (const word of words) {
//     if (occurencesOfEachWord[word]) {
//       occurencesOfEachWord[word]++;
//     } else {
//       occurencesOfEachWord[word] = 1;
//     }
//   }

//   return Object.fromEntries(
//     Object.entries(occurencesOfEachWord)
//       .sort(
//         ([wordA, occurencesA], [wordB, occurencesB]) =>
//           occurencesB - occurencesA
//       )
//       .slice(0, 10)
//   );
// }

// const testCase1 =
//   "There are very few birds in the sky, who are not really birds, ol' timey, really are are, hey dude, ol' ol'.";
// console.log(findMostUsedWord(testCase1));

function iterativeFlatten(arr) {
  const res = [];

  while (arr.length > 0) {
    const value = arr.shift();
    if (Array.isArray(value)) {
      arr = value.concat(arr);
    } else {
      res.push(value);
    }
  }

  return res;
}

function recursiveFlatten(arr, result = []) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      recursiveFlatten(arr[i], result);
    } else {
      result.push(arr[i]);
    }
  }

  return result;
}

const test = [
  0,
  1,
  [
    2,
    [
      3,
      4,
      [5, 6, [7]],
      [8, 9],
      [10, [11, 12, 13, [14, [15, 16, 17, 18, [19, 20]]]]],
    ],
    [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
  ],
];

function benchmark(iterations, fn) {
  const results = [...Array(iterations).keys()].map(() => {
    const start = Date.now();
    fn([
      0,
      1,
      [
        2,
        [
          3,
          4,
          [5, 6, [7]],
          [8, 9],
          [10, [11, 12, 13, [14, [15, 16, 17, 18, [19, 20]]]]],
        ],
        [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
      ],
    ]);
    fn([
      0,
      1,
      [
        2,
        [
          3,
          4,
          [5, 6, [7]],
          [8, 9],
          [10, [11, 12, 13, [14, [15, 16, 17, 18, [19, 20]]]]],
        ],
        [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
      ],
    ]);
    fn([
      0,
      1,
      [
        2,
        [
          3,
          4,
          [5, 6, [7]],
          [8, 9],
          [10, [11, 12, 13, [14, [15, 16, 17, 18, [19, 20]]]]],
        ],
        [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
      ],
    ]);
    const end = Date.now();
    return end - start;
  });

  const avg = results.reduce((sum, i) => sum + i, 0) / iterations;
  return avg;
}

const n = 10000;
print(`recursive average: ${benchmark(n, recursiveFlatten)}`);
print(`iterative average: ${benchmark(n, iterativeFlatten)}`);

// printf "v8\n" && v8 words.js && printf "\nspidermonkey\n" && sm words.js && printf "\njavascriptcore\n" && jsc words.js
