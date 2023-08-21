document.addEventListener('DOMContentLoaded', () => {

const cardArray = [
    {
        name: '1',
        img: 'images/1.png'
    }, 
    {
        name: '2',
        img: 'images/2.png',
    },
    {
        name: '3',
        img: 'images/3.png',
    },
    {
        name: '4',
        img: 'images/4.png',
    },
    {
        name: '5',
        img: 'images/5.png'
    },
    {
        name: '6',
        img: 'images/6.png'
    },
    {
        name: '1',
        img: 'images/1.png'
    }, 
    {
        name: '2',
        img: 'images/2.png',
    },
    {
        name: '3',
        img: 'images/3.png',
    },
    {
        name: '4',
        img: 'images/4.png',
    },
    {
        name: '5',
        img: 'images/5.png'
    },
    {
        name: '6',
        img: 'images/6.png'
    },

]

cardArray.sort(() => 0.5 - Math.random())

console.log(cardArray)

const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenIds = []
let cardsWon = []

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement('img')
      card.setAttribute('src', 'images/5.png')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      gridDisplay.appendChild(card)
      
      console.log(card)

    }
}


console.log(cardsWon)

function checkMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]
    console.log(cards)
   console.log('checking match')
    if (optionOneId === optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/1.png')
        cards[optionTwoId].setAttribute('src', 'images/1.png')        
        alert('you clicked the same image')
    }
    else if(cardsChosen[0] === cardsChosen[1]) {
        alert('you found a match')
        cards[optionOneId].setAttribute('src', 'images/2.png')
        cards[optionTwoId].setAttribute('src', 'images/2.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)       
    } else {
        cards[optionOneId].setAttribute('src', 'images/1.png')
        cards[optionTwoId].setAttribute('src', 'images/1.png')
        alert('Try again')
    }  
        cardsChosen = []
        cardsChosenIds = []
        resultDisplay.textContent = cardsWon.length


    if (cardsWon.length === cardArray.length/2) {
        resultDisplay.innerHTML = 'Congratulations You are the best'
    }   
}

function flipCard() {
  //  console.log(cardArray)
    let cardId = this.getAttribute('data-id')
   // console.log(cardArray[cardId].name)
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    //console.log(cardsChosen)
   // console.log(cardsChosenIds)

   // console.log('clicked', cardId)
   // console.log(cardsChosen)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 500)
    }
}

createBoard()

})