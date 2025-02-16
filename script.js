
document.getElementById('generatePoemBtn').addEventListener('click', () => {
    const name = document.getElementById('poemName').value;
    const mood = document.getElementById('poemMood').value.toLowerCase();

    const poems = {
        happy: `${name}, your laughter lights the darkest skies,\nLike stars that dance as twilight flies.\nWith every word, your warmth is clear,\nYou fill each moment with joy sincere.\nA heart so bright, a soul so true.`,
        sad: `${name}, when tears like rain in silence fall,\nLove still stands, unshaken through it all.\nIn shadows deep, hope softly sings,\nOf brighter days that morning brings.\nThe heart that loves will never break.`,
        romantic: `${name}, your love's a rose in morning's light,\nSoft and pure, a heart's delight.\nIn your embrace, I find my home,\nWith you, I'll never walk alone.\nOur hearts as one, forever true.`,
        dreamy: `${name}, like whispers on a moonlit shore,\nYour love's a dream I just adore.\nIn endless skies, our hearts take flight,\nThrough velvet stars and endless night.\nA timeless tale of me and you.`,
        passionate: `${name}, with every touch, a spark ignites,\nA blazing fire on endless nights.\nYour gaze, a flame that lights the way,\nTurning midnight into endless day.\nIn you, I've found my heart's desire.`
    };

    const poem = poems[mood] || `Roses are red, violets are blue,\n${name}, this poem is just for you!\nThough moods may vary, love stays strong,\nWith you, my dear, I'll always belong.\nTogether forever, our hearts in song.`;
    document.getElementById('poemOutput').innerText = poem;
});


document.getElementById('generatePoemBtn').addEventListener('click', () => {
    const name = document.getElementById('poemName').value;
    const mood = document.getElementById('poemMood').value.toLowerCase();

    const poems = {
        happy: `${name}, your laughter lights the darkest skies,\nLike stars that dance as twilight flies.\nWith every word, your warmth is clear,\nYou fill each moment with joy sincere.\nA heart so bright, a soul so true.`,
        sad: `${name}, when tears like rain in silence fall,\nLove still stands, unshaken through it all.\nIn shadows deep, hope softly sings,\nOf brighter days that morning brings.\nThe heart that loves will never break.`,
        romantic: `${name}, your love's a rose in morning's light,\nSoft and pure, a heart's delight.\nIn your embrace, I find my home,\nWith you, I'll never walk alone.\nOur hearts as one, forever true.`,
        dreamy: `${name}, like whispers on a moonlit shore,\nYour love's a dream I just adore.\nIn endless skies, our hearts take flight,\nThrough velvet stars and endless night.\nA timeless tale of me and you.`,
        passionate: `${name}, with every touch, a spark ignites,\nA blazing fire on endless nights.\nYour gaze, a flame that lights the way,\nTurning midnight into endless day.\nIn you, I've found my heart's desire.`
    };

    const poem = poems[mood] || `Roses are red, violets are blue,\n${name}, this poem is just for you!\nThough moods may vary, love stays strong,\nWith you, my dear, I'll always belong.\nTogether forever, our hearts in song.`;
    document.getElementById('poemOutput').innerText = poem;
});

const loveQuotes = [
    "Love is not about how many days, months, or years you have been together. It's about how much you love each other every single day. 💕",
    "Love is a game that two can play and both win. 🎭",
    "True love stories never have endings. ❤️",
    "To love and be loved is to feel the sun from both sides. ☀️",
    "A heart that loves is always young. 💖"
];

document.getElementById("quote").innerText = loveQuotes[Math.floor(Math.random() * loveQuotes.length)];

document.getElementById("startButton").addEventListener("click", function() {
    document.getElementById('clickSound').play();
    window.location.href = "https://lovecalculator-t8hxujhpbtykzxavlzpjnh.streamlit.app/";
});
document.getElementById("giftSuggestionBtn").addEventListener("click", function() {
    document.getElementById('clickSound').play();
    window.location.href = "https://hxk3k9khnunp2cie7mrxwx.streamlit.app/";
});

document.getElementById('spinWheel').addEventListener('click', () => {
    document.getElementById('clickSound').play();
    const outcomes = ["Plan a Date 💑", "Give a Compliment 😊", "Surprise Gift 🎁", "Movie Night 🎬", "Send a Love Note 💌"];
    const result = outcomes[Math.floor(Math.random() * outcomes.length)];
    document.getElementById('wheelResult').innerText = `💖 ${result}!`;

    // Rotate the wheel
    const wheel = document.getElementById('spinWheel');
    const randomRotation = 3600 + Math.floor(Math.random() * 360);
    wheel.style.transform = `rotate(${randomRotation}deg)`;
});
document.getElementById('addNoteBtn').addEventListener('click', () => {
    const input = document.getElementById('loveNoteInput');
    const text = input.value.trim();
    if (text) {
        const notesContainer = document.getElementById('notesContainer');
        const note = document.createElement('div');
        note.className = 'floating-note';
        note.textContent = text;

        notesContainer.appendChild(note);
        input.value = '';
    }
});
document.getElementById('book').addEventListener('click', function () {
    const age = parseInt(document.getElementById('age').value);
    let recommendation;

    if (isNaN(age) || age <= 0) {
        recommendation = "Please enter a valid age.";
    } else if (age < 13) {
        recommendation = "📚 Suggested Book: 'Anne of Green Gables' by L.M. Montgomery.";
    } else if (age <= 18) {
        recommendation = "💖 Suggested Book: 'To All the Boys I've Loved Before' by Jenny Han.";
    } else if (age <= 30) {
        recommendation = "💞 Suggested Book: 'The Fault in Our Stars' by John Green.";
    } else if (age <= 50) {
        recommendation = "❤️ Suggested Book: 'Me Before You' by Jojo Moyes.";
    } else {
        recommendation = "🌹 Suggested Book: 'Pride and Prejudice' by Jane Austen.";
    }

    document.getElementById('result').innerText = recommendation;
});
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 1000);

// Ensure background music starts on user interaction and continues playing
function startMusic() {
    const audio = document.getElementById('backgroundMusic');
    audio.muted = false;
    audio.play().then(() => {
        console.log('Background music playing');
    }).catch(error => console.log('Background music play failed:', error));
    document.removeEventListener('click', startMusic);
}

document.addEventListener('click', startMusic);

document.addEventListener('click', () => {
    document.getElementById('clickSound').play();
});

