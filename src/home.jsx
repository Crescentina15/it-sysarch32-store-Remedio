// eslint-disable-next-line no-unused-vars
import React, { useState, useRef, useEffect } from 'react';
import './index.css'; // Import CSS file for styling

function Home() {
  const [expandedProduct, setExpandedProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  const expandedImageRef = useRef(null);

  const handleExpandClick = (product) => {
    setExpandedProduct((prevExpandedProduct) => (prevExpandedProduct === product ? null : product));
  };

  const handleClickOutside = (event) => {
    if (expandedImageRef.current && !expandedImageRef.current.contains(event.target)) {
      setExpandedProduct(null);
    }
  };

  const handleAddToCart = (product) => {
    setCartItems((prevCartItems) => [...prevCartItems, product]);
  };

  const handleRemoveFromCart = (index) => {
    setCartItems((prevCartItems) => prevCartItems.filter((_, i) => i !== index));
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const products = [
    {
      id: 1,
      imageUrl: "https://lzd-img-global.slatic.net/g/p/bf649f84b2b7b0167a01f18ac540c4ca.jpg_360x360q75.jpg_.webp",
      name: "Queen of Tears Four Leaf Clover Key Chain",
      price: "₱99.00"
    },
    {
      id: 2,
      imageUrl: "https:/images.uncommongoods.com/images/items/49900/49987_1_640px.jpg",
      name: "Queen of Tears Four Leaf Clover Necklace",
      price: "₱199.00"
    },
  ];

  return (
    <div>
      <div className="Title">
        <h1><p>Queens Store</p></h1>
        <div className="bannerHolder"> {/* Adjusted banner position */}
          <img className="bannerImage" src="https://media.proprofs.com/images/QM/user_images/2503852/-Queen-of-Tears-Series-(1).webp" alt="Featured" />
        </div>
      </div>
      
      <div className="product-holder">
        {products.map((product) => (
          <div className="product-item" key={product.id}>
            <img src={product.imageUrl} alt={product.name} />
            <div className="product-details">
              <div className="name">{product.name}</div>
              <div className="price">{product.price}</div>
            </div>
            <div className="button-container">
              <button className="button" onClick={() => handleExpandClick(product)}>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAwUlEQVR4nO2W0Q6DIAxF709I9P+/RElE3Z62Bz+ni8mWkIZqC+5hk5sQH+T2gNJSoOqKCgAoMbzC6wVv0IBJGEMBmKzgFUAHuxoAj1zwM3o6A9QxrxncRKvW7px72hwwjPAUFBawZwcp/nTLju8m/Boez6Qt0P0gLcJ7juU8VFVdUA7ACKDfmTOUptPM8jUuINs7SYtQQHi8rJL5KYMpSeW1+JJoFd4U/HeuRTLs9NRGgE7suUgDnr/Qc00acNV/6QWOipWwBk6UrwAAAABJRU5ErkJggg=="></img>
              </button>
            </div>
          </div>
        ))}
      </div>

      {expandedProduct && (
        <div className="expanded-image" ref={expandedImageRef}>
          <img src={expandedProduct.imageUrl} alt="Expanded" />
          <div className="product-details white-text"> {/* Added class for white text */}
            <div className="name">{expandedProduct.name}</div>
            <div className="price">{expandedProduct.price}</div>
          </div>
          <button className="add-to-cart-button" onClick={() => handleAddToCart(expandedProduct)}><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA5UlEQVR4nN2UsQ7BUBSGPwsGAxEziweQiGdQEpNX8QzSd5B0EJ7AKGG3moytCSPBQKXJGZpI6tzmVsKX3O075z+3PS38C08glONlEfCIBdyAGhmxiAWlPaukgJ6FgG1SQA7YiRiFaSkDR6kbfJJHIkaPS4srNWuNXAEusllNhd8AruK3tRN5MpGrcOfiTjGgJUUnoJjgdWTy6AZ1DNkYbM7YtHkVOCgaR5PPgIJpwEQaLGV1rVKS38VduUXG5IFzyq9YzVD5DsK0AZnTB/ZAADgWvDeC2LV9C973Axwp9oGuBe+HeQGdhY4nafPkOQAAAABJRU5ErkJggg=="></img></button>
        </div>
      )}

      <div className="cart">
        <h2>Cart</h2>
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              <img src={item.imageUrl} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <div className="cart-item-name">{item.name}</div>
                <div className="cart-item-price">{item.price}</div>
              </div>
              <button className="button" onClick={() => handleRemoveFromCart(index)}><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAeUlEQVR4nN3OsQnCUBSF4a+1SOMIzmJhsBQcwVmcJbM4RWLtCk8uPMEkBJKXFOIPp7vnv4c+OxxwxA13NHjghZQzIhVmO8FvkNbOT/8vaHFBhf1SQTtVmiuIz8EZT3SolwiqfBPF71WzBZ/5xYJrvonZIYnyaSgo4g09B4uQKt9IBgAAAABJRU5ErkJggg=="></img></button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Home;
