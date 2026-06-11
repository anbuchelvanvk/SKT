import { Wheat } from 'lucide-react';
import Link from 'next/link';

export default function FoodPage() {
  const products = [
    { category: 'Dry Herbal Leaves', items: ['Green Papaya Leaves', 'Natural Neem Leaves', 'Organic Lemon Leaves', 'Holy Basil Leaves', 'Natural Moringa Leaves'] },
    { category: 'Masala Powder', items: ['Mutton Curry Masala', 'Red Chilli Powder', 'Curry Leaves Powder', 'Fry Fish Masala', 'Curry Chilli Powder'] },
    { category: 'Herbal Powder', items: ['Organic Drumsticks Powder', 'Moringa Leaves Powder', 'Henna Leaves Powder', 'Senna Leaf Powder', 'Papaya Leaves Powder'] },
    { category: 'Betel Nuts', items: ['Areca Nut Rashi Red', 'Red Rashi Boiled Betel Nut', 'Natural Areca Nut', 'Betel Nuts White Supari'] },
    { category: 'Fresh Flowers', items: ['Fresh Jasmine Flower', 'Natural Red Hibiscus', 'Fresh Neem Flower'] },
    { category: 'Flour & Sweets', items: ['Pearl Millet Flour', 'Finger Millet Ragi', 'Mysore Pak Sweet'] },
    { category: 'Fresh Fruits', items: ['Fresh Custard Apple'] },
  ];

  return (
    <div className="container" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <Wheat size={60} color="var(--primary-red)" style={{ margin: '0 auto 1rem' }} />
        <h1 style={{ fontSize: '3rem', color: 'var(--text-dark)' }}>Food & Agriculture Division</h1>
        <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
          Partnering with premium agricultural suppliers like Agri Buy Onlines. We ensure fresh, organic, and highly nutritious products reach our network efficiently.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {products.map((section, idx) => (
          <div key={idx} style={{ background: 'white', padding: '2rem', borderRadius: '15px', boxShadow: '0 5px 20px rgba(0,0,0,0.04)' }}>
            <h2 style={{ marginBottom: '1.5rem', color: 'var(--primary-red)', borderBottom: '2px solid #eee', paddingBottom: '0.5rem' }}>
              {section.category}
            </h2>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {section.items.map((item, i) => (
                <li key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.5rem 0', borderBottom: '1px solid #f5f5f5' }}>
                  <span style={{ fontWeight: '500' }}>{item}</span>
                  <Link href={`/enquiry?product=${encodeURIComponent(item)}`} className="btn btn-secondary" style={{ padding: '0.4rem 1rem', fontSize: '0.9rem' }}>
                    Enquiry
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
