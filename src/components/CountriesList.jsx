import CountrieItem from "./CountrieItem.jsx";
import {useTheme} from "../context/ThemeContext.jsx";

const CountriesList = ({ items }) => {
  const { darkMode } = useTheme();

  return items?.length > 0 ? (
    <ul className={darkMode ? "dark-mode " : "light-mode "+ "contenedorPaises " }>
      {items.map((item) => {
        return <CountrieItem key={item.alpha3Code} countrieItem={item} />;
      })}
    </ul>
  ) : (
    <span>No products...</span>
  );
};

export default CountriesList;
