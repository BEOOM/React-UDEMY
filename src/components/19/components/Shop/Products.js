import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "b1",
    price: 6,
    title: "Book",
    description: "First",
  },
  {
    id: "b2",
    price: 7,
    title: "Ace",
    description: "Second",
  },
  {
    id: "b3",
    price: 10,
    title: "Plage",
    description: "Pig",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => {
          return (
            <ProductItem
              key={product.id}
              title={product.title}
              price={product.price}
              description={product.description}
              id={product.id}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Products;
