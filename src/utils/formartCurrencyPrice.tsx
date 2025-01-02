interface Props {
  Price: string | number;
}

const PriceDisplay: React.FC<Props> = ({ Price }) => {
  const priceAsNumber = typeof Price === "number" ? Price : parseFloat(Price);

  // Verificar se o valor convertido é um número válido.
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
