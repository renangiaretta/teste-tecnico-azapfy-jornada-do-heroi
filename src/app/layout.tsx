import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './global.sass'
import { HeroesProvider } from '@/contexts/HeroesContext'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jornada do Herói',
  description: 'Teste Técnico Azapfy',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HeroesProvider>
          {children}
        </HeroesProvider>
      </body>
    </html>
  )
}
