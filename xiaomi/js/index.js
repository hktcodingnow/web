// let index = 1
// // 图片的下标
// function refresh(){
//     let carousel = document.querySelector(".carousel")
//
//     let width = getComputedStyle(carousel).width
//     width = Number(width.slice(0, -2))
//
//     carousel.querySelector(".container-round").style.left =
//         index * width * -1 + "px"
// }
// refresh()

let dots = document.querySelectorAll(".indicator");
dots.forEach((indicator, i) => {
    if (i === index) {
        indicator.classList.add(".indicator:hover");
    } else {
        indicator.classList.remove(".indicator:hover");
    }
});
