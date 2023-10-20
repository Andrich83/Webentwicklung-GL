/**
 * Query selector uses essentially the same syntax as CSS selectors, so it's easy to remember. ^^
 * If you want to select multiple elements, you can use querySelectorAll, which returns an array of elements.
 */
const SEARCH_CONTAINER = document.querySelector('#search-container');
const SEARCH_INPUT = document.querySelector('#search-query');
// DuckDuckGo is a privacy-focused search engine that doesn't track you. It's also a great search engine in general.
const SEARCH_URL = 'https://duckduckgo.com/?q='; // the ?q= is the query parameter, which is where the search query goes


let searchMode = false;
document.addEventListener('keydown', (event) => {
    // take a look at the key that was pressed
    switch (event.key) {
        case 'Escape':
            // if escape is pressed in search mode
            if (searchMode) {
                // hide the search container
                SEARCH_CONTAINER.style.display = 'none';
                // clear the search input
                SEARCH_INPUT.value = '';
                searchMode = false;
            } else {
                // when entering search-mode, we clear the input
                SEARCH_INPUT.value = '';
                // if escape is pressed in normal mode, show the search container
                SEARCH_CONTAINER.style.display = 'block';
                // focus the search input
                SEARCH_INPUT.focus();
                // remember that we are in search mode
                searchMode = true;
            }
            break;
        // if enter is pressed in search mode
        case 'Enter':
            if (searchMode) {
                // go to the search provider with the search query currently in the input
                window.location.href = SEARCH_URL + SEARCH_INPUT.value;
            }
            break;
    }
});