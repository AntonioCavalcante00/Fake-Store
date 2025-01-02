import { useQuery } from "@tanstack/react-query";
import Card from "../components/shared/Card";

import s from "./Home.module.css";

import axios from "axios";
import { Spin } from "../components/shared/Spin";

type PropsCard = {
  id: number;
  image: string;
  title: string;
  price: string;
  rating: {
    rate: number;
  };
};

export const Home: React.FC = () => {
  const { data, isLoading } = useQuery<PropsCard[], Error>({
    queryKey: ["products"],
    queryFn: async () => {
      const response = await axios.get("https://fakestoreapi.com/products");
      return response.data as PropsCard[];
    },
    refetchInterval: 60000,
  });

  return (
    <div>
      <h1>Produtos</h1>
      {isLoading && <Spin />}
      <div className={s.Container}>
        {data?.map((product) => (
          <Card
            key={product.id}
            Image={product.image}
            Title={product.title}
            Price={product.price}
            Rating={product.rating.rate}
          />
        ))}
      </div>
    </div>
  );
};
