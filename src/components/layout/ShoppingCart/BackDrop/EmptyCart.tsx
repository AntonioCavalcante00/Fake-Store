import { CarProps, useCardContext } from "../../../../context/CartContext";
import PriceDisplay from "../../../../utils/formartCurrencyPrice";
import s from "./EmptyCart.module.css";
import { BsFillCartDashFill } from "react-icons/bs";

const EmptyCart: React.FC = () => {
  const { cart, removeFromCart } = useCardContext();

  const handleRemoveFromCart = (item: CarProps) => {
    removeFromCart(item);
  };

  const totalPrice = cart.reduce((total, item) => {
    return (
      total +
      (typeof item.Price === "string" ? parseFloat(item.Price) : item.Price) *
        item.quantity
    );
  }, 0);

  if (cart.length === 0) {
    return <p>Seu carrinho está vazio.</p>;
  }

  return (
    <div>
      <div className={s.CartContainer}>
        {cart.map((item) => (
          <section key={item.Title} className={s.CartItem}>
            <img
              src={item.Image}
              alt="imagem do produto"
              className={s.CartItemImage}
            />

            <div className={s.CartItemContent}>
              <h3 className={s.CartItemTitle}>{item.Title}</h3>
              <h3 className={s.CartItemPrice}>
                <PriceDisplay Price={item.Price} />
              </h3>
              <span className={s.CartItemQuantity}>
                Quantidade: {item.quantity}
              </span>
              <button
                onClick={() => handleRemoveFromCart(item)}
                className={s.ButtonRemoveItem}
              >
                <BsFillCartDashFill />
              </button>
            </div>
          </section>
        ))}
      </div>

      <div className={s.TotalPrice}>
        <h3>Total:</h3>
        <PriceDisplay Price={totalPrice.toString()} />
      </div>
    </div>
  );
};

export default EmptyCart;
