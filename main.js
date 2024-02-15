const badWords = ['понедiлок', 'вiвторок', 'середу', 'четвер', 'п’ятницю', 'суботу', 'неділю', 'пiдманула', 'пiдвела'];
function wordsSubstitute() {
    var lyrics = document.getElementById('originalLyrics');
    let song = document.getElementById('song').value;
    for (var i = 0; i < badWords.length; i++){
        song = song.replaceAll(badWords[i], '*'.repeat(badWords[i].length));
    }
    lyrics.innerText = song;
}