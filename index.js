const text = document.getElementById("backgroundtext");

const undeline = document.getElementById('underline');

const cursorInner = document.getElementById("cursor-inner");
const cursorOuter = document.getElementById("cursor-outer");

var cursorScale = document.querySelectorAll('.cursor-hover');

let navlinks = document.querySelectorAll('.navtexts');
let sections = document.querySelectorAll('.section');

const header = document.getElementById('header');

const sendMessage = document.getElementById('sendmessage');

const nametext = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('msg');

// place underline when first load
let x = document.getElementById('navhome');
undeline.style.left = `${x.offsetLeft}px`;

// Background text
text.scroll(200, 0);

// Cursor movement
window.addEventListener("mousemove", function (e) {
    const posX = e.clientX;
    const posY = e.clientY;

    cursorInner.style.left = `${posX}px`;
    cursorInner.style.top = `${posY}px`;

    // cursorOuter.style.left = `${posX}px`;
    // cursorOuter.style.top = `${posY}px`;

    cursorOuter.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 150, fill: "forwards" });
});

// Cursor hover effect
cursorScale.forEach(link => {
    link.addEventListener('mouseleave', () => {
        cursorInner.classList.remove('grow-cursor');
        cursorOuter.classList.remove('vanish-cursor');
    });
    link.addEventListener('mousemove', () => {
        cursorInner.classList.add('grow-cursor');
        cursorOuter.classList.add('vanish-cursor');
    });
})


window.onscroll = () => {

    // Header height change
    if (window.scrollY > 10) {
        header.classList.add('whitebar');
    }
    if (window.scrollY < 10) {
        header.classList.remove('whitebar');
    }

    // Navbar highlihgt section effect
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top+300 >= offset && top+300 < offset + height){
            navlinks.forEach(link => {
                link.classList.remove('active');
                document.getElementById(`nav${id}`).classList.add('active');

                undeline.animate({
                    left: `${document.getElementById(`nav${id}`).offsetLeft}px`,
                }, { duration: 500, fill: "forwards", easing: "ease-in-out"}); // todo
            })
        }
    });
};

// projectslink.onclick = () => {
//     let ladingSection = document.getElementById('projects');
//     let land = ladingSection.offsetTop+(ladingSection.offsetHeight/2);
//     window.scrollTo(0, land);
//     console.log(projectslink.offsetLeft);
//     undeline.style.left = `${projectslink.offsetLeft}px`;
// }

navlinks.forEach(link => {
    link.onclick = () => {
        let ladingSection = document.getElementById(link.id.replace('nav', ''));
        let land = ladingSection.offsetTop;

        window.scrollTo({
            top: land,
            behavior: 'smooth'
        });
        // window.scrollTo(0, land);
        // undeline.style.left = `${link.offsetLeft}px`;

        // undeline.animate({
        //     left: `${link.offsetLeft}px`,
        // }, { duration: 300, fill: "forwards", easing: "ease-in-out"}); // todo
    }
})  


sendMessage.onclick = () => {
    if(nametext.value == '' || email.value == '' || message.value == ''){
        alert('Please fill all the fields');
        return}
    else{
        alert('Message Sent!');
    }
}