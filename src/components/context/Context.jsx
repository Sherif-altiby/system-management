// ProductContext.js
import React, { createContext, useState } from "react";

// Create the context
const ProductContext = createContext();

// Create a provider component
const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([
    { name: "", amount: "", price: "", serial: "" }, // Initial product
  ]);

  const addProduct = () => {
    setProducts([...products, { name: "", amount: "", price: "", serial: "" }]);
  };

  const updateProduct = (index, updatedProduct) => {
    const updatedProducts = [...products];
    updatedProducts[index] = updatedProduct;
    setProducts(updatedProducts);
  };

  return (
    <ProductContext.Provider value={{ products, addProduct, updateProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductProvider };
