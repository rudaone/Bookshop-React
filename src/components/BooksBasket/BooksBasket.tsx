import './BooksBasket.css';
import { Link } from 'react-router-dom';
import { Arrow } from '../Icons/Arrow';
import { useSelector, useDispatch } from 'react-redux';
import { IStoreState } from '../../types';

import { addQuantity, removeQuantity, removeFromCart, clearCart } from '../../redux/actionCreators';
import { hrtime } from 'process';
import { Minus } from '../Icons/Minus';
import { Plus } from '../Icons/Plus';
import { CancelIcon } from '../Icons/CancelIcon';


const BooksBasket = () => {
    const cartItems = useSelector((state: IStoreState) => state.books.cart);
    const dispatch = useDispatch()

    const liftUpPage = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };


    const handleAddQuantity = (isbn13: number) => {
        dispatch(addQuantity(isbn13));
    };

    const handleRemoveQuantity = (isbn13: number) => {
        dispatch(removeQuantity(isbn13));
    };

    const handleRemoveFromCart = (isbn13: number) => {
        dispatch(removeFromCart(isbn13));
    };

    const handleCheckout = () => {
        dispatch(clearCart());
    };

    const colors = [
        'rgba(244, 238, 253, 1)',
        'rgba(202, 239, 240, 1)',
        'rgba(215, 228, 253, 1)',

    ];

    const getRandomColor = () => {
        return colors[Math.floor(Math.random() * colors.length)];
    };

    const cleanPrice = (price: string) => parseFloat(price.replace(/[^0-9.-]+/g, ''));

    if (!cartItems || cartItems.length === 0) {
        return (
            <div className='basket__header'>
                <div className='header__empty-cart'>your cart is empty</div>
            </div>
        );
    }
    const totalSum = cartItems.reduce((sum, item) => {
        const price = cleanPrice('' + item.price);
        const quantity = item.quantity ?? 1;
        return sum + price * quantity;
    }, 0);

    const vat = (totalSum * 0.1).toFixed(2);
    const total = (totalSum + parseFloat(vat)).toFixed(2);

    return (
        <div className='basket__wrapper'>
            <div className='basket__header'>
                <div className='basket__header-arrow'>
                    <Link to='/books' className='basket__header-arrow__link'>
                        <Arrow />
                    </Link>
                </div>
                <h3 className='basket__header-title'>Your cart</h3>
            </div>

            {cartItems.map((cart) => {
                const totalPriceForItem = (cleanPrice(cart.price.toString()) * cart.quantity).toFixed(2);
                return (
                    <div className='item__wrapper' key={cart.isbn13}>
                        <div className='image__basket-wrapper' style={{ backgroundColor: getRandomColor() }}>
                            <img className='image-basket' src={cart.image} alt={cart.title} />
                        </div>
                        <div className='details__wrapper'>
                            <div className='basket__details'>

                                <Link to={`/books/${cart.isbn13}`} className='title__item-basket' onClick={liftUpPage}>{cart.title}</Link>
                                <div className='author__item-basket'>{cart.authors}</div>
                                <div className='quantity-wrapper'>
                                    <Minus onClick={() => handleRemoveQuantity(cart.isbn13)} />
                                    <div className='count__books'>{cart.quantity}</div>
                                    <Plus onClick={() => handleAddQuantity(cart.isbn13)} />
                                </div>

                            </div>
                            <div className="price-cancel__wrapper">
                                <div className='price__wrapper'>
                                    <div className='price__item-basket'>${totalPriceForItem}</div>
                                </div>
                                <div className='cancel__wrapper'>
                                    <CancelIcon onClick={() => handleRemoveFromCart(cart.isbn13)} />
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
            <div className='count'>
                <div className='count__wrapper'>
                    <div className='sum__count-wrapper'>
                        <div className='sum-wrapper'>
                            <div className='sum-title'>Sum total</div>
                            <div className='sum'>$ {totalSum.toFixed(2)}</div>
                        </div>
                        <div className='vat-wrapper'>
                            <div className='vat-title'>VAT</div>
                            <div className='vat'>$ {vat}</div>
                        </div>
                        <div className='total-wrapper'>
                            <div className='total-title'>TOTAL</div>
                            <div className='total-sum'>$ {total}</div>
                        </div>
                        <Link to='/order'>
                            <button
                                className='check-out__button'
                                onClick={handleCheckout}
                            >CHECK OUT</button>
                        </Link>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export { BooksBasket }


