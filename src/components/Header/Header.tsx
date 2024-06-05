import './Header.css';
import { Label } from '../Icons/Label';
import { Search } from '../Search';
import { Like } from '../Icons/Like';
import { Basket } from '../Icons/Basket';
import { User } from '../Icons/User';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { IStoreState } from '../../types';
import { Exit } from '../Icons/Exit';
import { setUser } from '../../redux/actionCreators';
import { IUser } from '../../types';





const Header = () => {
    const user = useSelector((state: IStoreState) => state.user.user);
    const dispatch = useDispatch();

    const handleLogout = () => {
        console.log("Logging out...");
        localStorage.removeItem('access');
        localStorage.removeItem('refresh');
        localStorage.removeItem('cart')
        localStorage.removeItem('likes')
        console.log("User after logout:", user);
        window.location.pathname = '/sign-in';
    };
    console.log(user)
    return (
        <div className='header__wrapper'>
            <Link to='/books' className='main__link'> <Label /> </Link>
            <Search />
            <div className='header__icons'>
                <Link to='/like' className='like__link'> <Like /></Link>
                <Link to='/basket'className='basket__link'> <Basket /> </Link>
                {localStorage.getItem('access') ? (
                    <Exit onClick={handleLogout} className='exit__icon' />
                ) : (
                    <Link to='/sign-in' className='user__link'> <User /> </Link>
                )}
            </div>
        </div>



    )
}

export { Header }
