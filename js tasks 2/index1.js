const summ1=(x,y)=>x+y

Function.prototype.bind2=function(context, ...args){
    return (...args2)=>{
      return  this.apply(context, args.concat(args2))
    }

}
const plusTen=summ1.bind2(undefined, 10)
console.log(plusTen(19))

console.log(plusTen(190))