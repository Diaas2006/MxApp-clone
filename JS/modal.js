/*  MODAL  */
const modal = document.querySelector('div.modal__container')
const video = document.querySelector('div.modal__video')

const span = document.getElementById('span').addEventListener('click', function(){
    modal.classList.add("activated")
    video.classList.add("video__activated")
})

modal.addEventListener('click', function(){
    if(modal.classList.contains("activated")){
        modal.classList.remove("activated")
        video.classList.remove("video__activated")
    }
})
////////////