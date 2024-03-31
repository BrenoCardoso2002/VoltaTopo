window.addEventListener("scroll", function() {
    console.log(document.documentElement.scrollTop);
    if (document.documentElement.scrollTop > 144) {
        document.querySelector("button").classList.add("top");
    } else {
        document.querySelector("button").classList.remove("top");
    }
});

const VoltaTopo = () => {
    window.scroll({
        top: 0,
        behavior: "smooth",
    });
};

document.querySelector("button").onclick = VoltaTopo;