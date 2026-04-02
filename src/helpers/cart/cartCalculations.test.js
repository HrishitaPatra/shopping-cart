import { calculateCartTotal, calculateCartCount, findCartItem } from './cartCalculations';

describe('Cart Calculations', () => {
  describe('calculateCartTotal', () => {
    test('returns 0 for empty cart', () => {
      expect(calculateCartTotal([])).toBe(0);
    });

    test('calculates total for single item', () => {
      const items = [{ id: 1, price: 100, quantity: 2 }];
      expect(calculateCartTotal(items)).toBe(200);
    });

    test('calculates total for multiple items', () => {
      const items = [
        { id: 1, price: 100, quantity: 2 },
        { id: 2, price: 50, quantity: 3 },
        { id: 3, price: 200, quantity: 1 }
      ];
      expect(calculateCartTotal(items)).toBe(550);
    });

    test('handles items with quantity 0', () => {
      const items = [
        { id: 1, price: 100, quantity: 0 },
        { id: 2, price: 50, quantity: 2 }
      ];
      expect(calculateCartTotal(items)).toBe(100);
    });
  });

  describe('calculateCartCount', () => {
    test('returns 0 for empty cart', () => {
      expect(calculateCartCount([])).toBe(0);
    });

    test('counts single item quantity', () => {
      const items = [{ id: 1, quantity: 5 }];
      expect(calculateCartCount(items)).toBe(5);
    });

    test('counts total quantity for multiple items', () => {
      const items = [
        { id: 1, quantity: 2 },
        { id: 2, quantity: 3 },
        { id: 3, quantity: 1 }
      ];
      expect(calculateCartCount(items)).toBe(6);
    });
  });

  describe('findCartItem', () => {
    const items = [
      { id: 1, name: 'Product 1' },
      { id: 2, name: 'Product 2' },
      { id: 3, name: 'Product 3' }
    ];

    test('finds existing item by id', () => {
      const result = findCartItem(items, 2);
      expect(result).toEqual({ id: 2, name: 'Product 2' });
    });

    test('returns undefined for non-existent item', () => {
      const result = findCartItem(items, 999);
      expect(result).toBeUndefined();
    });

    test('returns undefined for empty cart', () => {
      const result = findCartItem([], 1);
      expect(result).toBeUndefined();
    });
  });
});

