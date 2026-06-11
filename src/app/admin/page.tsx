'use client';

import { useState } from 'react';
import { Plus, Trash2, Users, Settings, Package } from 'lucide-react';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('products');
  const [products, setProducts] = useState([
    { id: 1, name: 'Pure Cotton Mens Dhoti', category: 'Clothing', price: '₹450' },
    { id: 2, name: 'Green Papaya Leaves', category: 'Food', price: '₹200' },
    { id: 3, name: 'Premium Cement (50kg)', category: 'Construction', price: '₹380' },
  ]);

  const [newProduct, setNewProduct] = useState({ name: '', category: 'Clothing', price: '' });

  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProduct.name || !newProduct.price) return;
    setProducts([...products, { id: Date.now(), ...newProduct }]);
    setNewProduct({ name: '', category: 'Clothing', price: '' });
  };

  const handleDeleteProduct = (id: number) => {
    setProducts(products.filter(p => p.id !== id));
  };

  return (
    <div className="container" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '3rem', color: 'var(--text-dark)' }}>Admin Dashboard</h1>
        <p style={{ color: '#666' }}>SKT Group of Company Management Portal</p>
      </div>

      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
        {/* Sidebar */}
        <div style={{ flex: '1', minWidth: '250px', background: 'white', padding: '2rem', borderRadius: '15px', boxShadow: '0 5px 20px rgba(0,0,0,0.05)', height: 'fit-content' }}>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <li>
              <button 
                onClick={() => setActiveTab('products')}
                style={{ width: '100%', textAlign: 'left', padding: '1rem', background: activeTab === 'products' ? 'var(--primary-orange)' : 'transparent', color: activeTab === 'products' ? 'white' : 'var(--text-dark)', border: 'none', borderRadius: '10px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 'bold' }}
              >
                <Package size={20} /> Manage Products
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveTab('users')}
                style={{ width: '100%', textAlign: 'left', padding: '1rem', background: activeTab === 'users' ? 'var(--primary-orange)' : 'transparent', color: activeTab === 'users' ? 'white' : 'var(--text-dark)', border: 'none', borderRadius: '10px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 'bold' }}
              >
                <Users size={20} /> User Management
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveTab('settings')}
                style={{ width: '100%', textAlign: 'left', padding: '1rem', background: activeTab === 'settings' ? 'var(--primary-orange)' : 'transparent', color: activeTab === 'settings' ? 'white' : 'var(--text-dark)', border: 'none', borderRadius: '10px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 'bold' }}
              >
                <Settings size={20} /> Settings
              </button>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div style={{ flex: '3', minWidth: '300px', background: 'white', padding: '3rem', borderRadius: '15px', boxShadow: '0 5px 20px rgba(0,0,0,0.05)' }}>
          {activeTab === 'products' && (
            <div>
              <h2 style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Package color="var(--primary-red)" /> Product Catalog
              </h2>
              
              <div style={{ marginBottom: '3rem', padding: '2rem', background: '#fafafa', borderRadius: '10px', border: '1px dashed #ccc' }}>
                <h3>Add New Product</h3>
                <form onSubmit={handleAddProduct} style={{ display: 'flex', gap: '1rem', marginTop: '1rem', flexWrap: 'wrap' }}>
                  <input type="text" placeholder="Product Name" className="form-input" style={{ flex: 2 }} value={newProduct.name} onChange={e => setNewProduct({...newProduct, name: e.target.value})} required />
                  <select className="form-input" style={{ flex: 1 }} value={newProduct.category} onChange={e => setNewProduct({...newProduct, category: e.target.value})}>
                    <option value="Clothing">Clothing</option>
                    <option value="Food">Food</option>
                    <option value="Construction">Construction</option>
                  </select>
                  <input type="text" placeholder="Price (e.g. ₹500)" className="form-input" style={{ flex: 1 }} value={newProduct.price} onChange={e => setNewProduct({...newProduct, price: e.target.value})} required />
                  <button type="submit" className="btn btn-primary" style={{ padding: '0 2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Plus size={18} /> Add
                  </button>
                </form>
              </div>

              <div>
                <h3 style={{ marginBottom: '1rem' }}>Current Products</h3>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ background: '#f5f5f5', textAlign: 'left' }}>
                      <th style={{ padding: '1rem' }}>Name</th>
                      <th style={{ padding: '1rem' }}>Category</th>
                      <th style={{ padding: '1rem' }}>Price</th>
                      <th style={{ padding: '1rem', textAlign: 'right' }}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map(product => (
                      <tr key={product.id} style={{ borderBottom: '1px solid #eee' }}>
                        <td style={{ padding: '1rem' }}>{product.name}</td>
                        <td style={{ padding: '1rem' }}>
                          <span style={{ padding: '0.2rem 0.8rem', background: 'var(--primary-yellow)', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold', color: 'var(--text-dark)' }}>
                            {product.category}
                          </span>
                        </td>
                        <td style={{ padding: '1rem' }}>{product.price}</td>
                        <td style={{ padding: '1rem', textAlign: 'right' }}>
                          <button onClick={() => handleDeleteProduct(product.id)} style={{ background: 'none', border: 'none', color: 'red', cursor: 'pointer', padding: '0.5rem' }}>
                            <Trash2 size={20} />
                          </button>
                        </td>
                      </tr>
                    ))}
                    {products.length === 0 && (
                      <tr>
                        <td colSpan={4} style={{ padding: '2rem', textAlign: 'center', color: '#999' }}>No products found. Add some above.</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'users' && (
            <div>
              <h2 style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Users color="var(--primary-red)" /> User Management
              </h2>
              <p>User management dashboard will appear here. Connect to your database to list registered members and network participants.</p>
              <div style={{ marginTop: '2rem', padding: '2rem', background: 'rgba(230, 57, 70, 0.05)', borderRadius: '10px', color: 'var(--primary-red)' }}>
                <strong>Admin Perk:</strong> Approve network applications directly from this panel once backend is integrated.
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div>
              <h2 style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Settings color="var(--primary-red)" /> General Settings
              </h2>
              <div className="form-group">
                <label className="form-label">Company Name</label>
                <input type="text" className="form-input" defaultValue="SKT Group of Company" readOnly />
              </div>
              <div className="form-group">
                <label className="form-label">Admin Email</label>
                <input type="email" className="form-input" defaultValue="admin@sktgroup.com" />
              </div>
              <button className="btn btn-primary">Save Settings</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
