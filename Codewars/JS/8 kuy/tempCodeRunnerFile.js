function buzz(n){
    for(let i = 0; i < n.length; i++){
        if(i % 3 === 0 && i % 5 === 0){
            return console.log("FIZZBUZZ")
        }
    }
}

buzz(100)