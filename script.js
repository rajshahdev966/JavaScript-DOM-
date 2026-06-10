function isStrong(n){
  let factorial = 1;
  let sumfactorial = 0;
  let copy = n;
  while(n>0){
    let rem = n%10;
    for(let i = 1; i<= rem; i++){
      factorial = factorial*1; 
    };
    
    sumfactorial = sumfactorial + factorial;

    n = Math.floor(n/10);
  };
  if (sumfactorial === copy) console.log("Strong")
  else console.log("Weak");
}