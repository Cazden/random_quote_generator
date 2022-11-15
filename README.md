# random_quote_generator
 *Displays a random quote when a button is activated.*

**Features**
 - Prints a random quote onto the webpage from an array of quote objects each time a button is activated
 - Cycles quotes every 20 seconds
 - Webpage background changes color every time a new quote is loaded

**Code Example**
```
 /***
 * Get random quote obj from 'quotes' arr
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
```

**How to use?**  
You can preview what the code does by downloading the project and opening index.html.
