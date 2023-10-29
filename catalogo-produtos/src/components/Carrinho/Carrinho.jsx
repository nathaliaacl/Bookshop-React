import './Carrinho.css';
import CarrinhoItem from '../CarrinhoItem/CarrinhoItem';
import { useCart } from '../../context/useCartContext';
import PropTypes from 'prop-types';
import { AiOutlineClose } from "react-icons/ai";

function Carrinho({handleClose}) {
  // eslint-disable-next-line no-unused-vars
  const { cartItems, isCartOpen } = useCart();
  const totalPrice = cartItems.reduce((total, livro) => total + parseFloat(livro.preco), 0);
  const formattedTotalPrice = totalPrice.toFixed(2);
  return (
    <section className="carrinho2">
      <h2 className="title2">Carrinho de Compras</h2>
      <p className="sair-carrinho" onClick={handleClose}><AiOutlineClose/></p>
      
      <ul className="CarrinhoList">
        {cartItems.map((livro) => (
          <div className="cart-itens" key={livro.id}>
            <CarrinhoItem
              id={livro.id}
              title={livro.title}
              img={livro.img}
              preco={livro.preco}
            />
          </div>
        ))}
      </ul>
      <p className="cart-resume">TOTAL: R$ {formattedTotalPrice}</p>
    </section>
  );
}

Carrinho.propTypes = {
    handleClose: PropTypes.any.isRequired,
  };
  

export default Carrinho;
