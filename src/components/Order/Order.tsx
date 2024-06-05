import './Order.css'
import { Link } from 'react-router-dom';


const Order = () => {
    return (
      <div className='confirmation__page'>
        <div className='confirm-form__wrapper'>
          <div className='confirm-form__innertext'>
            Successfully!
            Your order has been placed, we will call you back soon!
          </div>
          <div className='button-confirm__container'>
            <Link to='/books' className='button__confirm'>    
              back shopping
                </Link>
          </div>
        </div>
      </div>
    )
}

export { Order }