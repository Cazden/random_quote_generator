/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * Array of quote objects with varying data related to each quote
***/
const quotes = [
  {
    quote: "Do... or do not. There is no try.",
    source: "Yoda",
    citation: "The Empire Strikes Back",
    year: "4 ABY"
  },
  {
    quote: "It's the job that's never started as takes longest to finish...",
    source: "Samwise Gamgee",
    citation: "The Fellowship of the Ring",
    year: "Third Age 3018"
  },
  {
    quote: "I don't have time to explain what I don't have time to understand.",
    source: "Cayde-6",
    citation: "Destiny",
    tag: "#videogames"
  },
  {
    quote: "It does not do well to dwell on dreams and forget to live.",
    source: "J.K. Rowling",
    citation: "Harry Potter and the Sorcerer's Stone",
    year: "1991"
  },
  {
    quote: 'The death of a dream is the day that you stop believing in the work it takes to get there.',
    source: 'Chris Burkmenn'
  }
];


/***
 * Function to get random quote obj from 'quotes' arr
 ***/
function getRandomQuote()
{
  let randomIndex;

  // Loop so quotes don't repeat more than once in a row
  do
  {
    // Get random index based on length of 'quotes' arr
    randomIndex = Math.floor(Math.random() * quotes.length);
  } while (randomIndex === lastRandomIndex)

  lastRandomIndex = randomIndex;

  return quotes[randomIndex];
}
let lastRandomIndex;


/***
 * `printQuote` function
***/
function printQuote() {
  const randomQuote = getRandomQuote();
  let html = `<p class="quote">"${randomQuote.quote}"</p>
              <p class"source">${randomQuote.source}`;

  if(randomQuote.citation) {
    html += `<span class="citation">${randomQuote.citation}</span>`;
  }

  if(randomQuote.year) {
    html += `<span class="year">${randomQuote.year}</span>`;
  }

  if(randomQuote.tag) {
    html += `<span class="tag"> ${randomQuote.tag}</span>`;
  }

  html += '</p>';
  document.getElementById('quote-box').innerHTML = html;
}

printQuote();


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);