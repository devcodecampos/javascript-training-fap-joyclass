const arr = [15, 8, 10, 25, 12, 30, 5, 20, 18, 7];
const sortedArr = arr.sort((x, y) => x - y);
const numberToSearch = 20;

const binarySearch = (arr, numberToSearch) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === numberToSearch) {
      return mid;
    } else if (arr[mid] < numberToSearch) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
};

const index = binarySearch(sortedArr, numberToSearch);

const numberFound = `O número ${numberToSearch} foi encontrado na posição ${index}.`;
const numberNotFound = `O número ${numberToSearch} não foi encontrado no array.`;

index !== -1 ? console.log(numberFound) : console.log(numberNotFound);