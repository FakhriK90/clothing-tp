import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './contexts/user.context.jsx';
import { ProductsProvider } from './contexts/products.context.jsx';
import {CartContext} from './contexts/cart.context.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <UserProvider>
  <ProductsProvider>
  <CartContext>
    <StrictMode>
    <App />
  </StrictMode>
  </CartContext>
  </ProductsProvider>
  </UserProvider>
  </BrowserRouter>
)
