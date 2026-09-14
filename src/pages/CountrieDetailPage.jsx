import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const ProductDetailPage = () => {
  // React router provides a useful hook which you can use to
  // extract params 👇
  const params = useParams();

  // React router provides another useful hook which you can use
  // to navigate programmatically 👇
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);


  useEffect(() => {
    // Fetch the product details using async/await
    const fetchProduct = async () => {
      try {
        const url = `https://countries.dev/countries/alpha/${params.countrieId}`;
        const res = await fetch(url);
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        console.error("Failed to fetch product:", err);
      }
    };

    fetchProduct();
  }, [params.countrieId, navigate]);

  // We want to render some loading state if the product is not yet loaded 👇
  if (!product) return <p>Loading product...</p>;

  // We want to render the product details 👇
  return (
    <div
      style={{
        borderRadius: "15px",
        border: "solid black 4px",
        padding: "20px",
        margin: "20px",
      }}
    >
      <h1>{product.name}</h1>
      <img src={product.flags.svg}/>
      <p>Capital: {product.capital}</p>
      <p>Region: {product.region}</p>
      <p>poblacion: {product.population}</p>
    </div>
  );
};

export default ProductDetailPage;
