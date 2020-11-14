const body = document.querySelector("body")
const avatar = document.querySelector(".avatar")
const sectionShare = document.querySelector(".share")
const network = document.querySelector(".network")
const shareNetwork = document.querySelector(".share-network")

shareNetwork.addEventListener("click", () => {
    if (body.clientWidth <= 768) {
        sectionShare.classList.toggle("mobile-device")
    }
    else if (body.clientWidth >= 768) {
        network.classList.toggle("desktop-device")
    }
})

