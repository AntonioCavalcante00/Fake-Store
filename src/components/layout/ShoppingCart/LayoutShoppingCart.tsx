import { CiShoppingCart } from "react-icons/ci";
import s from "./LayoutShoppingCart.module.css";
import EmptyCart from "./BackDrop/EmptyCart";

interface LayoutShoppingCarProps {
  isVisible: boolean;
  onClose: () => void;
}

const LayoutShoppingCar: React.FC<LayoutShoppingCarProps> = ({
  isVisible,
  onClose,
}) => {
  const handleClose = () => {
    setTimeout(() => {
      onClose();
    }, 400);
  };

  return (
    <div className={`${s.ExtraContent} ${isVisible ? s.Open : s.Lock}`}>
      <div className={s.ExtraContentHeader}>
        <div className={s.ContainerIconShoppingCar}>
          <CiShoppingCart className={s.IconShoppingCar} />
          <p>CARRINHO</p>
        </div>

        <button className={s.ButtonClose} onClick={handleClose}>
          X
        </button>
      </div>
      <div className={s.ExtraContentBody}>
        <EmptyCart />
      </div>
    </div>
  );
};

export default LayoutShoppingCar;
