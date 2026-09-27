import { describe,it,expect } from 'vitest';
import { canAddToCart } from '../lib/inventory';
describe('inventory',()=>{it('blocks add to cart when stock is zero',()=>{expect(canAddToCart(0)).toBe(false)})});
