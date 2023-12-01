import type { Metadata } from 'next'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import './globals.css'
import {ContextProvider} from './context'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tarifvertrag',
  description: 'Was ist ein Tarifkommission?',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body className={inter.className}>
        <header style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '0.2rem',
        }}>
        <h1 style={{
          padding: '1rem',
        }}>Was ist ein Tarifvertrag ?</h1>

        <nav>
        <Link href={'/'}><p style={{
          backgroundColor: 'rgb(228, 230, 173)',
          borderRadius: '1rem',
          padding: '1rem',
        }}>Home</p></Link>
        <Link href={'/more'}><p style={{
          backgroundColor: 'rgb(228, 230, 173)',
          borderRadius: '1rem',
          padding: '1rem',
        }}>Mehr Wissen</p></Link>
        </nav>
        
        </header>

       
<ContextProvider>
{children}
</ContextProvider>

        </body>
    </html>
  )
}
