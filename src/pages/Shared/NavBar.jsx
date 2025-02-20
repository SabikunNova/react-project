
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='flex gap-6 justify-center items-center m-6'>
            <Link to='/'>Home</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/fetch'>Fetch</Link>
            <Link to='/fetchBooks'>FetchBooks</Link>
            <Link to='/login'>Login</Link>
            
            

        </div>
    );
};

export default NavBar;