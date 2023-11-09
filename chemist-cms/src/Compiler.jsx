import { useState } from 'react'
import Login from './Login'
import AddUser from './AddUser'
import Products from './Products/Products'
import ProductsDetail from './Products/ProductsDetail'
import ProductsAdd from './Products/ProductsAdd'
import ProductsEdit from './Products/ProductsEdit'
import Categories from './Categories/Categories'
import Nav from './Nav'

function Compiler() {
  return (
<>
  <Nav />
  <Login />
  <AddUser />
  <Products />
  <ProductsDetail />
  <ProductsAdd />
  <ProductsEdit />
  <Categories />
</>

  )
}

export default Compiler
