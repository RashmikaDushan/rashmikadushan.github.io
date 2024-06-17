const text = document.getElementById("backgroundtext");
text.scroll(200, 0);

const cursorInner = document.getElementById("cursor-inner");
const cursorOuter = document.getElementById("cursor-outer");

window.addEventListener("mousemove",function (e){
    const posX = e.clientX;
    const posY = e.clientY;

    cursorInner.style.left = `${posX}px`;
    cursorInner.style.top = `${posY}px`;

    // cursorOuter.style.left = `${posX}px`;
    // cursorOuter.style.top = `${posY}px`;

    cursorOuter.animate({
        left:`${posX}px`,
        top:`${posY}px`
    }, { duration: 300, fill:"forwards" });
});