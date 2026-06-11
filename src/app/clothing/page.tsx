import { Shirt } from 'lucide-react';
import Link from 'next/link';

export default function ClothingPage() {
  const products = [
    { category: 'Dhotis', items: ['Pure Cotton Mens Dhoti', 'Fancy White Silk Dhoti With Border', 'Myilkan Dhotis for men', 'Strip Mens Cotton Dhoti', '9x5 Cotton Dhoti', 'Iyer Dhoti for men'] },
    { category: 'Sarees', items: ['Kerala Cotton Saree Embroidery', 'Kerala Kasavu Sarees With Peacock Embroidery', 'Kerala Cotton Hand Printed Saree', 'Design Kerala Cotton Sarees'] },
    { category: 'Ladies Garments', items: ['Plain Cotton Leggings', 'Cotton Lycra Leggings'] },
    { category: 'Mens Wear', items: ['Mens Fancy Cotton Shirt', 'Mens Cotton Casual Shirt', 'Plain Formal Wear Cotton Shirts', 'Group Shirt For Men', 'Mens 3/4th Shorts'] },
    { category: 'Kids Wear', items: ['Newborn Baby Cotton Dress', 'Girl Pattu Pavadai', 'Girls Frock'] },
    { category: 'Fabrics & Towels', items: ['HONEYCOMB TOWEL', 'Striped Cotton Towels', 'Blouse Lining Cotton Cloth', 'Cotton Shirting Fabric', 'Cotton Nighty Fabric'] },
  ];

  return (
    <div className="container" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <Shirt size={60} color="var(--primary-orange)" style={{ margin: '0 auto 1rem' }} />
        <h1 style={{ fontSize: '3rem', color: 'var(--text-dark)' }}>Clothing & Textile Division</h1>
        <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
          Collaborating with premier textile manufacturers like SKT Textile Service. We provide top-tier fabrics, traditional wear, and modern garments.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {products.map((section, idx) => (
          <div key={idx} style={{ background: 'white', padding: '2rem', borderRadius: '15px', boxShadow: '0 5px 20px rgba(0,0,0,0.04)' }}>
            <h2 style={{ marginBottom: '1.5rem', color: 'var(--primary-orange)', borderBottom: '2px solid #eee', paddingBottom: '0.5rem' }}>
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
