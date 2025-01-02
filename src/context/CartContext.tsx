import { createContext, useState, ReactNode, useContext } from "react";

export type CarProps = {
  Image: string;
  Title: string;
  Price: string | number;
  quantity: number;
};

type CardContextProps = {
  cart: CarProps[];
  addToCart: (item: CarProps) => void;
  removeFromCart: (item: CarProps) => void;
};

const CardContext = createContext<CardContextProps | undefined>(undefined);

export const useCardContext = () => {
  const context = useContext(CardContext);
  if (!context)
    throw new Error("useCardContext must be used within a CardProvider");
  return context;
};

type CardProviderProps = {
  children: ReactNode;
};

const CardProvider = ({ children }: CardProviderProps) => {
  const [cart, setCart] = useState<CarProps[]>([]);

  const addToCart = (item: CarProps) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (cartItem) => cartItem.Title === item.Title
      );

      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.Title === item.Title
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (item: CarProps) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (cartItem) => cartItem.Title === item.Title
      );

      if (existingItem && existingItem.quantity > 1) {
        return prevCart.map((cartItem) =>
          cartItem.Title === item.Title
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        );
      } else {
        return prevCart.filter((cartItem) => cartItem.Title !== item.Title);
      }
    });
  };

  return (
    <CardContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CardContext.Provider>
  );
};

export { CardContext, CardProvider };
