import { useState, useEffect } from "react";
import CountryList from "../components/CountryList";

const url = "https://countries.dev/countries";

const CountriesPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [countryList, setCountryList] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      const response = await fetch(url);
      const countryData = await response.json();

      setCountryList(countryData);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      {isLoading && <span>Loading...</span>}

      {!isLoading && <CountryList items={countryList} />}
    </>
  );
};

export default CountriesPage;
