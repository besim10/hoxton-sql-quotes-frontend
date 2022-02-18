import { Link, NavLink } from 'react-router-dom';
import logo from '../icons/hoxton-logo.jpg';

type Props = {
    setSearch: (value: string) => void
}
function Header({setSearch}:Props){

    return (
        <header className="header">
            <div className="logo">
                <NavLink to ='/quotes'>
                    <img className = 'logo-icon' src={logo}/>
                    <h1>Hoxton Quotes</h1>
                </NavLink>
            </div>
            <div className='search'>
                <input onChange={(e) => {
                    //@ts-ignore
                    setSearch(e.target.value)
                }} type="search" name="search" placeholder='Search for quote' />
            </div>
            <nav className="menu-bar">
            <ul className = 'menu-bar__list'>
                <NavLink to = '/quotes'><li className="menu-bar__list__item">Home</li></NavLink>
                <NavLink to='/authors'><li className="menu-bar__list__item">Authors</li></NavLink>
                <NavLink to ='/random-quotes'><li className="menu-bar__list__item">Random Quotes</li></NavLink>
                <NavLink to ='/quote-of-the-day'><li className="menu-bar__list__item">Quote of the day</li></NavLink>
                <NavLink to ='/post-a-quote'><li className="menu-bar__list__item">Post a quote</li></NavLink>
            </ul>
            </nav>
      </header>
    )
}
export default Header