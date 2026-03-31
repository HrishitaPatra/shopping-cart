import React from 'react';
import { Card, Button, InputNumber, Typography, Empty, Row, Col, Statistic, Divider, message } from 'antd';
import { DeleteOutlined, ShoppingOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { Title, Text } = Typography;

function CartPage({ cart, setCart }) {
  const navigate = useNavigate();

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return;

    const updatedCart = cart.map(item =>
      item.id === productId ? { ...item, quantity: newQuantity } : item
    );

    setCart(updatedCart);
    message.success('Quantity updated!');
  };

  const incrementQuantity = (productId) => {
    const item = cart.find(item => item.id === productId);
    if (item) {
      updateQuantity(productId, item.quantity + 1);
    }
  };

  const decrementQuantity = (productId) => {
    const item = cart.find(item => item.id === productId);
    if (item && item.quantity > 1) {
      updateQuantity(productId, item.quantity - 1);
    } else if (item && item.quantity === 1) {
      removeItem(productId);
    }
  };

  const removeItem = (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
    message.success('Item removed from cart!');
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const calculateTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  if (cart.length === 0) {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <Empty
          description={
            <span>
              <Text strong>Your cart is empty!</Text>
              <br />
              <Text type="secondary">Add some products to get started</Text>
            </span>
          }
        >
          <Button type="primary" icon={<ShoppingOutlined />} onClick={() => navigate('/')}>
            Start Shopping
          </Button>
        </Empty>
      </div>
    );
  }

  return (
    <div>
      <Title level={2}>Shopping Cart</Title>
      
      <Row gutter={24}>
        <Col xs={24} lg={16}>
          {cart.map(item => (
            <Card key={item.id} style={{ marginBottom: '16px' }}>
              <Row gutter={16} align="middle">
                <Col xs={24} sm={6}>
                  <img 
                    src={item.image} 
                    alt={item.name}
                    style={{ width: '100%', borderRadius: '8px' }}
                  />
                </Col>
                
                <Col xs={24} sm={10}>
                  <Title level={4} style={{ marginBottom: '8px' }}>{item.name}</Title>
                  <Text strong style={{ fontSize: '18px', color: '#e17055' }}>
                    ₹{item.price}
                  </Text>
                </Col>
                
                <Col xs={24} sm={8}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <Button 
                        onClick={() => decrementQuantity(item.id)}
                        icon={item.quantity === 1 ? <DeleteOutlined /> : null}
                        danger={item.quantity === 1}
                      >
                        -1
                      </Button>
                      <InputNumber 
                        min={1}
                        value={item.quantity}
                        onChange={(value) => updateQuantity(item.id, value || 1)}
                        style={{ width: '70px' }}
                      />
                      <Button onClick={() => incrementQuantity(item.id)}>
                        +1
                      </Button>
                    </div>
                    
                    <Button 
                      danger 
                      icon={<DeleteOutlined />}
                      onClick={() => removeItem(item.id)}
                      block
                    >
                      Remove
                    </Button>
                    
                    <Text type="secondary">
                      Subtotal: <Text strong>₹{item.price * item.quantity}</Text>
                    </Text>
                  </div>
                </Col>
              </Row>
            </Card>
          ))}
        </Col>
        
        <Col xs={24} lg={8}>
          <Card title="Order Summary" style={{ position: 'sticky', top: '24px' }} styles={{ header: { backgroundColor: '#fff5f5', borderBottom: '2px solid #ff7675' } }}>
            <Statistic 
              title="Total Items" 
              value={calculateTotalItems()} 
              suffix="items"
            />
            <Divider />
            <Statistic
              title="Total Amount"
              value={calculateTotal()}
              prefix="₹"
              valueStyle={{ color: '#55efc4', fontSize: '28px' }}
            />
            <Divider />
            <Button type="primary" size="large" block
                onClick={() => message.info('Checkout completed!')}>
              Proceed to Checkout
            </Button>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default CartPage;