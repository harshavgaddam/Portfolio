import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Harsha Vardhan Gaddam - Software Engineer',
  description: 'Experienced software engineer specializing in backend integrations, cloud migration, and data analytics. View my portfolio and get in touch.',
  keywords: ['software engineer', 'backend developer', 'cloud migration', 'data analytics', 'C#', 'Python', 'GCP'],
  authors: [{ name: 'Harsha Vardhan Gaddam' }],
  creator: 'Harsha Vardhan Gaddam',
  openGraph: {
    title: 'Harsha Vardhan Gaddam - Software Engineer',
    description: 'Experienced software engineer specializing in backend integrations, cloud migration, and data analytics.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Harsha Vardhan Gaddam - Software Engineer',
    description: 'Experienced software engineer specializing in backend integrations, cloud migration, and data analytics.',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
} 