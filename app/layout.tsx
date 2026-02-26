import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'

import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
  title: 'XDR FX - Элитный Торговый Алгоритм',
  description: 'Профессиональный алгоритмический торговый индикатор. Точные сигналы для элитных трейдеров.',
}

export const viewport: Viewport = {
  themeColor: '#05010d',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4083108599390809"
          crossOrigin="anonymous"
        />
        <script
          async
          custom-element="amp-auto-ads"
          src="https://cdn.ampproject.org/v0/amp-auto-ads-0.1.js"
        />
      </head>
      <body className="font-sans antialiased">
        {/* @ts-expect-error AMP custom element */}
        <amp-auto-ads
          type="adsense"
          data-ad-client="ca-pub-4083108599390809"
        />
        {children}
      </body>
    </html>
  )
}
