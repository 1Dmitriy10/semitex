export function getGradientBtn() {
    let elements = [], btn, content;
    elements = document.querySelectorAll(".products__item")
    btn = document.querySelectorAll(".products__btn");
    for(let el = 0; el < elements.length; el++) {
        elements[el].addEventListener("mouseover", (event) => {
            content = btn[el].innerHTML
            btn[el].classList.add("active");
            btn[el].innerHTML="ЗАКАЗАТЬ";
            elements[el].addEventListener("mouseout", (event) => {  
                btn[el].classList.remove("active")
                btn[el].innerHTML= content;
            })
        }) 
    }
  }