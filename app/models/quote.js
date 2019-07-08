export default class Quote {
    constructor(data) {
        this.text = data.quote.body
        this.author = data.quote.author
    }
    get Template() {
        return `
        
	        <div id="quote-body" class="col-12">
                <p>
                    "${this.text}"
                </p>
            </div>
                <div id="quote-body" class="col-12">
                <p>
                    "${this.author}"
                </p>
	        </div>
       
        `
    }
}