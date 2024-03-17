// script.js
const coin = document.getElementById('coin');
const fact = document.getElementById('fact');
const facts = [
    "PussyTech is the first coin to land on the moon!",
    "Why chase your tail with Shiba when you can climb to new heights with PussyTech?",
    "PussyTech: More than just a pretty face  unlike Pepe, we're the meme coin with nine profitable lives!",
    "Doge had its day, but PussyTech is the cool cat that's here to stay!",
    "While Doge barks at the moon, PussyTech is already taking a catnap on it!",
    "Did you know? PussyTech is the purr-fect crypto!",
    "PussyTech: For every transaction, a kitten gets its wings!",
    "Hop on the PussyTech wave and surf the crypto sea!",
    "PussyTech: Scratch the surface, and find a fortune!",
    "Cats out of the bag  PussyTech is the purr-fect investment!",
    "Feline lucky? Time to invest in PussyTech Coin!",
    "Nine lives, countless opportunities  PussyTech takes you to the moon!",
    "With PussyTech, every day is Caturday in the crypto world!",
    "PussyTech: Because why should dogs have all the fun in crypto?",
    "Purr-chase your dreams with PussyTech Coin!",
    "Stay paw-sitive, PussyTech's growth is just beginning!",
    "PussyTech: The only coin with nine lives!",
    "Leap into the future with PussyTech's innovative blockchain tech!",
    "Curiosity didn't kill the cat, it created PussyTech Coin!",
    "PussyTech: The meow-velous choice for crypto enthusiasts!",
    "Whisker while you work  earning PussyTech is a treat!",
    "Tail high, wallet full with PussyTech Coin!",
    "Got your paws on PussyTech? You're on the prowl for profits!",
    "PussyTech: The crypto world's catnip!",
    "Don't paws your investments  go full throttle with PussyTech!",
    "PussyTech: Making every transaction a smooth purr!",
    "From kittens to cats, PussyTech is for every generation of crypto lovers!",
    "PussyTech: Unleash the feral side of finance!",

    // Add more fun facts here
];

function flipCoin() {
    coin.classList.add('spin');
    setTimeout(() => {
        coin.classList.remove('spin');
        showRandomFact();
    }, 600); // Matches the CSS animation time
}

function showRandomFact() {
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    fact.textContent = randomFact;
}



// script.js
const showLyricsButton = document.getElementById('showLyricsButton');
const lyricsContainer = document.getElementById('lyrics');

// Assuming you have the rest of your script setup as before
showLyricsButton.addEventListener('click', () => {
    if (lyricsContainer.style.display === "none") {
        lyricsContainer.style.display = "block";
        lyricsContainer.textContent = pussyTechSong; // assuming pussyTechSong variable contains your song lyrics
        showLyricsButton.textContent = "Smash IT"; // Updated text
    } else {
        lyricsContainer.style.display = "none";
        showLyricsButton.textContent = "SMASH IT"; // Consider what text you want when hiding the lyrics
    }
});

