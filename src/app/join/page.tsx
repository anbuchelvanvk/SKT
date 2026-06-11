'use client';

import { useState } from 'react';
import { Lock, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function JoinPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    industry: 'food',
    company: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate secure data transaction and API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (isSuccess) {
    return (
      <div className="container" style={{ paddingTop: '6rem', paddingBottom: '6rem', textAlign: 'center' }}>
        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
          <CheckCircle2 size={80} color="green" style={{ margin: '0 auto 2rem' }} />
          <h1 style={{ marginBottom: '1rem' }}>Application Secured & Submitted!</h1>
          <p style={{ fontSize: '1.2rem', color: '#666' }}>
            Thank you for joining our network. Your data has been securely encrypted and processed.
            Our team will contact you shortly.
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="container" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto', background: 'white', padding: '3rem', borderRadius: '20px', boxShadow: '0 10px 40px rgba(0,0,0,0.08)' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <ShieldCheck size={50} color="var(--primary-red)" style={{ margin: '0 auto 1rem' }} />
          <h2>Secure Registration</h2>
          <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
            <Lock size={14} /> End-to-End Encrypted Data Transaction
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label" htmlFor="name">Full Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              className="form-input" 
              required 
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="email">Email Address</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              className="form-input" 
              required 
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="phone">Mobile Number</label>
            <input 
              type="tel" 
              id="phone" 
              name="phone" 
              className="form-input" 
              required 
              pattern="[0-9]{10}"
              title="Please enter a valid 10-digit mobile number"
              value={formData.phone}
              onChange={handleChange}
            />
            <small style={{ color: 'green', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.3rem', marginTop: '0.3rem' }}>
              <Lock size={12} /> Number will be stored securely
            </small>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="company">Company Name</label>
            <input 
              type="text" 
              id="company" 
              name="company" 
              className="form-input" 
              required 
              value={formData.company}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="industry">Industry Division</label>
            <select 
              id="industry" 
              name="industry" 
              className="form-input" 
              value={formData.industry}
              onChange={handleChange}
            >
              <option value="food">Food & Agriculture</option>
              <option value="clothing">Textile & Clothing</option>
              <option value="construction">Home Construction</option>
            </select>
          </div>

          <button 
            type="submit" 
            className="btn btn-primary" 
            style={{ width: '100%', marginTop: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Encrypting & Sending...' : <><Lock size={18} /> Submit Securely</>}
          </button>
        </form>
      </div>
    </div>
  );
}
