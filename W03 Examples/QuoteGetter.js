function distinctList(list){
    const authors = list.map(item => item.author);
    const distinct = new Set(authors);
    return [...distinct]
}
function buildDropwdown(authors){

}




export default class QuoteGetter {
    constructor(source, authorsId, QuoteListId) {
        this.source = source;
        this.authorsId = authorsId;
        this.QuoteListId = QuoteListId;
        this.quotes = []
        this.author = []
    }
    async init() {
        await this.getQuotes();
        this.authors = distinctList(this.quotes);
        buildDropwdown
        console.log(this.quotes)
        

    }
    async getQuotes(){
        this.quotes = await fetch(this.source).then(response => response.json());
    }
    filterQuotesByAuthor() {

    }
    
















}