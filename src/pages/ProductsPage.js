import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, Button, InputNumber, Typography, Divider, Row, Col, message, Spin, Alert } from 'antd';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import { categories } from '../data/products';
import { addItem } from '../redux/actions/cartActions.js';
import { selectProducts, selectProductsLoading, selectProductsError } from '../redux/selectors.js';

const { Title, Text } = Typography;
const { Meta } = Card;

function ProductsPage() {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const loading = useSelector(selectProductsLoading);
  const error = useSelector(selectProductsError);

  const addToCart = (product, quantity) => {
    if (quantity <= 0) {
      message.warning('Please select quantity greater than 0');
      return;
    }

    dispatch(addItem(product, quantity));
    message.success(`${product.name} added to cart!`);
  };

  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '50px' }}>
        <Spin size="large" />
        <div style={{ marginTop: '20px' }}>Loading products...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ padding: '50px' }}>
        <Alert
          message="Error"
          description={error}
          type="error"
          showIcon
        />
      </div>
    );
  }

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