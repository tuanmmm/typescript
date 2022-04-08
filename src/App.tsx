import { useEffect, useState } from 'react'
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import logo from './logo.svg'
import "bootstrap/dist/css/bootstrap.min.css";
import "./dashboard.css";

import ShowInfo from './components/ShowInfo'
import Product from './components/Product'
import { list, remove, add, update } from './api/product';
import axios from 'axios';
import type { IProduct } from './types/product';
import AdminLayout from './pages/layouts/AdminLayout';
import WebsiteLayout from './pages/layouts/WebsiteLayout';
import Dashboard from './pages/Dashboard';
import ProductManager from './pages/ProductManager';
import Home from './pages/Home';
import ProductAdd from './pages/ProductAdd';
import ProductEdit from './pages/ProductEdit';
import Signup from './pages/signup';
import ProductDetail from './pages/ProductDetail';

function App() {
  const [count, setCount] = useState(0)
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await list();
      setProducts(data);
      console.log(data);

    };
    getProducts();

  }, [])
  const removeItem = (id: number) => {
    // call api
    remove(id);

    // reRender
    setProducts(products.filter(item => item.id !== id));
  }
  const onHandleAdd = async (product: IProduct) => {
    const { data } = await add(product);
    console.log(data);
    setProducts([...products, data]);
  }
  const onHandleUpdate = async (product: IProduct) => {
    const { data } = await update(product);
    setProducts(products.map(item => item.id == data.id ? data : item));
  }

  return (
    <div className="App">
      <main>

        <Routes>
          <Route path="/" element={<WebsiteLayout />}>
            <Route index element={<Home products={products} />} />
            <Route path='ProductDetail'>
              <Route path=':id' element={<ProductDetail />}/>
            </Route>
          </Route>
          <Route path="admin" element={<AdminLayout />}>
            <Route index element={<Navigate to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="products">
              <Route index element={<ProductManager products={products} onRemove={removeItem} />} />
              <Route path="add" element={<ProductAdd onAdd={onHandleAdd} />} />
              <Route path=":id/edit" element={<ProductEdit onUpdate={onHandleUpdate} />} />
            </Route>
          </Route>
          <Route path="Signup" element={<Signup />} />
        </Routes>
      </main>
    </div>
  )
}

export default App