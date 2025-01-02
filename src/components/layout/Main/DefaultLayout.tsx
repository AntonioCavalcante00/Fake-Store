import { Outlet } from "react-router-dom";
import Header from "../../navbar/Header";
import { CardProvider } from "../../../context/CartContext";

export const DefaultLayout: React.FC = () => {
  return (
    <div>
      <CardProvider>
        <Header />
        <Outlet />
      </CardProvider>
    </div>
  );
};
