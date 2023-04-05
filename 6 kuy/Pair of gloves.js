let gloves = ["red", "red", "red", "red", "red", "red"];

function numberOfPairs(gloves) {
    let count = 0; // создаем счетчик для подсчета пар
    const pairs = {}; // создаем объект для хранения информации о цвете каждой перчатки и ее наличии в паре

    for (const color of gloves) { // проходимся по каждой перчатке в массиве gloves
      if (pairs[color]) { // если перчатка уже имеет пару
        count++; // увеличиваем счетчик пар на 1
        pairs[color] = false; // помечаем, что этот цвет перчатки больше не имеет пары
      } else {
        pairs[color] = true; // помечаем, что этот цвет перчатки еще не имеет пары
      }
    }
    return count; // возвращаем счетчик пар
  }

console.log(numberOfPairs(gloves))