// Initial Data
let square = {
    a1: '', a2: '', a3: '',
    b1: '', b2: '', b3: '',
    c1: '', c2: '', c3: ''
}
let player = ''
let warning = ''
let playing = false

reset()

// Events
document.querySelector('.reset').addEventListener('click', reset)
document.querySelector('.item').forEach(item => {
    item.addEventListener('click', itemClick)
});

// Functions
function itemClick(event){
    let item = event.target.getAttribute('data-item')
    if(square[item] === ''){
        square[item] = player
        renderSquare()
    }
}

function reset() {
    warning = ''

    let random = Math.floor(Math.random() * 2)
    
    player = (random === 0) ? 'x' : '0'
    /* if(random === 0){
        player = 'x'
    } else {
        player = "o"
    } */

   for(let i in square){
    square[i] = '' 
   }
   
   playing = true

   renderSquare()
   renderInformation()
}

function renderSquare() {
    for(let i in square){
        let item = document.querySelector(`div[data-item=${i}]`)  
        item.innerHTML = square[i]
    }
}

function renderInformation() {
    document.querySelector('.vez').innerHTML = player
    document.querySelector('.resultado').innerHTML = warning
}