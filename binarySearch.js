const example = [1, 4, 8, 13, 64, 81];
const sorted = example.sort((a, b) => a - b);

function binarySearch(arr, element) {
  const mid = Math.floor(arr.length / 2);

  if (element === arr[mid]) {
    return true;
  } else if (element > arr[mid]) {
    return binarySearch(arr.slice(mid + 1), element);
  } else if (element < arr[mid]) {
    return binarySearch(arr.slice(0, mid), element);
  }

  return false;
}

function binaryStringSearch(str, char) {
  str = str.split('').sort();
  console.log(str);
  const mid = Math.floor(str.length / 2);

  if (char === str[mid]) {
    return true;
  } else if (char > str[mid]) {
    return binarySearch(str.slice(mid + 1), char);
  } else if (char < str[mid]) {
    return binarySearch(str.slice(0, mid), char);
  }

  return false;
}

console.log(binaryStringSearch('pizza', 'r'));
// console.log(binarySearch(sorted, 13));
