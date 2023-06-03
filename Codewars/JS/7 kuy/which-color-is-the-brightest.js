function brightest(colors){
    let index = 0;
    let maxValue = 0;
    for(let i = 0; i < colors.length; i++) {
      let color = colors[i];
      let r = parseInt(color.slice(1,3),16);
      let g = parseInt(color.slice(3,5),16);
      let b = parseInt(color.slice(5,7),16);
      let value = Math.max(r,g,b)
      if (value > maxValue) {
        maxValue = value
        index = i
      }
    }
    return colors[index]
  }