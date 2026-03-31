import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Layout, Menu, Badge } from 'antd';
import { ShoppingCartOutlined, AppstoreOutlined } from '@ant-design/icons';
import 'antd/dist/reset.css';
import './App.css';
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';

const { Header, Content } = Layout;

function App() {
  const [cart, setCart] = React.useState([]);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

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
            <Route path="/" element={<ProductsPage cart={cart} setCart={setCart} />} />
            <Route path="/cart" element={<CartPage cart={cart} setCart={setCart} />} />
          </Routes>
        </Content>
      </Layout>
    </Router>
  );
}

export default App;