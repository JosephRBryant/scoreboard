const homeStoreEl = document.getElementById('home-score');
const guestStoreEl = document.getElementById('guest-score');

let homeScore = 0;
let guestScore = 0;

const homePlusOne = document.getElementById('home-plus-1');
const homePlusTwo = document.getElementById('home-plus-2');
const homePlusThree = document.getElementById('home-plus-3');
const guestPlusOne = document.getElementById('guest-plus-1');
const guestPlusTwo = document.getElementById('guest-plus-2');
const guestPlusThree = document.getElementById('guest-plus-3');

function homeScoreAddOne() {
    homeScore += 1;
    homeStoreEl.textContent = homeScore;
} 
function homeScoreAddTwo() {
    homeScore += 2;
    homeStoreEl.textContent = homeScore;
} 
function homeScoreAddThree() {
    homeScore += 3;
    homeStoreEl.textContent = homeScore;
} 
function guestScoreAddOne() {
    guestScore += 1;
    guestStoreEl.textContent = guestScore;
} 
function guestScoreAddTwo() {
    guestScore += 2;
    guestStoreEl.textContent = guestScore;
} 
function guestScoreAddThree() {
    guestScore += 3;
    guestStoreEl.textContent = guestScore;
} 