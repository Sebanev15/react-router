import { useState, useEffect } from "react";
import CountriesList from "../components/CountriesList.jsx";

const url = "https://countries.dev/countries";

const CountriesPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [countriesList, setCountriesList] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      const response = await fetch(url);
      const countriesData = await response.json();

      setCountriesList(countriesData);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      {isLoading && <span>Loading...</span>}

      {!isLoading && <CountriesList items={countriesList} />}
    </>
  );
};

export default CountriesPage;
