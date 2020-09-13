const card = document.querySelectorAll('.card');

function flipCard(){
    this.classList.toggle('flip')
}

card.forEach((card)=>
    card.addEventListener('click',flipCard))