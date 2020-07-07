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
var quotes = [
  {
  quote: 'For love casts out fear and gratitude can conquer pride.',
  source:'Louisa May Alcott',
  citation:'Little Women',
  year: 1868
},
{
  quote:'A second chance doesn\'t mean you\'re in the clear. In many ways, it is the more difficult thing. Because a second chance means that you have to try harder. You must rise to the challenge without the blind optimism of ignorance.',
  source:'Ling Ma',
  citation:'Severance',
  year: 2018
},
{
  quote:'When you\'re a small piece of a big puzzle, you gotta fix what you can.',
  source:'Hushpuppy',
  citation:'Beast of the Southern Wild',
  year: 2012
},
{
  quote: 'What I have in mind is that art may be bad, good or indifferent, but, whatever adjective is used, we must call it art, and bad art is still art in the same way that a bad emotion is still an emotion.',
  source:'Marcel DuChamp',
  citation:'',
  year: ''
},
{
  quote: 'The most exciting, challenging, and significant relationship of all is the one you have with yourself.',
  source:'Carrie Bradshaw',
  citation:'Sex and the City',
  year: 2004
}
]



/***
 * `getRandomQuote` function
***/
function getRandomQuote (arr) {
  var randomNumber = Math.floor( Math.random() * arr.length);
  return quotes[randomNumber];
}


/***
 * `printQuote` function
***/
function printQuote () {
  var randomQuote = getRandomQuote(quotes);
  var quoteString =
    '<p class="quote">' + randomQuote.quote + '</p>' +
    '<p class="source">' + randomQuote.source
      if (randomQuote.citation) {
        + '<span class="citation">' + randomQuote.citation + '</span>'
    }
      if (randomQuote.year) {
      + '<span class="year">'+  randomQuote.year + '</span>'
    }
    + '</p>';

  document.getElementById('quote-box').innerHTML = quoteString;
}



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
