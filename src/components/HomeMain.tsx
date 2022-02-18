import { Link } from "react-router-dom";
import { Quote } from "../App";

type Props = {
  quotes: Quote[]
  setQuotes: (value: Quote []) => void
}
function HomeMain({ quotes,setQuotes }: Props) {

  function removeQuoteFromServer(id: number) {
    fetch(`http://localhost:8000/quotes/${id}`,{
      method: 'DELETE'
    })
    .then(resp => resp.json())
    .then(() => {
      let updatedQuotes = [...quotes]
      updatedQuotes = updatedQuotes.filter(quote => quote.id !== id)
      setQuotes(updatedQuotes)
    })
  }
  function updateLikesOnServer(quote: Quote) {
    fetch(`http://localhost:8000/quotes/${quote.id}`,{
      method: 'PATCH',
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({likes: quote.likes+= 1})
    })
    .then(resp => resp.json())
    .then(() => {
      let updatedQuotes = [...quotes]
      const match = updatedQuotes.find(singleQuote => singleQuote.id === quote.id)
      if(match){
        match.likes + 1
        setQuotes(updatedQuotes)
      }
    })
  }
  return (
    <>
    <h2>Top 20 different Quotes about Politics:</h2>
      <ul className="quotes-list">
        {quotes.map (quote =>
          (
            <li key = {quote.id} className="quotes-list__item">
              <button onClick = {() => {
                  removeQuoteFromServer(quote.id)
              }} className="delete-btn">X
              </button>
              <Link to ={`/quotes/${quote?.id}`}>
                <blockquote>
                  <p>
                    {quote.text}
                  </p>
                <figcaption>— {quote.firstName} {quote.lastName}</figcaption>
              </blockquote>
              </Link>
              <span onClick = {() =>{
                updateLikesOnServer(quote)
              }}className="heart" > 💜 </span><span>{quote.likes} likes</span>
            </li>  
         ))}
      </ul>
    </>
      
  );
}
export default HomeMain;
