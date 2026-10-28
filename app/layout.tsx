import type { Metadata } from 'next';
import './globals.css';
import { Header, Footer } from '@/components/chrome';

export const metadata: Metadata = { title: 'Little Adventures | Personalized Storybooks Made With Love', description: 'Beautifully illustrated personalized children’s adventures inspired by the little moments worth keeping.' };
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) { return <html lang="en"><body><Header />{children}<Footer /></body></html>; }
