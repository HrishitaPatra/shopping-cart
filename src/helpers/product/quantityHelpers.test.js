import {
  validateQuantity,
  validateMinQuantity,
  incrementQuantity,
  decrementQuantity,
  calculateItemSubtotal
} from './quantityHelpers';

describe('Quantity Helpers', () => {
  describe('validateQuantity', () => {
    test('returns true for positive numbers', () => {
      expect(validateQuantity(1)).toBe(true);
      expect(validateQuantity(5)).toBe(true);
      expect(validateQuantity(100)).toBe(true);
    });

    test('returns false for zero', () => {
      expect(validateQuantity(0)).toBe(false);
    });

    test('returns false for negative numbers', () => {
      expect(validateQuantity(-1)).toBe(false);
      expect(validateQuantity(-10)).toBe(false);
    });
  });

  describe('validateMinQuantity', () => {
    test('validates against default minimum of 1', () => {
      expect(validateMinQuantity(1)).toBe(true);
      expect(validateMinQuantity(5)).toBe(true);
      expect(validateMinQuantity(0)).toBe(false);
    });

    test('validates against custom minimum', () => {
      expect(validateMinQuantity(5, 5)).toBe(true);
      expect(validateMinQuantity(10, 5)).toBe(true);
      expect(validateMinQuantity(4, 5)).toBe(false);
    });
  });

  describe('incrementQuantity', () => {
    test('increments quantity by 1', () => {
      expect(incrementQuantity(1)).toBe(2);
      expect(incrementQuantity(5)).toBe(6);
      expect(incrementQuantity(0)).toBe(1);
    });

    test('works with large numbers', () => {
      expect(incrementQuantity(999)).toBe(1000);
    });
  });

  describe('decrementQuantity', () => {
    test('decrements quantity by 1', () => {
      expect(decrementQuantity(5)).toBe(4);
      expect(decrementQuantity(10)).toBe(9);
    });

    test('does not go below default minimum of 1', () => {
      expect(decrementQuantity(1)).toBe(1);
      expect(decrementQuantity(2)).toBe(1);
    });

    test('respects custom minimum', () => {
      expect(decrementQuantity(5, 3)).toBe(4);
      expect(decrementQuantity(3, 3)).toBe(3);
      expect(decrementQuantity(2, 3)).toBe(2);
    });
  });

  describe('calculateItemSubtotal', () => {
    test('calculates subtotal correctly', () => {
      expect(calculateItemSubtotal(100, 2)).toBe(200);
      expect(calculateItemSubtotal(50, 5)).toBe(250);
      expect(calculateItemSubtotal(999, 3)).toBe(2997);
    });

    test('returns 0 for zero quantity', () => {
      expect(calculateItemSubtotal(100, 0)).toBe(0);
    });

    test('returns 0 for zero price', () => {
      expect(calculateItemSubtotal(0, 5)).toBe(0);
    });

    test('handles decimal prices', () => {
      expect(calculateItemSubtotal(99.99, 2)).toBeCloseTo(199.98);
    });
  });
});

