import Navigation from '@/components/Navigation'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import RestaurantProvider from '@/utils/RestaurantContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Simple Restaurant',
  description: 'A simple restaurant website built with Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='p-4'>
          <RestaurantProvider>
            <>
              <Header/>
              <Navigation />
              <div className='mt-4'>
                {children}
              </div>
            </>
          </RestaurantProvider>
        </div>
      </body>
    </html>
  )
}
