import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
});

export const metadata: Metadata = {
  title: 'Al Ashraff Shop | কুরবানী স্পেশাল গেঞ্জি কালেকশন',
  description: 'প্রিমিয়াম কোয়ালিটির সফট কটন ফেব্রিক গেঞ্জি কালেকশন। ঈদ স্পেশাল কালেকশন - আল আশরাফ শপ।',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bn" className={`${inter.variable} ${playfair.variable}`}>
      <body suppressHydrationWarning className="antialiased">{children}</body>
    </html>
  );
}
