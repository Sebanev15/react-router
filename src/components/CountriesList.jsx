import CountrieItem from "./CountrieItem.jsx";

const CountriesList = ({ items }) => {
  return items?.length > 0 ? (
    <ul className="contenedorPaises">
      {items.map((item) => {
        return <CountrieItem key={item.alpha3Code} countrieItem={item} />;
      })}
    </ul>
  ) : (
    <span>No products...</span>
  );
};

export default CountriesList;
