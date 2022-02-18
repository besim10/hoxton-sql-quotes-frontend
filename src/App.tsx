import { useEffect, useState } from "react"
import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Authors from "./pages/Authors";
import Home from "./pages/Home";
import PostAQuote from "./pages/PostAQuote";
import QuoteOfTheDay from "./pages/QuoteOfTheDay";
import QuotesDetail from "./pages/QuotesDetail";
import RandomQuotes from "./pages/RandomQuotes";

export type Quote ={
  id: number
  firstName: string
  lastName: string
  photo: string
  age: number
  text: string
  likes: number
}

function App() {
  const [quotes,setQuotes] = useState<Quote[]>([])
  const [search, setSearch] = useState('')

  useEffect(()=>{
    fetch(`http://localhost:8000/quotes?search=${search}`)
    .then(resp => resp.json())
    .then(quotesFromServer => {
      setQuotes(quotesFromServer.reverse())
    })
  },[search])
 
  return (
    <div className="App">
      <Header setSearch = {setSearch}/>
      <Routes>
        <Route path ='/' element = {<Home quotes={quotes} setQuotes = {setQuotes} />} />
        <Route path ='/quotes' element = {<Home quotes={quotes} setQuotes = {setQuotes}/>} />
        <Route path ='/quotes/:id' element = {<QuotesDetail />} />
        <Route index element={<Navigate to="/quotes" />} />
        <Route path ='/authors' element = {<Authors />} />
        <Route path ='/random-quotes' element = {<RandomQuotes />} />
        <Route path ='/quote-of-the-day' element = {<QuoteOfTheDay />} />
        <Route path ='/post-a-quote' element = {<PostAQuote quotes = {quotes}setQuotes={setQuotes} />} />
      </Routes> 
    </div>
  )
}

export default App
