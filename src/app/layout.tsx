import type { Metadata } from 'next';
import './globals.css';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'SKT Group of Company | Food, Clothing & Shelter',
  description: 'Connecting you with fundamental needs: Food, Clothing, and Construction. Join our dynamic network business.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main>{children}</main>
        <footer style={{ background: '#1D3557', color: 'white', padding: '2rem 0', marginTop: '4rem', textAlign: 'center' }}>
          <div className="container">
            <p>&copy; {new Date().getFullYear()} SKT Group of Company. All Rights Reserved.</p>
            <p style={{ marginTop: '0.5rem', opacity: 0.8 }}>Bridging the gap for fundamental human needs.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
