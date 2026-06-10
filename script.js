function isStrong(n){
  let fact = 1;
  let sumfact = 0;
  let copy = n;
  while(n>0){
    let rem = n%10;
    for(let i = 1; i<= rem; i++){
      fact = fact*i; 
    };
    
    sumfact = sumfact + fact;

    n = Math.floor(n/10);
  };
  if (sumfactorial == copy) {console.log("Strong")}
  else {console.log("Weak")};
}