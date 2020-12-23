//counter logic
let counterWidgetEl = findWidgetEl()
let counterValueEl = findValueEl()
bindClickListener(counterValueEl,counterWidgetEl)
restoreValue(counterValueEl)

function findWidgetEl(){
    return document.querySelector('.js-counter')
 }
 function findValueEl(){
 
     let value=document.querySelector('.js-counter-value')
     return value
  }


function bindClickListener(counterValueEl,counterWidgetEl){
    counterWidgetEl.addEventListener('click', () => {
        console.log('click')
        //increment counter and display new value
        var currentValue = counterValueEl.innerHTML
        console.log(currentValue)
        currentValue++
        //save to local storage
        localStorage.setItem("counter-value", currentValue)
    
        counterValueEl.innerHTML = currentValue
    })
}


//restore previous value
function restoreValue(counterValueEl){
    var savedCounterValue=localStorage.getItem("counter-value")
if(!!savedCounterValue){counterValueEl.innerHTML = savedCounterValue}}

