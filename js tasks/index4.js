/* function countWays(n){
    if(n<0){return 0}
    if (n===0){return 1}
    return countWays(n-1, c)+ countWays(n-2)+ countWays(n-3)
}
console.log(countWays(3)) */

let miss=0
let hit=0
function countWays(n, cashe = []) {
    if (n < 0) {
         miss++
         return 0
    }
    if (!cashe[n]) {
        miss++
        if (n === 0) { return cashe[n] = 1 
        }
        else {
            cashe[n] = countWays(n - 1, cashe) + countWays(n - 2, cashe) + countWays(n - 3, cashe)
        }
        
        return cashe[n]

    } else {
        hit++
        return cashe[n]
    }
}
console.log(countWays(100),hit,miss)

