import { useNavigate } from "react-router-dom"
import { Quote } from "../App"

type Props = {
    quotes: Quote[]
    setQuotes: (value: Quote[]) => void
}
function PostAQuote({quotes, setQuotes}: Props){

    const navigate = useNavigate()
    function addQuoteToServer(newQuote: { firstName: string; lastName: string; photo: string; age: number; text: string }) {
        fetch('http://localhost:8000/quotes', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body:JSON.stringify(newQuote)
        })
        .then(resp => resp.json())
        .then(quote => {
            setQuotes([quote, ...quotes])
            navigate('/quotes')
        })
    }
    
   const handleSubmit = (e: { target: { firstName: { value: string }; lastName: { value: string }; photoUrl: { value: string }; age: { value: number }; quote: { value: string } } }) =>{
       //@ts-ignore
       e.preventDefault()
       const firstName = e.target.firstName.value
       const lastName = e.target.lastName.value
       const photo = e.target.photoUrl.value
       const age = e.target.age.value
       const text = e.target.quote.value
        const newQuote = {
            firstName: firstName,
            lastName: lastName,
            photo: photo,
            age: age,
            text: text
        }
        addQuoteToServer(newQuote)
   }
    return (
        <section className="quote-detail-wrapper"> 
            <div className="quote-detail-container post-a-quote">
                <h1>Post a quote!</h1>
                <form onSubmit={handleSubmit} className="post-form">
                    <input name = 'firstName'type="text" placeholder='First Name:' required/>
                    <input name = 'lastName'type="text" placeholder='Last Name:' required/>
                    <input name='photoUrl' type="text" placeholder='Photo url:' required/>
                    <input name='age' type= 'number' placeholder='Age:' required/>
                    <textarea name="quote" id="quote" cols={30} rows={10} placeholder = 'Quote:'required></textarea>
                    <button type="submit">Submit</button>
                </form> 
            </div>
        </section>
    )
}
export default PostAQuote

