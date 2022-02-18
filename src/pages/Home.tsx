import { Quote } from "../App";
import HomeMain from "../components/HomeMain";

type Props = {
  quotes: Quote[]
  setQuotes: (value: Quote[]) => void
}

function Home({quotes,setQuotes}:Props) {
    return (
      <main className="home-main">
    <HomeMain quotes = {quotes} setQuotes = {setQuotes}/>
  </main>
  ) 
}
export default Home