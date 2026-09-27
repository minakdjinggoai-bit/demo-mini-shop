'use client';
import { useState } from 'react';
import { canAddToCart } from '@/lib/inventory';
export default function Page(){ const [cart,setCart]=useState(0); const stock=0; const allowed=canAddToCart(stock);
return <main><h1>Mini Shop</h1><p className="muted">DevResolve demo project</p><div className="card"><span className="badge">Inventory demo</span><h2>Mechanical Keyboard</h2><p className="price">Rp499.000</p><p className="danger">Stock: {stock}</p><div className="row"><button className="btn" disabled={!allowed} onClick={()=>setCart(c=>c+1)}>Add to Cart</button><strong>Cart: {cart}</strong></div><p className="muted">Bug: this button should be disabled when stock is 0.</p></div></main> }
