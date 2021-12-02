document.addEventListener('DOMContentLoaded', () => {
    // Card options:
    const cards = [
        {
            name: 'fries',
            img: 'images/fries.png',
        },
        {
            name: 'fries',
            img: 'images/fries.png',
        },
        {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png',
        },
        {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png',
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png',
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png',
        },
        {
            name: 'ice-cream',
            img: 'images/ice-cream.png',
        },
        {
            name: 'ice-cream',
            img: 'images/ice-cream.png',
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png',
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png',
        },
        {
            name: 'pizza',
            img: 'images/pizza.png',
        },
        {
            name: 'pizza',
            img: 'images/pizza.png',
        },
    ];

    cards.sort(() => 0.5 - Math.random());
    // Cashing the DOM:
    const grid = document.querySelector('.grid');
    const score = document.querySelector('#result');

    let chosenCards = [];
    let chosenCardsId = [];
    let clearedCards = [];

    function createBoard() {
        for (let i = 0; i < cards.length; i++) {
            let card = document.createElement('img');
            card.setAttribute('src', 'images/blank.png');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
    }

    function checkForMatch() {
        const cards = document.querySelectorAll('img');
        const firstOptionId = chosenCardsId[0];
        const secondOptionId = chosenCardsId[1];

        if (firstOptionId === secondOptionId) {
            cards[firstOptionId].setAttribute('src', 'images/blank.png');
            cards[secondOptionId].setAttribute('src', 'images/blank.png');

            alert('You have selected the same image twice');
        } else if (chosenCards[0] === chosenCards[1]) {
            alert('You found a match!');

            cards[firstOptionId].setAttribute('src', 'images/white.png');
            cards[secondOptionId].setAttribute('src', 'images/white.png');
            cards[firstOptionId].removeEventListener('click', flipCard);
            cards[secondOptionId].removeEventListener('click', flipCard);

            clearedCards.push(chosenCards);
        } else {
            cards[firstOptionId].setAttribute('src', 'images/blank.png');
            cards[secondOptionId].setAttribute('src', 'images/blank.png');

            alert('Too bad, try again ;(');
        }

        chosenCards = [];
        chosenCardsId = [];

        score.textContent = clearedCards.length;
        if (clearedCards.length === cards.length / 2) {
            score.textContent = 'Congrats! You won the game!';
        }
    }

    function flipCard() {
        let cardId = this.getAttribute('data-id', );
        chosenCards.push(cards[cardId].name);
        chosenCardsId.push(cardId);
        this.setAttribute('src', cards[cardId].img);
        // Set timeout to make things a bit more smooth.
        if (chosenCards.length === 2) {
            setTimeout(checkForMatch, 500);
        }
    }

    createBoard();
})