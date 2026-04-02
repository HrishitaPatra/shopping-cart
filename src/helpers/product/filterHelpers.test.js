import { filterProductsByCategory, getUniqueCategories } from './filterHelpers';

describe('Filter Helpers', () => {
  const mockProducts = [
    { id: 1, name: 'Headphones', category: 'Electronics' },
    { id: 2, name: 'T-Shirt', category: 'Clothing' },
    { id: 3, name: 'Laptop', category: 'Electronics' },
    { id: 4, name: 'Jeans', category: 'Clothing' },
    { id: 5, name: 'Book', category: 'Books' }
  ];

  describe('filterProductsByCategory', () => {
    test('filters products by category correctly', () => {
      const electronics = filterProductsByCategory(mockProducts, 'Electronics');
      expect(electronics).toHaveLength(2);
      expect(electronics[0].name).toBe('Headphones');
      expect(electronics[1].name).toBe('Laptop');
    });

    test('returns all matching products', () => {
      const clothing = filterProductsByCategory(mockProducts, 'Clothing');
      expect(clothing).toHaveLength(2);
    });

    test('returns empty array for non-existent category', () => {
      const result = filterProductsByCategory(mockProducts, 'NonExistent');
      expect(result).toEqual([]);
    });

    test('returns empty array for empty products list', () => {
      const result = filterProductsByCategory([], 'Electronics');
      expect(result).toEqual([]);
    });

    test('is case-sensitive', () => {
      const result = filterProductsByCategory(mockProducts, 'electronics');
      expect(result).toEqual([]);
    });
  });

  describe('getUniqueCategories', () => {
    test('returns unique categories from products', () => {
      const categories = getUniqueCategories(mockProducts);
      expect(categories).toHaveLength(3);
      expect(categories).toContain('Electronics');
      expect(categories).toContain('Clothing');
      expect(categories).toContain('Books');
    });

    test('returns empty array for empty products list', () => {
      const result = getUniqueCategories([]);
      expect(result).toEqual([]);
    });

    test('handles products with duplicate categories', () => {
      const products = [
        { id: 1, category: 'Electronics' },
        { id: 2, category: 'Electronics' },
        { id: 3, category: 'Clothing' }
      ];
      const categories = getUniqueCategories(products);
      expect(categories).toHaveLength(2);
    });
  });
});

