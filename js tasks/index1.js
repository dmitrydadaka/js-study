const arr= [1, 2,2,2, 3, 4, 5,3,3, 6, 7, 8, 9,10,3]
arr.sort((a,b)=>a-b)
console.log(arr)
console.log(count(arr,3))
console.log(searchEl(arr, 8))

function searchEl(arr, el) {
  
 let max = arr.length
 let min = -1
  while (max - min > 1) {
    const a = Math.floor((min+max)/ 2)
    if(arr[a]===el)
    {return a}

    if (arr[a] > el) {
      max = a
    } else {1
      min = a
    }
    
    }
  return -1
}

function count(arr,el){
    const countEL=searchEl(arr,el)
    if(countEL===0){
        return 0
    }
    let u=countEL
    while(arr[u]===el){
        u--
    }
    let k=countEL
    while(arr[k]===el){
        k++
    }
    return k-u-1

}
