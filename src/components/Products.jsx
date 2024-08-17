import React, { useState, useEffect } from "react";
import { addToCart } from "../store/cartSlice";
import { fetchProducts } from "../store/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { STATUS } from "../store/productSlice";

const Products = () => {
  //    const [products, setProducts] = useState([]);
  const { data: products, status } = useSelector((state) => state.product);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
    // const fetchProducts = async () => {
    //     const response = await fetch('https://fakestoreapi.com/products');
    //     const data = await response.json();
    //     setProducts(data);
    // }
    // fetchProducts();
  }, []);

  const handleAddtoCart = (product) => {
    dispatch(addToCart(product));
  };

  if (status === STATUS.LOADING)
    return (
      <>
        <div className="flex items-center justify-center h-screen">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-t-4 border-gray-300 border-t-blue-300 rounded-full animate-spin"></div>
            <p className="mt-4 text-lg text-gray-700">Loading...</p>
          </div>
        </div>
      </>
    );

  if (status === STATUS.ERROR) {
    return (
      <>
        <div className="flex items-center justify-center h-screen">
          <div className="relative">
            <p className="mt-4 text-lg text-gray-700">
              An error occurred while fetching products.
            </p>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white p-4 rounded-lg shadow-md flex flex-col"
        >
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-48 object-cover mb-4 rounded"
          />
          <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
          <p className="text-gray-700 mb-2">{product.description}</p>
          <p className="text-lg font-bold mb-4">${product.price}</p>
          <div className="mt-auto">
            <button
              className="bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-500 transition w-full"
              onClick={() => handleAddtoCart(product)}
            >
              Add to cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
