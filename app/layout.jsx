import Navbar from '@/components/Navbar'
import './globals.css'
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false

export const metadata = {
  title: {
    default: "Paladinslx",
    template: "%s | Paladinslx"
  },
  description: "Look at your paladins stats",
  icons: {
    icon: [
      "/favicon/favicon.ico?v=1"
    ],
    apple: [
      "/favicon/apple-touch-icon.png?v=4"
    ],
    shortcut: [
      "/favicon/apple-touch-icon.png"
    ]
  },
  manifest: "/favicon/site.webmanifest"
}

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className='container mx-auto'>
          {children}
        </div>
      </body>
    </html>
  )
}
