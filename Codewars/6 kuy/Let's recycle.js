let arr =  [
    {"type": "shit", "marterial":[]},
    {"type": "rotten apples", "material": "organic"},
    {"type": "out of date yogurt", "material": "organic", "secondMaterial": "plastic"},
    {"type": "wine bottle", "material": "glass", "secondMaterial": "paper"},
    {"type": "amazon box", "material": "paper"},
    {"type": "beer bottle", "material": "glass", "secondMaterial": "paper"}
  ],
  newEmpty = [],
  newListGlass = [],
  newListSecondMaterial = [],
  newListOrganic = [],
  newListLast = [],
  result = [];

  for(const type of arr) {
    if(type.material === ""){
        newEmpty.push(type.type)
    }
  }

  for (const type of arr) {
    if(type.material === "glass"){
        newListGlass.push(type.type)
    }
    else if(type.material === "paper"){
        newListGlass.push(type.type)
    }
  }

  for (const type of arr) {
    if(type.secondMaterial === "paper"){
        newListSecondMaterial.push(type.type)
    }
  }

  for(const type of arr) {
    if(type.material === "organic"){
        newListOrganic.push(type.type)
    }
  }
  for(const type of arr) {
    if(type.secondMaterial === "plastic"){
        newListLast.push(type.type)
    }
  }
  result.push(newEmpty,newListGlass, newListSecondMaterial, newListOrganic, newListLast);

  console.log(result)
  console.log(newEmpty)

  function recycle(array) {
    let   newListGlass = [],
          newListSecondMaterial = [],
          newListOrganic = [],
          newListLast = [],
          result = [];

    for (const type of array) {
      if(type.material === "glass"){
          newListGlass.push(type.type)
      }
      else if(type.material === "paper"){
          newListGlass.push(type.type)
      }
    }

    for (const type of array) {
      if(type.secondMaterial === "paper"){
          newListSecondMaterial.push(type.type)
      }
    }

    for(const type of array) {
      if(type.material === "organic"){
          newListOrganic.push(type.type)
      }
    }
    for(const type of array) {
      if(type.secondMaterial === "plastic"){
          newListLast.push(type.type)
      }
    }
    result.push(newListGlass, newListSecondMaterial, newListOrganic, newListLast);
    return result;

  }