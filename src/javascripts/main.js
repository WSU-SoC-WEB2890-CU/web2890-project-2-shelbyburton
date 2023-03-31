//TODO - Your ES6 JavaScript code (if any) goes here
import "bootstrap"

//Search Engine
//Search Engine
const f = document.getElementById('form');
const q = document.getElementById('query');
const search = 'https://endearing-lily-476e26.netlify.app/';
const site = 'https://endearing-lily-476e26.netlify.app/';

function submitted(event) {
  event.preventDefault();
  const url = search + site + '+' + q.value;
  const win = window.open(url, '_blank');
  win.focus();
}

f.addEventListener('submit', submitted);


