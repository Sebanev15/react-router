import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

const CountryDetailPage = () => {
  // React router provides a useful hook which you can use to
  // extract params 👇
  const { cca2 } = useParams();

  const [country, setCountry] = useState(null);

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const url = `https://countries.dev/alpha/${cca2}`;
        const res = await fetch(url);
        const data = await res.json();
        setCountry(data);
      } catch (err) {
        console.error("Failed to fetch country:", err);
      }
    };

    fetchCountry();
  }, [cca2]);

  // We want to render some loading state if the country is not yet loaded 👇
  if (!country) return <p>Loading country...</p>;

  // We want to render the country details 👇
  return (
    <div
      style={{
        borderRadius: "15px",
        border: "solid black 4px",
        padding: "20px",
        margin: "20px",
      }}
    >
      <h1>{country.name}</h1>
      <img
        src={country.flags?.png}
        alt={`Flag of ${country.name}`}
        style={{ width: "16rem" }}
      />
      <p>Capital: {country.capital}</p>
      <p>Region: {country.region}</p>
      <p>Subregion: {country.subregion}</p>
      <p>Population: {country.population?.toLocaleString()}</p>
      <p>Country Code: {cca2}</p>
      <Link to="/countries">Back to countries</Link>
    </div>
  );
};

export default CountryDetailPage;
