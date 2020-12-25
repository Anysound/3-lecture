// объявление функции 
const createDebounceFunction = (cb, ms) => {
  let timeoutId = null;
  
  clearTimeout(timeoutId);

  return function() {
    setTimeout(cb, ms)
  }
};

// объявление колбека
function logTrue() {
  console.log(true);
}

let f = createDebounceFunction(logTrue, 1000);

// отодвигаем таймер
setTimeout(f, 300);