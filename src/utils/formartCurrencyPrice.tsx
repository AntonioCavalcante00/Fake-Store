interface Props {
  Price: string | number;
}

const PriceDisplay: React.FC<Props> = ({ Price }) => {
  const priceAsString = Price.toString();
  const priceAsNumber = parseFloat(priceAsString);

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
