import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

// JSON-LD Schema
const schema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Trainzy",
  "applicationCategory": "HealthAndFitnessApplication",
  "operatingSystem": "Web",
  "applicationSubCategory": "Workout Planning",
  "offers": {
    "@type": "Offer",
    "price": "199",
    "priceCurrency": "INR",
    "description": "Founding Member 1-Year Premium Access"
  },
  "description": "An adaptive workout planning app that adjusts your training plan when you miss workouts, so you never have to restart."
};

export const metadata: Metadata = {
  title: 'Trainzy | Adaptive Strength Training App',
  description: 'Trainzy adapts your workout plan when you miss days — so you never have to restart. Join the waitlist for early access.',
  keywords: ['adaptive workout app', 'workout plan that adjusts', 'strength training app', 'workout planning app', 'gym progression tracker'],
  openGraph: {
    title: 'Trainzy | Adaptive Strength Training App',
    description: 'Stop guessing your workouts. Trainzy tells you exactly what weight to lift and when to progress based on your performance.',
    type: 'website',
    url: 'https://trainzy.app',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trainzy | Adaptive Workout App',
    description: 'Stop guessing your workouts. Our AI tells you exactly what to lift.',
  },
  icons: {
    icon: '/TrainSmarter.png',
    apple: '/TrainSmarter.png',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className="font-sans antialiased bg-[#0A0A0A] text-white selection:bg-[#FF3B3B] selection:text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
