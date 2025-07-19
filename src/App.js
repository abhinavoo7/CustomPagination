import { useCallback, useEffect, useState } from "react";
import {
  LOADING_TEXT,
  NO_PRODUCTS_TEXT,
  PAGE_HEADING,
  PAGE_SIZE,
} from "./lib/Constants";
import Pagination from "./Pagination/Pagination";
import ProductCard from "./ProductCard/ProductCard";
import "./styles.css";

export default function App() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(false);

  // fetch products and update the state
  const fetchProducts = async () => {
    try {
      const data = await fetch("https://dummyjson.com/products?limit=200");
      const jsonData = await data.json();
      console.log(jsonData.products.length);
      setProducts(jsonData.products);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchProducts();
  }, []);

  const totalProducts = products.length;
  const noOfPages = Math.ceil(totalProducts / PAGE_SIZE);
  const start = currentPage * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  /**
   * @description function to go to next page
   * @note: it will not be called already on last page
   */
  const handleNext = useCallback(() => {
    setCurrentPage((prev) => prev + 1);
  }, []);

  /**
   * @description function to go to previous page
   * @note: it will not be called if already on first page
   */
  const handlePrev = useCallback(() => {
    setCurrentPage((prev) => prev - 1);
  }, []);

  /**
   * @description function to handle page change when
   * clicked directly on page number
   * @param {number} pageNumber
   */
  const handlePageChange = useCallback((pageNumber) => {
    setCurrentPage(pageNumber);
  }, []);

  // If no products are present then early return with message
  if (!products.length && !loading) {
    return <h1>{NO_PRODUCTS_TEXT}</h1>;
  }

  if (loading) {
    return <h1>{LOADING_TEXT}</h1>;
  }

  return (
    <div className="app">
      <h1>{PAGE_HEADING}</h1>
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
