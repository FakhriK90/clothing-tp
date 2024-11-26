import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/cart.context'
import { Button } from '@mui/material';
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/CartItem';

const CartDropdown = () => {
  const {cartItems} = useContext(CartContext);
  const navigate = useNavigate();

    const handleCheckout = () => {
        navigate('/checkout');
    }
  return (
    <div className='cart-dropdown-container'>
            <div className='cart-items'>
              {cartItems.map(item => <CartItem key={item.id} cartItem={item}/>)}
            </div>
            <Button className='button3' onClick={handleCheckout} >GO TO CHECKOUT</Button>
        </div>
  )
}

export default CartDropdown