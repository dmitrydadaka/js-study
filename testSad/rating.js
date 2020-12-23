//find all stars
var stars = findAllStars()
//bind listener to stars
bindClickListener(stars)
//restore previous value
restorePreviousValue(stars)




function findAllStars() {
    let stars = document.querySelectorAll(".js-stars img")
    return stars//return outside function
}
function bindClickListener(stars) {
    stars.forEach(star => {
        star.addEventListener("click", (e) => {
            //console.log("click")
            //remove all active classes
            let activeStars = document.querySelectorAll(".js-stars img.active")
            activeStars.forEach(star => {
                star.classList.remove("active")
            })
            var clickedImgIndex = 0
            var clickedStar = e.currentTarget
            for (let i = 0; i < stars.length; i++) {
                var star = stars[i]
                star.classList.add("active")
                if (star === clickedStar) {
                    clickedImgIndex=i

                    break
                }
            }
            //save clicked img order number
            localStorage.setItem("rating-value", clickedImgIndex)


            //add active classes on clicked img and pre img

        })
    });

}
function restorePreviousValue(stars) {
    var savedValue=localStorage.getItem("rating-value")
    if(!!savedValue){
        savedValue=+savedValue
        for (let i = 0; i < stars.length; i++) {
            var star = stars[i]
            star.classList.add("active")
            if (i === savedValue) {

                break
            }
        }
    }
}
