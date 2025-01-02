import { useState } from "react";
import { useCardContext } from "../../context/CartContext";
import PriceDisplay from "../../utils/formartCurrencyPrice";
import s from "./Card.module.css";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

interface PropsCard {
  Image: string;
  Title: string;
  Price: string | number;
  Rating?: number;
}

const Card: React.FC<PropsCard> = ({ Image, Title, Price, Rating }) => {
  const { addToCart } = useCardContext();
  const [notificationVisible, setNotificationVisible] = useState(false);

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} className={s.Star} />);
      } else if (i - rating < 1) {
        stars.push(<FaStarHalfAlt key={i} className={s.Star} />);
      } else {
        stars.push(<FaRegStar key={i} className={s.Star} />);
      }
    }
    return stars;
  };

  const handleAddToCart = () => {
    addToCart({ Image, Title, Price, quantity: 1 });
    setNotificationVisible(true);
    setTimeout(() => {
      setNotificationVisible(false);
    }, 1000);
  };

  return (
    <section className={s.Container}>
      <div className={s.Image}>
        <img src={Image} alt="Imagem do produto" />
      </div>

      {Price > "0" ? (
        <div>
          <div className={s.Title}>
            <p>{Title}</p>
          </div>
          <div className={s.FeedBack}>
            {Rating && <div className={s.Stars}>{renderStars(Rating)}</div>}
          </div>
          <div className={s.PriceOriginal}>
            <PriceDisplay Price={Price.toString()} />
          </div>
          <div className={s.ButtonBuy}>
            <button onClick={handleAddToCart}>Adicionar ao Carrinho</button>
          </div>
        </div>
      ) : (
        <div className={s.OutOfStock}>
          <p>FORA DE ESTOQUE</p>
        </div>
      )}

      {notificationVisible && (
        <div className={s.Notification}>
          <p>Item adicionado ao carrinho!</p>
        </div>
      )}
    </section>
  );
};

export default Card;
