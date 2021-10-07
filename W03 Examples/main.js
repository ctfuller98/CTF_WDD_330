/* 
headline, dropdown of authors, button, list for quotes 
get quotes from api https://type.fit/api/quotes
get a distinct list of author names 
build authors dropdown
button event listener
    get current author from list
    filter quotes by author
    display all quotes by chosen author
    byui-cit.github.io/wdd330/examples/quotes/index.html
*/
import QuoteGetter from "./QuoteGetter.js";
const quotes = new QuoteGetter(
    "https://type.fit/api/quotes",
    "authorList",
    "quoteList")

function getClicked(e){
    console.log(e.target);
}
document.getElementById("get").addEventListener('click', getClicked);
