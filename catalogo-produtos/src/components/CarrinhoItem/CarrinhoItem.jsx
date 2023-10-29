/* eslint-disable react/prop-types */
/* eslint-disable indent */
import { BsCartDashFill } from 'react-icons/bs';
import './CarrinhoItem.css';
import { useCart } from '../../context/useCartContext';

function CarrinhoItem(props) {
  const { removeFromCart } = useCart();

  const handleRemoveFromCart = () => {
    removeFromCart({
      id: props.id,
      title: props.title,
      autor: props.autor,
      img: props.img,
      preco: props.preco,
      editora: props.editora,
    });
  };

  return (
    <section className="carrinho-item">
      <img src={props.img} alt="imagem do produto" className="cart-item-image" />
      <div className="cart-item-content">
        <h3 className="cart-item-title">{props.title}</h3>
        <h3 className="cart-item-preco">R${props.preco}</h3>
        <button type="button" className="remover-carrinho" onClick={handleRemoveFromCart}>
           <BsCartDashFill /> 
        </button>
      </div>
    </section>
  );
}

export default CarrinhoItem;

