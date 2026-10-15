import type { Metadata, Viewport } from 'next';
import { IBM_Plex_Mono, IBM_Plex_Sans, Space_Grotesk } from 'next/font/google';
import { site } from '@/content';
import { siteUrl } from '@/lib/seo';
import { themeInitScript } from '@/lib/theme';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-display-loaded',
});

const plexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-sans-loaded',
});

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono-loaded',
});

// Favicon comes from src/app/icon.svg; the share image from opengraph-image.tsx.
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: site.pageTitle, template: `%s — ${site.name}` },
  description: site.description,
  keywords: site.keywords,
  authors: [{ name: site.name, url: siteUrl }],
  creator: site.name,
  applicationName: site.name,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'profile',
    url: '/',
    siteName: site.name,
    title: site.pageTitle,
    description: site.description,
    locale: 'en_US',
    firstName: site.name.split(' ')[0],
    lastName: site.name.split(' ').slice(1).join(' '),
  },
  twitter: {
    card: 'summary_large_image',
    title: site.pageTitle,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F7F7F2' },
    { media: '(prefers-color-scheme: dark)', color: '#121411' },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // suppressHydrationWarning: the theme script may set data-theme before React loads
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${plexSans.variable} ${plexMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
