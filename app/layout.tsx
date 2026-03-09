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
  "name": "TrainSmarter",
  "applicationCategory": "HealthAndFitnessApplication",
  "operatingSystem": "iOS, Android, Web",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "An adaptive workout tracking app that automatically adjusts weights and reps based on live performance."
};

export const metadata: Metadata = {
  title: 'TrainSmarter | Adaptive Strength Training App',
  description: 'TrainSmarter automatically adapts your workouts based on performance. Stop guessing your workouts and turn every session into real progress.',
  keywords: ['adaptive workout app', 'strength training app', 'progressive overload app', 'workout planning app', 'gym progression tracker'],
  openGraph: {
    title: 'TrainSmarter | Adaptive Strength Training App',
    description: 'Stop guessing your workouts. TrainSmarter tells you exactly what weight to lift and when to progress based on your performance.',
    type: 'website',
    url: 'https://trainsmarter.app',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TrainSmarter | Adaptive Workout App',
    description: 'Stop guessing your workouts. Our AI tells you exactly what to lift.',
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
