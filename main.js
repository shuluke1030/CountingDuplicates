function duplicateCount(text){
    const count = {};
    let duplicates = 0;
  
    for (let char of text) {
      char = char.toLowerCase(); 
  
      if (count[char]) {
        if (count[char] === 1) {
          duplicates++;
        }
        count[char]++;
      } else {
        count[char] = 1;
      }
    }
  
    return duplicates;
  
}

console.log(duplicateCount("Indivisibility"));