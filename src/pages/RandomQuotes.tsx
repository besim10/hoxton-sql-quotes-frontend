import {useState } from "react"
import { Quote } from "../App"

function RandomQuotes(){
    const [randomQuote, setRandomQuote] = useState<Quote | null>(null)

    function handleClick(): void {
            fetch('http://localhost:8000/random')
            .then(resp => resp.json())
            .then(quoteFromServer => setRandomQuote(quoteFromServer))
    }
    return (
        <section className="quote-wrapper">
            <div className="button-section">
                <button onClick={handleClick}>Generate Quote</button>
            </div>
            {randomQuote !== null ? (
                <div className="quote-container">
                <blockquote>
                    <p>{randomQuote?.text}</p>
                    <figcaption>— {randomQuote?.firstName} {randomQuote?.lastName}</figcaption>
                </blockquote> 
            </div>
            ): null}
            
        </section>
    )
}
export default RandomQuotes