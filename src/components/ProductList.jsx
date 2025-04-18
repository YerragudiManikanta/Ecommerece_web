import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectFilteredProducts, setProducts } from "../store/productsSlice";
import { addItem } from "../store/cartSlice";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './ProductList.css';

const ProductList = () => {
  const dispatch = useDispatch();
  const filteredProducts = useSelector(selectFilteredProducts);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      dispatch(setProducts(data.products));
    };
    fetchProducts();
  }, [dispatch]);

  const handleAddToCart = (product) => {
        // Dispatch the action to add the item to the cart
        dispatch(addItem({
          id: product.id,
          title: product.title,
          price: product.price
        }));
        
        // Show success toast and capture the toastId
        const toastId = toast.success(`${product.title} added to cart!`, {
          autoClose: 2000, // Automatically close the toast after 2 seconds
        });
      
        // Manually dismiss the toast after 2 seconds (just in case)
        setTimeout(() => toast.dismiss(toastId), 2000);
      };
      
      

  return (
    <div className="product-list">
      
      {filteredProducts.map(product => (
        <div className="product-card" key={product.id}>
          <img src={product.thumbnail} alt={product.title} />
          <h2>{product.title}</h2>
          <p>${product.price}</p>
          <button onClick={() => handleAddToCart(product)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
