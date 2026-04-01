export const products = [
  {
    id: 1,
    name: 'Wireless Headphones',
    category: 'Electronics',
    price: 6499,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
    description: 'High-quality wireless headphones with noise cancellation'
  },
  {
    id: 2,
    name: 'Smart Watch',
    category: 'Electronics',
    price: 16499,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
    description: 'Fitness tracking smart watch with heart rate monitor'
  },
  {
    id: 3,
    name: 'Bluetooth Speaker',
    category: 'Electronics',
    price: 3999,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop',
    description: 'Portable waterproof bluetooth speaker'
  },
  {
    id: 4,
    name: 'Cotton T-Shirt',
    category: 'Clothing',
    price: 499,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
    description: 'Comfortable 100% cotton t-shirt'
  },
  {
    id: 5,
    name: 'Denim Jeans',
    category: 'Clothing',
    price: 1999,
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop',
    description: 'Classic fit denim jeans'
  },
  {
    id: 6,
    name: 'Winter Jacket',
    category: 'Clothing',
    price: 4999,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop',
    description: 'Warm winter jacket with hood'
  },
  {
    id: 7,
    name: 'JavaScript Guide',
    category: 'Books',
    price: 899,
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop',
    description: 'Complete guide to modern JavaScript'
  },
  {
    id: 8,
    name: 'React Handbook',
    category: 'Books',
    price: 799,
    image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=400&fit=crop',
    description: 'Learn React from scratch'
  },
  {
    id: 9,
    name: 'Design Patterns',
    category: 'Books',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&h=400&fit=crop',
    description: 'Software design patterns explained'
  },
  {
    id: 10,
    name: 'Coffee Maker',
    category: 'Home & Kitchen',
    price: 7499,
    image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=400&h=400&fit=crop',
    description: 'Automatic drip coffee maker'
  },
  {
    id: 11,
    name: 'Blender',
    category: 'Home & Kitchen',
    price: 4999,
    image: 'https://images.unsplash.com/photo-1585515320310-259814833e62?w=400&h=400&fit=crop',
    description: 'High-speed blender for smoothies'
  },
  {
    id: 12,
    name: 'Air Fryer',
    category: 'Home & Kitchen',
    price: 8499,
    image: 'https://images.unsplash.com/photo-1585515320310-259814833e62?w=400&h=400&fit=crop&auto=format',
    description: 'Healthy cooking air fryer'
  }
];

export const categories = [...new Set(products.map(p => p.category))];
