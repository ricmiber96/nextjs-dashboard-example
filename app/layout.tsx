import { monsterrat } from './ui/fonts';
import './ui/global.css'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
    {/* Change font of app*/}
      <body className={`${monsterrat.className} antialiased`}>
        {children}
        <footer className="flex justify-center items-center h-10 bg-gray-800 text-white">
          <span>Made with 💓 by Vercel </span>
        </footer>
      </body>
    </html>
  );
}
