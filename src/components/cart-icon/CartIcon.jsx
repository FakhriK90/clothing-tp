import './cart-icon.styles.scss';
import ShoppingBag from './ShoppingBag';


const CartIcon = () => {
  return (
    <div className='cart-icon-container'>
        <ShoppingBag className='shopping-icon'/>
        <span className='item-count'>0</span>
    </div>
  )
}

export default CartIcon