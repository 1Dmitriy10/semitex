export function getAnimation() {
    let btn = [];
    let deg = 90;
    btn = document.querySelectorAll(".btn")
    for(const el of btn) {
        el.addEventListener("mouseover", (event) => {           
            let anim = setInterval(function getAnim(){
                el.style.background = `linear-gradient(${deg++}deg, #F58634 0%, #E8363A 100%)`
            }, 2);
            el.style.transform = "scale(1.03)"
            el.style.transition = "0.2s"
            el.addEventListener("mouseout", (event) => {  
                clearInterval(anim)         
                el.style.background = `linear-gradient(90deg, #F58634 0%, #E8363A 100%)`
                el.style.transform = "scale(1)"
            })
        }) 
    }
}