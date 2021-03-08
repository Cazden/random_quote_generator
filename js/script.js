/******************************************
Treehouse FSJS Techdegree:
Project 1 - A Random Quote Generator
******************************************/

/*** 
 * An array of quote objects with various data related to each quote
***/
const quotes = [
  {
    quote: "It's the job that's never started as takes longest to finish...",
    source: "Samwise Gamgee",
    citation: "The Fellowship of the Ring",
    year: "Third Age 3018",
  },
  {
    quote: "Do... or do not. There is no try.",
    source: "Yoda",
    citation: "The Empire Strikes Back",
    year: "4 ABY",
  },
  {
    quote: "I don't have time to explain what I don't have time to understand.",
    source: "Cayde-6",
    citation: "Destiny",
    tag: "#videogames"
  },
  {
    quote: "It does not do well to dwell on dreams and forget to live.",
    source: "Albus Dumbledore",
    citation: "The Sorcerer's Stone",
    year: "1991",
  },
  {
    quote: "Have enough courage to trust love one more time and always one more time.",
    source: "Maya Angelou",
    tag: "#inspirational"
  },
];


/***
 * Function used to get a random quote object from the quotes array
 ***/
function getRandomQuote()
{
  let quoteIndex;

  // Loop to make sure quotes don't repeat more than once in a row
  do
  {
    // Get a random index based on the number of quotes in the quotes array
    quoteIndex = Math.floor(Math.random() * quotes.length);
  } while (quoteIndex === lastQuoteIndex)

  lastQuoteIndex = quoteIndex;

  // Return random quote from quotes array
  return quotes[quoteIndex];
}
let lastQuoteIndex;

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
  if (randomQuote.citation)
  {
    html += `<span class="citation">${randomQuote.citation}</span>`;
  }

  // Check if quote has year value
  if (randomQuote.year)
  {
    html += `<span class="year">${randomQuote.year}</span>`;
  }

  // Check if quote has year value
  if (randomQuote.tag)
  {
    html += `<span class="tag"> ${randomQuote.tag}</span>`;
  }
  
  html += `</p>`; // Append closing paragraph tag

  document.body.style.background = getRandomHex(); // Change background color of webpage
  document.getElementById('quote-box').innerHTML = html; // Print quote to webpage
}

/***
 * Function used to return a random hexadecimal color value
 * Math Credit: https://dev.to/akhil_001/generating-random-color-with-single-line-of-js-code-fhj
***/
function getRandomHex()
{
  // Returns a hexadecimal value between #000000 and #ffffff
  return `#${Math.floor(Math.random()*16777215).toString(16)}`;
}

// Automatically cycles quote every [x] amount of milliseconds
setInterval(function() { printQuote(); }, 20000);

printQuote(); // Start webpage on quote

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);