const app = Vue.createApp({
    data() {
        return {
            keyword: '',
            result: null,
            startIndex: 0,
            prevEnabled: false,
            nextEnabled: true,
            booksFound: null
        }
    },
    methods: {

        searchGoogleBooks() {
            fetch('https://www.googleapis.com/books/v1/volumes?q=' + this.keyword + "&startIndex=" + this.startIndex + "&maxResults=20")
            .then(res => res.json())
            .then(json => {
                this.result = json

                if (this.startIndex == 0) {
                    this.booksFound = this.result.totalItems;
                }

                if (this.startIndex == 0) { this.prevEnabled = false; }
                else if (this.startIndex != 0) { this.prevEnabled = true; }
                
                if (this.booksFound - this.startIndex < 20) { this.nextEnabled = false; }
                else { this.nextEnabled = true; }
            });
        },

        resetStartIndex() {
            this.startIndex = 0;
        },

        resetResults() {
            this.startIndex = 0;
            this.result = null;
        },

        
    }
});