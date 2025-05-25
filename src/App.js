import { useEffect, useState } from "react";
import { PAGE_SIZE } from "./lib/Constants";
import Pagination from "./Pagination/Pagination";
import ProductCard from "./ProductCard/ProductCard";
import "./styles.css";

export default function App() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  // fetch products and update the state
  const fetchProducts = async () => {
    try {
      const data = await fetch("https://dummyjson.com/products?limit=200");
      const jsonData = await data.json();
      console.log(jsonData.products.length);
      setProducts(jsonData.products);
    } catch (err) {
      console.error(err);
    }
  };

  /**
   * @description function to handle page change when
   * clicked directly on page number
   * @param {number} pageNumber
   */
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const totalProducts = products.length;
  const noOfPages = Math.ceil(totalProducts / PAGE_SIZE);
  const start = currentPage * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  // Function to go to next page
  const handleNext = () => {
    setCurrentPage((prev) => prev + 1);
  };

  // Function to go to previous page
  const handlePrev = () => {
    setCurrentPage((prev) => prev - 1);
  };

  // If no products are present then early return with message
  if (!products.length) {
    return <h1>No Products</h1>;
  }

  return (
    <div className="App">
      <h1>Paginated Products</h1>
      <div className="products-container">
        {products.slice(start, end).map(({ id, title, thumbnail }) => {
          return <ProductCard key={id} image={thumbnail} title={title} />;
        })}
      </div>
      <Pagination
        currentPage={currentPage}
        handleNext={handleNext}
        handlePageChange={handlePageChange}
        handlePrev={handlePrev}
        noOfPages={noOfPages}
      />
    </div>
  );
}
