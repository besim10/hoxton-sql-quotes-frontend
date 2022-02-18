import { useEffect, useState } from "react"
import { Quote } from "../App"

function QuoteOfTheDay(){
    const [quoteOfTheDay, setQuoteOfTheDay] = useState<Quote | null>(null)
    useEffect(()=>{
        fetch('http://localhost:8000/quote-of-the-day')
        .then(resp => resp.json())
        .then(quote => setQuoteOfTheDay(quote))
    },[])
    return (
        <section className="quote-wrapper">
            <h1>Quote of the day!</h1>
                <div className="quote-container day">
                    <blockquote>
                        <p>{quoteOfTheDay?.text}</p>
                        <figcaption>— {quoteOfTheDay?.firstName} {quoteOfTheDay?.lastName}</figcaption>
                    </blockquote> 
                </div>
        </section>)
}
export default QuoteOfTheDay