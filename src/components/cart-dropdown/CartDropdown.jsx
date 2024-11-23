import { Button } from '@mui/material';
import './cart-dropdown.styles.scss';

const CartDropdown = () => {
  return (
    <div className='cart-dropdown-container'>
            <div className='cart-items'></div>
            <Button className='button3'>GO TO CHECKOUT</Button>
        </div>
  )
}

export default CartDropdown