import React from 'react'
import ReactDOM from 'react-dom/client'
import Nav from './Nav.jsx'
import ProductsPublic from './ProductsPublic.jsx'
import ProductsDetail from './ProductsDetail.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav />
    <ProductsDetail />
  </React.StrictMode>,
)
