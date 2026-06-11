import { Home } from 'lucide-react';

export default function ConstructionPage() {
  return (
    <div className="container" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <Home size={60} color="var(--primary-yellow)" style={{ margin: '0 auto 1rem' }} />
        <h1 style={{ fontSize: '3rem', color: 'var(--text-dark)' }}>Construction Division</h1>
        <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
          Building the foundations of the future. We connect you with top-tier materials and professionals to build reliable and enduring homes.
        </p>
      </div>

      <div style={{ background: 'white', padding: '3rem', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
        <h2>Core Services</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
          <div style={{ padding: '2rem', background: 'rgba(233, 196, 106, 0.1)', borderRadius: '15px' }}>
            <h3 style={{ marginBottom: '1rem' }}>Raw Materials</h3>
            <p>Cement, steel, sand, and bricks from certified and reliable suppliers ensuring structural integrity.</p>
          </div>
          <div style={{ padding: '2rem', background: 'rgba(233, 196, 106, 0.1)', borderRadius: '15px' }}>
            <h3 style={{ marginBottom: '1rem' }}>Architecture</h3>
            <p>Connect with visionary architects to design modern, sustainable, and aesthetically pleasing spaces.</p>
          </div>
          <div style={{ padding: '2rem', background: 'rgba(233, 196, 106, 0.1)', borderRadius: '15px' }}>
            <h3 style={{ marginBottom: '1rem' }}>Contractors</h3>
            <p>Skilled labor and reliable contractors to execute your projects on time and within budget.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
