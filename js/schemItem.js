export function sortSchemItems() {
    let blocks = document.querySelectorAll('.scheme__item');
    let positionX=blocks[0].getBoundingClientRect().top;
    for(const el of blocks) {
        if(positionX === el.getBoundingClientRect().top){
            el.insertAdjacentHTML("afterbegin",
        `
        <img class="scheme__item-img" src="./img/scheme/schem__item-bg-1.png" alt="">
        `)
        }
    }
} 