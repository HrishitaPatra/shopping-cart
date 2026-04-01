import React, {useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {Provider, useSelector, useDispatch} from 'react-redux';
import { Layout, Menu, Badge } from 'antd';
import { ShoppingCartOutlined, AppstoreOutlined } from '@ant-design/icons';
import 'antd/dist/reset.css';
import './App.css';
import ProductsPage from './pages/ProductsPage';
import store from './redux/store';
import {selectCartCount} from './redux/selectors.js';
import {fetchProducts} from './redux/actions/productActions.js';
import CartPage from './pages/CartPage';

const { Header, Content } = Layout;

function AppContent() {
  const dispatch = useDispatch();
  const cartCount = useSelector(selectCartCount);
  const cart = useSelector(state => state.cart.items);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <Header style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
            <div style={{ color: 'white', fontSize: '20px', marginRight: '50px' }}>
              🛒 Shopping Cart
            </div>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['products']}>
              <Menu.Item key="products" icon={<AppstoreOutlined />}>
                <Link to="/">Products</Link>
              </Menu.Item>
              <Menu.Item key="cart" icon={<ShoppingCartOutlined />}>
                <Link to="/cart">
                  <Badge count={cartCount} offset={[10, 0]}>
                    Cart
                  </Badge>
                </Link>
              </Menu.Item>
            </Menu>
          </div>
        </Header>
        <Content style={{ padding: '50px' }}>
          <Routes>
            <Route path="/" element={<ProductsPage/>} />
            <Route path="/cart" element={<CartPage/>} />
          </Routes>
        </Content>
      </Layout>
    </Router>
  );
}

function App() {
  return (
    <Provider store = {store}>
      <AppContent />
    </Provider>
  );
}

export default App;
