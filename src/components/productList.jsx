import ProductItem from "./ProductItem.jsx";

const ProductList = ({ items }) => {
  return items?.length > 0 ? (
    <ul>
      {items.map((item) => {
        return <ProductItem key={item.id} productItem={item} />;
      })}
    </ul>
  ) : (
    <span>No products...</span>
  );
};

export default ProductList;
