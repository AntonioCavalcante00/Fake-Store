import ShoppingCart from "../layout/ShoppingCart/BackDrop/ShoppingCart";

import s from "./Header.module.css";

export default function Header() {
  return (
    <div className={s.Container}>
      <div className={s.Logo}>
        <p>Fake Store</p>
      </div>
      <div className={s.Icons}>
        <ShoppingCart />
      </div>
    </div>
  );
}
