function createFunctions(n) {
    var callbacks = []; // Создаем пустой массив функций

    for (let i=0; i<n; i++) { // Начинаем цикл, итерирующий от 0 до n
      callbacks.push(function() { // Для каждой итерации цикла создаем новую функцию и добавляем ее в массив
        return i; // Функция возвращает значение i на момент создания
      });
    }

    return callbacks; // Возвращаем массив из созданных функций
  }
  /*For example when I do have a block of functions and I do need to use function in function or recrusion or somenthing
  the nested function will adress to the external variable and if you use var we can get Closure Problem because on each iteration
  var is the same values but when we use let , variabile will be like block model view and on each iteration of loop will create new variabile
  with let and not stay on the same
  */