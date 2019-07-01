export default class Quote {
    constructor(data) {
        this.text = data.quote.body
        this.author = data.quote.author
    }
    get Template() {
        return `
        <div class="row">
	        <div class="col-6">
                <p>
                    "${this.text}"
                </p>
                <p>
                    "${this.author}"
                </p>
	        </div>
        </div>
        `
    }
}