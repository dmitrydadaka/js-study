var galleryEl = findInputUrl()
var photoContainerEl = saveImgInContainer(galleryEl)
var imageUrls = []

bindClickListenerInput(galleryEl, photoContainerEl, imageUrls)
restorImg(photoContainerEl, imageUrls)

function findInputUrl() {
    return document.querySelector(".js-new-photo")
}
function saveImgInContainer() {
    return document.querySelector(".js-photos")

}
function bindClickListenerInput(galleryEl, photoContainerEl, imageUrls) {
    galleryEl.addEventListener("keyup", (e) => {
        if (e.code == "Enter") {
            var src = galleryEl.value
            var li = document.createElement("li")
            li.innerHTML = `<img src= "${src}" />`
            photoContainerEl.append(li)
            //console.log("ura")
            imageUrls.push(src)
            localStorage.setItem("gallery", JSON.stringify(imageUrls))
        }
    })

}
function restorImg(photoContainerEl, imageUrls) {
    var imagesStr = localStorage.getItem("gallery")
    if (!!imagesStr) {
        var images = JSON.parse(imagesStr)
    }
    images.forEach((src) => {
        imageUrls.push(src)

        var li = document.createElement("li")
        li.innerHTML = `<img src= "${src}" />`
        photoContainerEl.append(li)

    });

}