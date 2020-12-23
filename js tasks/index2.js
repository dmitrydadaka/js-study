function fact(n) {
    if (n === 0 || n === 1) {
        return 1
    }
    return n * fact(n - 1)
}
console.log(fact(5))

/* 
let counter=0
function foo(){
    counter++
    foo()
}
try { foo()}
catch(e){
    console.log(counter)
} */

function fact2(n) {
    const st = [[n, 1]]
    while (st.length > 0) {
        const [curr, result] = st.pop()

        if (curr === 0 || curr === 1) {
            return result
        }
        st.push([curr - 1, result * curr])
    }
}
console.log(fact2(1), fact2(3), fact2(5))
function fact3(n) {
    let result = 1
    for (let i = 1; i <= n; i++) {
        result *= i
    }
    return result
}
console.log(fact3(5))