import { useState, useRef, useEffect } from "react";
import { useCardContext } from "../../../../context/CartContext";

import s from "./ShoppingCart.module.css";
import { CiShoppingCart } from "react-icons/ci";
import LayoutShoppingCar from "../LayoutShoppingCart";

const ShoppingCart: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const { cart } = useCardContext();

  // Calcular a quantidade total de itens no carrinho
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  const handleClick = () => setIsVisible(!isVisible);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsVisible(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <div className={s.BackDrop} onClick={() => setIsVisible(false)} />
      )}

      <div ref={containerRef} className={s.ContainerCar}>
        <button className={s.ButtonCart} onClick={handleClick}>
          <span className={s.CartStatus}>{totalItems}</span>
          <CiShoppingCart className={s.IconShoppingCart} />
          <span>Meu Carrinho</span>
        </button>
        {isVisible && (
          <LayoutShoppingCar
            isVisible={isVisible}
            onClose={() => setIsVisible(false)}
          />
        )}
      </div>
    </>
  );
};

export default ShoppingCart;
