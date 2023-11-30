import type { Metadata } from 'next'
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
        <h1>Was ist ein Tarifvertrag ?</h1>
       
<ContextProvider>
{children}
</ContextProvider>

        </body>
    </html>
  )
}
