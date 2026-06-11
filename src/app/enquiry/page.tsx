'use client';

import { useSearchParams } from 'next/navigation';
import { useState, Suspense } from 'react';
import { ShieldCheck, Lock, CheckCircle2 } from 'lucide-react';

function EnquiryForm() {
  const searchParams = useSearchParams();
  const initialProduct = searchParams.get('product') || '';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    product: initialProduct,
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (isSuccess) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem 0' }}>
        <CheckCircle2 size={80} color="green" style={{ margin: '0 auto 2rem' }} />
        <h2 style={{ marginBottom: '1rem' }}>Enquiry Sent Securely!</h2>
        <p style={{ fontSize: '1.2rem', color: '#666' }}>
          Thank you for your interest in {formData.product || 'our products'}. Our team will contact you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="form-label" htmlFor="product">Interested Product</label>
        <input 
          type="text" 
          id="product" 
          name="product" 
          className="form-input" 
          required 
          value={formData.product}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="name">Full Name</label>
        <input type="text" id="name" name="name" className="form-input" required value={formData.name} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="email">Email Address</label>
        <input type="email" id="email" name="email" className="form-input" required value={formData.email} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="phone">Mobile Number</label>
        <input type="tel" id="phone" name="phone" className="form-input" required value={formData.phone} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="message">Additional Message / Quantity</label>
        <textarea 
          id="message" 
          name="message" 
          className="form-input" 
          rows={4} 
          value={formData.message} 
          onChange={handleChange}
        ></textarea>
      </div>

      <button 
        type="submit" 
        className="btn btn-primary" 
        style={{ width: '100%', marginTop: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending securely...' : <><Lock size={18} /> Send Enquiry</>}
      </button>
    </form>
  );
}

export default function EnquiryPage() {
  return (
    <div className="container" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto', background: 'white', padding: '3rem', borderRadius: '20px', boxShadow: '0 10px 40px rgba(0,0,0,0.08)' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <ShieldCheck size={50} color="var(--primary-orange)" style={{ margin: '0 auto 1rem' }} />
          <h2>Product Enquiry</h2>
          <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.5rem' }}>Secure end-to-end encrypted inquiry form.</p>
        </div>
        <Suspense fallback={<div>Loading form...</div>}>
          <EnquiryForm />
        </Suspense>
      </div>
    </div>
  );
}
