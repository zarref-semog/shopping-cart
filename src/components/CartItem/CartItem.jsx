import React, { useContext } from 'react';
import './CartItem.css';
import { BsCartDashFill } from 'react-icons/bs';
import propTypes from 'prop-types';
import formatCurrency from '../../utils/formatCurrency';
import AppContext from '../../context/AppContext';

function CartItem({ data }) {

  const { id, thumbnail, title, price } = data;

  const { cartItems, setCartItems } = useContext(AppContext);

  const handleRemoveItem = () => {
    const updateCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updateCartItems);
  }

  return (
    <section className='cart-item'>
      <img src={thumbnail} alt='imagem do produto' className='cart-item-image' />
      <div className='cart-item-content'>
        <h3 className='cart-item-title'>{title}</h3>
        <h3 className='cart-item-price'>{formatCurrency(price, 'BRL')}</h3>
        <button type='button' className='button__remove-item' onClick={ handleRemoveItem }>
          <BsCartDashFill />
        </button>
      </div>
    </section>
  );
}

export default CartItem;

CartItem.propTypes = {
  data: propTypes.object
}.isRequired;