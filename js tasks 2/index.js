function summ(...args){
  /* if(b){
  return a+b}
  return function(c){
  return a+c} */

  if(args.length===2)
  {return args[0]+args[1]}
  return function (b){
  return args[0]+b
  }
}
console.log(summ(2,3))
console.log(summ(2)(3))








