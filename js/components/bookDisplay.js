app.component('book-display', {
    props: {
        book: {
            type: String,
            required: true,
            default: null
        }
    },
    template: 
        /*html*/
        `<ul class="col-sm-12 col-md-6 col-xl-4"
        v-if="this.bookObj.volumeInfo.authors != null">
        <a 
        class="list-group-item list-group-item-action active" 
        :href="this.bookObj.selfLink">
            <h2>{{ this.bookObj.volumeInfo.title }}</h2>
        </a>
        <li class="list-group-item">
            <img class="thumbnail"
            v-if="this.bookObj.volumeInfo.imageLinks != null" 
            v-bind:src="this.bookObj.volumeInfo.imageLinks.smallThumbnail">
        </li>
        <li class="list-group-item"
        v-if="this.bookObj.volumeInfo.industryIdentifiers != null && this.bookObj.volumeInfo.industryIdentifiers[1] != null">
            <h3>ISBN 13:</h3>
            {{ this.bookObj.volumeInfo.industryIdentifiers[1].identifier }}
        </li>
        <li class="list-group-item">
            <h3 v-if="this.bookObj.volumeInfo.authors != null">Authors:</h3>
            <div v-for="author in this.bookObj.volumeInfo.authors">
                <span>{{ author }}</span>
            </div>
        </li>
        <li class="list-group-item"
        v-if="this.bookObj.volumeInfo.publisher != null"><h3>Publisher:</h3>{{ this.bookObj.volumeInfo.publisher }}</li>
        <li class="list-group-item"
        v-if="this.bookObj.volumeInfo.publishedDate != null"><h3>Published:</h3>{{ this.bookObj.volumeInfo.publishedDate }}</li>
        <li class="list-group-item"
        v-if="this.bookObj.volumeInfo.description != null"><h3>Description:</h3>{{ this.bookObj.volumeInfo.description }}</li>
        </ul>`,
    computed: {
        bookObj() {
            if (this.book != null) {
                return JSON.parse(this.book);
            }
            else {
                return null;
            }
        }
    }
})