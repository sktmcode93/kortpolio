const bgAnimation = (direction) => {
    const bgs = document.querySelectorAll(".bgs");
    if(direction === "up"){
        bgs.forEach(i => i.style.animation = "bg-upsize 60s linear");
        setTimeout(() => {
            bgAnimation("down");
        }, 60000);
    }
    else {
        bgs.forEach(i => i.style.animation = "bg-downsize 60s linear");
        setTimeout(() => {
            bgAnimation("up");
        }, 60000);
    }
}

window.addEventListener("load", () => {
    bgAnimation("up");
})