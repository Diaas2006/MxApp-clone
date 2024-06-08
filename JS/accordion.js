const accordion = document.querySelectorAll('.faq__acordion')
const accordionBody = document.querySelectorAll('.faq__acordion__body')

function accordionFunction(indice){
    for( let i = 0; i < Math.min(accordion.length, accordionBody.length); i++){           
        if(i != indice){
            accordion[i].classList.remove('show__header')
            accordionBody[i].classList.remove('show__body')
        }

        accordion[indice].classList.toggle('show__header')
        accordionBody[indice].classList.toggle('show__body')
    }
}

accordion.forEach((item, index) =>{
    item.addEventListener('click', function(){
        accordionFunction(index)
    })
})