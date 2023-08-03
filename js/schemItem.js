export function sortSchemItems() {
    const img = document.querySelectorAll('.scheme__item-img');
    let positionX=img[0].getBoundingClientRect().top;
    let i = 0;
    const mediaQuery = window.matchMedia('(max-width: 880px)')
    if (mediaQuery.matches) {
    for(const el of img) {
        el.src = "./img/scheme/schem__item-bg-2.png"
    }
    }else{
    for(const el of img) {
        i++
        if(positionX === el.getBoundingClientRect().top){
            el.src = "./img/scheme/schem__item-bg-2.png"
        }
        else{
            if(el === img[img.length -1]){
                img[i -2].src = "./img/scheme/schem__item-bg-2.png"
            }
            else{
                positionX = el.getBoundingClientRect().top
                el.src = "./img/scheme/schem__item-bg-1.png"
                img[i -2].src = "./img/scheme/schem__item-bg-3.png"
            }  
        }
    }
    }
    img[0].src ="./img/scheme/schem__item-bg-1.png"
    img[img.length-1].src ="./img/scheme/schem__item-bg-3.png"
} 