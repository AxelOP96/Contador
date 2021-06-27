const count = document.querySelector(".count"); 
//const add = document.querySelector(".sumar");
//const resetCount = document.querySelector(".reset");
//const sub = document.querySelector(".restar");
const buttons = document.querySelector(".buttons");

buttons.addEventListener("click", (e) => {
    if (e.target.classList.contains("sumar")) {
        count.innerHTML++;
        setColor();
    }
    if (e.target.classList.contains("reset")) {
        count.innerHTML = 0;
        setColor();
    }
    if (e.target.classList.contains("restar")) {
        count.innerHTML--;
        setColor();
    }
});

function setColor() {
    if (count.innerHTML > 0) {
        count.getElementsByClassName.color = "yellow";
    } else if (count.innerHTML < 0) {
        count.getElementsByClassName.color = "red";
    } else {
        count.style.color = "white";
    }
}

//add.addEventListener("click", () => {
//    count.innerHTML++;
//});
//sub.addEventListener("click", () => {
//    count.innerHTML--;
//});
//resetCount.addEventListener("click", () => {
//    count.innerHTML = 0;
//}); 