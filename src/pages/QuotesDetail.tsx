import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Quote } from "../App"


function QuotesDetail(){
    const [quote, setQuote] = useState<Quote |null>(null)
    const params = useParams()
    
    useEffect(()=>{
        fetch(`http://localhost:8000/quotes/${params.id}`)
        .then(resp => resp.json())
        .then(quoteFromServer => setQuote(quoteFromServer))
    },[])
    return (
        <section className="quote-detail-wrapper"> 
            <div className="quote-detail-container">
                <div className="quote-detail__photo">
                    <img src={quote?.photo} alt={quote?.firstName} />
                </div>
                <div className="quote-detail__info">
                <blockquote>
                        <p>{quote?.text}</p>
                        <figcaption>— {quote?.firstName} {quote?.lastName}, {quote?.age}</figcaption>
                    </blockquote> 
                </div>
            </div>
        </section>
    )
}
export default QuotesDetail