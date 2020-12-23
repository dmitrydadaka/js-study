let arr= [1, 2, 3, 4, 5, 6, 7, 8, 9]

function searhEl(arr, el) {
  
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

  console.log(searhEl(arr, 8))