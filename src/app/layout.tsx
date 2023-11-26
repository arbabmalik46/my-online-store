import Navbar from '@/components/sections/navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/sections/footer'
import { Toaster } from "@/components/ui/toaster"
import Providers from '@/components/Provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dine Market',
  description: 'Coded by Arbab Malik',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Providers>
        <Navbar/>
      <main>
      </main>
        {children}<Toaster/><Footer/>
        </Providers>
        </body>
    </html>
  )
}
