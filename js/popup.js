export function getPopup() {
    const exitBtn = document.querySelectorAll(".popup-exit")
    const btn = document.querySelectorAll(".btn-form")
    const popupBg = document.querySelector(".popup-bg")
    const body = document.querySelector("body")

    for(const el of btn){
        el.addEventListener("click", toggleActiveClass)
    }
    for(const el of exitBtn){
        el.addEventListener("click", toggleActiveClass)
    }

    function toggleActiveClass(ev) {
        for(const el of btn){
            if(el.id === ev.target.id) {
                ev.preventDefault();
                popupBg.classList.toggle("active");
                body.style.cssText=`overflow: hidden;`
            }
        }
        for(const el of exitBtn){
            if(el.id === ev.target.id) {
                ev.preventDefault();
                popupBg.classList.toggle("active");
                body.style.cssText=`overflow: auto;`
            }
        }
    }
}