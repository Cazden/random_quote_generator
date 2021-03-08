# random_quote_generator
 *Displays a random quote when a button is activated.*

**Features**
 - Prints a random quote onto the webpage from an array of quote objects each time a button is activated
 - Cycles quotes every 20 seconds
 - Webpage background changes color every time a new quote is loaded

**Code Example**
```
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
```

**How to use?**  
You can preview what the code does by downloading the project and opening index.html.
