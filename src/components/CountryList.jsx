import CountryItem from "./CountryItem.jsx";

const CountryList = ({ items }) => {
  return items?.length > 0 ? (
    <ul>
      {items.map((item) => {
        return <CountryItem key={item.alpha2Code} countryItem={item} />;
      })}
    </ul>
  ) : (
    <span>No countries...</span>
  );
};

export default CountryList;
