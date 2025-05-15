import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'BhoomikaReddyMuralidhar',
  description: 'A Netflix-themed portfolio showcasing my work and skills',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-netflix-black text-white min-h-screen">
        {children}
      </body>
    </html>
  )
} 