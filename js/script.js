/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
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
 * `getRandomQuote` function
***/
function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * (quotes.length));
  return quotes[randomIndex];
}

/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);