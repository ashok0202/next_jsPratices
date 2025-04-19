// app/layout.tsx
// import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Your App Title',
  description: 'Your App Description',
}

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header style={{
          backgroundColor:'lightblue',
          padding:'1rem'
        }}>
          <p>Headding</p>

        </header>
        {children}
        <footer style={{
          backgroundColor:'lightgray',
          padding:'1rem'
        }}>
          <p>Footer</p>
        </footer>
        
      </body>
    </html>
  )
}
