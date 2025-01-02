interface Props {
  Price: string;
}

const PriceDisplay: React.FC<Props> = ({ Price }) => {
  const priceAsNumber = parseFloat(Price);

  if (isNaN(priceAsNumber)) {
    return <p>Preço inválido</p>;
  }

  return (
    <p>
      {priceAsNumber.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      })}
    </p>
  );
};

export default PriceDisplay;
