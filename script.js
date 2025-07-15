const quoteEl = document.getElementById('quote');
const authorEl = document.getElementById('author');

// Local array of quotes
const quotes = [
  { text: "Stay hungry, stay foolish.", author: "Steve Jobs" },
  { text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
  { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
  { text: "Do not go where the path may lead, go instead where there is no path and leave a trail.", author: "Ralph Waldo Emerson" },
  { text: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" }
];

let currentQuoteIndex = 0;

function getQuote() {
  const quote = quotes[currentQuoteIndex];
  quoteEl.textContent = `"${quote.text}"`;
  authorEl.textContent = `- ${quote.author}`;
  
  // Move to next quote, or loop back
  currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
}

function tweetQuote() {
  const quote = quoteEl.textContent;
  const author = authorEl.textContent;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} ${author}`;
  window.open(twitterUrl, "_blank");
}

// Show first quote on load
getQuote();
