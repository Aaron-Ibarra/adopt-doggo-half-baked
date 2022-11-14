import { getDogs } from './fetch-utils.js';
import { renderDogCard } from './render-utils.js';

const dogListContainer = document.getElementById('dog-list-container');

window.addEventListener('load', () => {});
// on load
// fetch all dogs
const dogs = getDogs();
console.log(dogs);
// render and append all dog cards to the container
