import {useContext} from 'react';
import {CartContext} from '../../contexts/cart.context';
import './cart-icon.styles.scss';
import ShoppingBag from './ShoppingBag';


const CartIcon = () => {
  const {isCartOpen, setIsCartOpen} = useContext(CartContext);

  const toogleIsCartOpen = ()=> setIsCartOpen(!isCartOpen);
  return (
    <div className='cart-icon-container' onClick={toogleIsCartOpen}>
        <ShoppingBag className='shopping-icon'/>
        <span className='item-count'>0</span>
    </div>
  )
}

export default CartIcon