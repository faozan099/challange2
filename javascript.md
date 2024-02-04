1. Mencari data pada array
   Buat fungsi yang menerima parameter angka yg ingin dicari dan data array
   Kembalikan dalam bentuk number
   Kembalikan undefined jika tidak dikembalikan

2. Fizz Buzz Array
   Mencari mengubah angka fizz buzz
   Buat fungsi yang menerima parameter data array
   Kembalikan dalam bentuk boolean
---

1. function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return target;
        }
    }
    return undefined;
}

function linearSearchV2(arr, target) {
    return arr.includes(target) ? target : undefined;
}

2. function fizzBuzz(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 0 && arr[i] % 5 === 0) {
      res.push("FizzBuzz");
    } else if (arr[i] % 3 === 0) {
      res.push("Fizz");
    } else if (arr[i] % 5 === 0) {
      res.push("Buzz");
    } else {
      res.push(arr[i]);
    }
  }
  return res;
}

function fizzBuzzV2(arr) {
  return arr.map((num) => {
    if (num % 3 === 0 && num % 5 === 0) {
      return "FizzBuzz";
    } else if (num % 3 === 0) {
      return "Fizz";
    } else if (num % 5 === 0) {
      return "Buzz";
    } else {
      return num;
    }
  });
}