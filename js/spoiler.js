export function getSpoiler() {
    const titles = document.querySelectorAll(".spoiler-title");
    const items = document.querySelectorAll(".spoiler-item");
    let w = 0;

    for( let i = 0; i < items.length; i++) {
        titles[i].addEventListener("click", toggleClass);
        w = titles[i].clientHeight;
        items[i].style.cssText = `height: ${w}px;`
    }

    function toggleClass(ev) {
        const title = ev.target;
        const item = ev.target.parentElement;
        const text = ev.target.nextElementSibling;
        
        text.classList.toggle('active');
        title.classList.toggle('active');

        if(item.classList[length+1] !== "active") {
            item.classList.add('active');
            let i = item.clientHeight
            let count = setInterval(function() {
                item.style.cssText = ` height: ${i}px;`;
                i++
                if(i === (title.clientHeight + text.clientHeight)) {
                    item.style.cssText = ` height: ${i}px;`;
                    clearInterval(count)
                }
            }, 0.1);
        }else if(item.classList[length+1] === "active") {
            item.classList.remove('active');
            let i = item.clientHeight
            let count = setInterval(function() {
                
                item.style.cssText = ` height: ${i}px;`;
                console.log(item.clientHeight)
                i--
                if(i === title.clientHeight) {
                    clearInterval(count)
                }
            }, 0.1);
        }
    }
}
getSpoiler()