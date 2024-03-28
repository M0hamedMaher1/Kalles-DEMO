window.addEventListener("scroll", function(){
    const nav = document.querySelector(".big-nav");
    let x = scrollY;
    if(x > 200){
        nav.style.transform = "translateY(0)";
    }else{
        nav.style.transform = "translateY(calc(-100% + -2px))";
    };
});

let bars = document.querySelectorAll(".bars");
let close1 = document.querySelector(".close1");
let aside = document.querySelector(".aside1");

bars.forEach((item) => {
    item.addEventListener("click", function(){
        aside.style.transform = "translateX(0)";
    });
})

close1.addEventListener("click", function(){
    aside.style.transform = "translateX(calc(-100% + -50px))";
});