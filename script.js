const items = document.querySelectorAll(".reveal");

items.forEach((el,i) => {
    setTimeout(() => {
        el.classList.add("show");
    }, 1500 + i * 220);
});

const hero = document.getElementById("hero");

hero.addEventListener("mousemove", (e) => {
    hero.style.setProperty("--x", e.clientX + "px");
    hero.style.setProperty("--y", e.clientY + "px");
});

const bigword = document.querySelector(".big-word");

hero.addEventListener("mousemove", (e) => {
    const moveX = (e.clientX / window.innerWidth - 0.5) * -30;
    const moveY = (e.clientY / window.innerHeight - 0.5) * -15;
    bigword.style.transform = `translate(${moveX}px, ${moveY}px)`;
});