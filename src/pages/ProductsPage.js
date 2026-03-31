import React, { useState } from 'react';
import { Card, Button, InputNumber, Typography, Divider, Row, Col, message } from 'antd';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import { products, categories } from '../data/products';

const { Title, Text } = Typography;
const { Meta } = Card;

function ProductsPage({ cart, setCart }) {
  const addToCart = (product, quantity) => {
    if (quantity <= 0) {
      message.warning('Please select quantity greater than 0');
      return;
    }

    const existingItemIndex = cart.findIndex(item => item.id === product.id);

    let updatedCart;
    if (existingItemIndex > -1) {
      updatedCart = cart.map((item, index) =>
        index === existingItemIndex
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
    } else {
      updatedCart = [
        ...cart,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          quantity: quantity
        }
      ];
    }

    setCart(updatedCart);

    message.success(`${product.name} added to cart!`);
  };

  return (
    <div>
      <Title level={2}>Products</Title>
      
      {categories.map(category => (
        <div key={category} style={{ marginBottom: '40px' }}>
          <Divider orientation="left">
            <Title level={3}>{category}</Title>
          </Divider>
          
          <Row gutter={[16, 16]}>
            {products
              .filter(product => product.category === category)
              .map(product => (
                <Col xs={24} sm={12} md={8} lg={6} key={product.id}>
                  <ProductCard product={product} addToCart={addToCart} />
                </Col>
              ))}
          </Row>
        </div>
      ))}
    </div>
  );
}

function ProductCard({ product, addToCart }) {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <Card
      hoverable
      cover={
        <img 
          alt={product.name} 
          src={product.image} 
          style={{ height: '200px', objectFit: 'cover' }}
        />
      }
      actions={[
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
          <Button 
            icon={<MinusOutlined />} 
            onClick={handleDecrement}
            disabled={quantity <= 1}
          />
          <InputNumber 
            min={1} 
            value={quantity} 
            onChange={(value) => setQuantity(value || 1)}
            style={{ width: '60px' }}
          />
          <Button 
            icon={<PlusOutlined />} 
            onClick={handleIncrement}
          />
        </div>,
        <Button 
          type="primary" 
          onClick={() => addToCart(product, quantity)}
          block
        >
          Add to Cart
        </Button>
      ]}
    >
      <Meta 
        title={product.name}
        description={
          <>
            <Text strong style={{ fontSize: '18px', color: '#e17055' }}>
              ₹{product.price}
            </Text>
            <br />
            <Text type="secondary">{product.description}</Text>
          </>
        }
      />
    </Card>
  );
}

export default ProductsPage;