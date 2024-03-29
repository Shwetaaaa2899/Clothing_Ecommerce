import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import ProductsProvider from "./context/productsContext"
import  AuthProvider from "./context/authcontext"
import WishListProvider from "./context/WishlistContext"
import CartListProvider from "./context/CartContext"
import  AddresssProvider from "./context/addresscontext"
// import { ToastContainer } from 'react-toastify';


// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
  <ProductsProvider>
  <AuthProvider>


  <CartListProvider>
  <WishListProvider>
  <AddresssProvider>
  
  <App />
  </AddresssProvider>
</WishListProvider>
</CartListProvider>
 
 
  </AuthProvider>
  </ProductsProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
