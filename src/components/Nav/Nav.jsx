import { Link } from 'react-router-dom'

const Nav = (props) => {
    return (
        <nav className='nav'>
            <Link to='/'>Home</Link>
            <Link to='/ships'>
                <div>Starships Index</div>
            </Link>
        </nav>
    )
}

export default Nav