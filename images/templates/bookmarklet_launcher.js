(function () {
    if (window.myBookmarklet !== undefined) {
        myBookmarklet();
    } else {
        document.body.appendChild(
            document.createElement('script')
        ).scr = 'http://e93052a19e75.ngrok.io/static/js/bookmarklet.js?r=' +
            Math.floor(Math.random() * 99999999999999999999);
    }
})();
