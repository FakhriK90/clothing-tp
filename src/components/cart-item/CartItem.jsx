import './cart-item.styles.scss';
import PropTypes from 'prop-types';

const CartItem = ({cartItem}) => {
    const {name,imageUrl,price, quantity} = cartItem;
  return (
    <div className='cart-item-container'>
    <img src={imageUrl} alt={`${name}`} />
    <div className="item-details">
    <span className='name'>{name}</span>
    <span className='price'>{quantity} * {price} DT</span>
    </div>
</div>
  )
}
CartItem.propTypes = {
  cartItem: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
};

export default CartItem;