import { Users, TrendingUp, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function NetworkPage() {
  return (
    <div className="container" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 style={{ fontSize: '3.5rem', color: 'var(--text-dark)', marginBottom: '1rem' }}>
          The SKT Group <span style={{ color: 'var(--primary-red)' }}>Network</span>
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '700px', margin: '0 auto' }}>
          Inspired by the world's leading business referral organizations, our network is designed to help professionals in Food, Clothing, and Construction grow their businesses through structured, positive, and professional referral marketing programs.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
        <div style={{ background: 'white', padding: '2.5rem', borderRadius: '15px', boxShadow: '0 5px 20px rgba(0,0,0,0.05)', textAlign: 'center' }}>
          <Users size={50} color="var(--primary-orange)" style={{ margin: '0 auto 1rem' }} />
          <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>Meaningful Connections</h3>
          <p color="#555">Build long-term relationships with quality business professionals. We ensure exclusive representation of your specific trade in your local chapter.</p>
        </div>
        <div style={{ background: 'white', padding: '2.5rem', borderRadius: '15px', boxShadow: '0 5px 20px rgba(0,0,0,0.05)', textAlign: 'center' }}>
          <TrendingUp size={50} color="var(--primary-yellow)" style={{ margin: '0 auto 1rem' }} />
          <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>Business Growth</h3>
          <p color="#555">Substantially increase your business through referrals. Our structured system is proven to generate significant revenue for active members.</p>
        </div>
        <div style={{ background: 'white', padding: '2.5rem', borderRadius: '15px', boxShadow: '0 5px 20px rgba(0,0,0,0.05)', textAlign: 'center' }}>
          <ShieldCheck size={50} color="var(--primary-red)" style={{ margin: '0 auto 1rem' }} />
          <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>Secure Transactions</h3>
          <p color="#555">We utilize state-of-the-art encryption to ensure all your data transactions (emails, phone numbers, referrals) are completely secure and private.</p>
        </div>
      </div>

      <div style={{ background: 'var(--text-dark)', color: 'white', padding: '4rem', borderRadius: '20px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Ready to Grow?</h2>
        <p style={{ fontSize: '1.1rem', marginBottom: '2rem', opacity: 0.9 }}>
          Join thousands of members who are transforming their businesses.
        </p>
        <Link href="/join" className="btn btn-primary" style={{ fontSize: '1.2rem', padding: '1rem 3rem' }}>
          Become a Member Today
        </Link>
      </div>
    </div>
  );
}
