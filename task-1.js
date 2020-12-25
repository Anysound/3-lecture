// объявление полифилла
function myForEach(arr, callback) {
  for (let i = 0, item = arr[i]; i < arr.length; i++) {
    item = arr[i];
    callback(item, i, arr);
  }
}

// объявление колбека
function f2(item, index) {
  console.log(`${index}: ${item}`);
}

// проверка работы полифилла
let array = [54, 2, 3, 4];

myForEach(array, f2);