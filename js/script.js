/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * An array of quote objects with various data related to each quote
***/
const quotes = [
  {
    quote: "It's the job that's never started as takes longest to finish...",
    source: "Samwise Gamgee",
    citation: "The Fellowship of the Ring",
    year: "Third Age 3018"
  },
  {
    quote: "Do... or do not. There is no try.",
    source: "Yoda",
    citation: "The Empire Strikes Back",
    year: "4 ABY"
  },
  {
    quote: "I don't have time to explain what I don't have time to understand.",
    source: "Cayde-6",
    citation: "Destiny",
    year: ""
  },
  {
    quote: "It does not do well to dwell on dreams and forget to live.",
    source: "Albus Dumbledore",
    citation: "The Sorcerer's Stone",
    year: "1991"
  },
  {
    quote: "Have enough courage to trust love one more time and always one more time.",
    source: "Maya Angelou",
    citation: "",
    year: ""
  },
];


/***
 * Function used to get a random quote object from the quotes array
***/
function getRandomQuote()
{
  // Get a random index based on the number of quotes in the quotes array
  let quoteIndex = Math.floor(Math.random() * quotes.length);

  // Return random quote from quotes array
  return quotes[quoteIndex];
}

/***
 * Function used to construct an HTML string with a random quote
***/
function printQuote()
{
  // Store random quote in a new variable
  let randomQuote = getRandomQuote();

  // Concacenate an HTML string with quote property values
  let html = `<p class="quote">${randomQuote.quote}</p>
              <p class="source">${randomQuote.source}`;

  // Check if quote has citation value
  if (randomQuote.citation !== "")
  {
    html += `<span class="citation">${randomQuote.citation}</span>`;
  }

  // Check if quote has year value
  if (randomQuote.year !== "")
  {
    html += `<span class="year">${randomQuote.year}</span>`;
  }
  
  html += `</p>`; // Append closing paragraph tag
  document.getElementById('quote-box').innerHTML = html; // Assign quote to HTML
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);