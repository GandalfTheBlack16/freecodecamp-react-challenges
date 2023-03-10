import useQuotes from "../hooks/useQuotes"

export default function QuoteBox () {
    
    const {
        quote,
        author,
        renewQuote
    } = useQuotes();

    return (
        <div id="quote-box">
            <div className="quote-text">
                <i className="fa fa-quote-left"></i>
                <span id="text">{ quote }</span>
            </div>
            <div className="quote-author">
                <span className="separator">- </span>
                <span id="author">{ author }</span>
            </div>
            <div className="buttons">
                <div className="social">
                    <a 
                        className="button"
                        id="tweet-quote"
                        title="Tweet this quote!"
                        href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="${quote}" ${author}`}
                        target="_blank">
                            <i className="fa fa-twitter"></i>
                    </a>
                    <a 
                        className="button"
                        id="tumblr-quote"
                        title="Post this quote in tumblr!"
                        href={`https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=${author}&content=${quote}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`}
                        target="_blank">
                        <i className="fa fa-tumblr"></i>
                    </a>
                </div>
                <button 
                    className="button"
                    id="new-quote"
                    onClick={renewQuote}>
                        New quote
                </button>
            </div>
        </div>
    )
}