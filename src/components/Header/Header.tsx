import './Header.css';
import { Label } from '../Icons/Label';
import { Search } from '../Search';
import { Like } from '../Icons/Like';
import { Basket } from '../Icons/Basket';
import { User } from '../Icons/User';
import { Link } from 'react-router-dom';





const Header = () => {
    return (
        <div className='header__wrapper'>
            <Link to='/new'> <Label /> </Link>
            <Search />
            <div className='header__icons-wrapper'>
                <Like />
                <Basket />
                <Link to='/sign-in'><User/></Link>
            </div>
        </div>



    )
}

export { Header }




<div className='header__wrapper'>
    <Link to='/new'> <Label /> </Link>
    <Search />
    <div className='header__icons-wrapper'>
        <Like />
        <Link to='/basket'> <Basket /> </Link>
    </div>
</div>