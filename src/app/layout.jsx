import { Button } from "../components/ui/button";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Aras Bela Vista 🐎",
  description: "Site oficial do Aras Bela Vista",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#fefcf9] text-[#3e2c1c]`}>
        <header className="text-center py-4">
          <h1 className="text-2xl font-semibold">Aras Bela Vista 🐎</h1>
        </header>

        <nav className="flex justify-center flex-wrap gap-3 mb-6">
          <Link href="/">
            <Button variant="ghost">🏠 Início</Button>
          </Link>
          <Link href="/contato">
            <Button variant="ghost">📞 Contato</Button>
          </Link>
          <Link href="/produtos">
            <Button variant="ghost">🛍️ Produtos</Button>
          </Link>
          <Link href="/eventos">
            <Button variant="ghost">📅 Eventos</Button>
          </Link>
          <Link href="/clientes">
            <Button variant="ghost">🤝 Clientes</Button>
          </Link>
          <Link href="/sobre-nos">
            <Button variant="ghost">🏇 Sobre Nós</Button>
          </Link>
        </nav>

        <main className="max-w-5xl mx-auto p-6">{children}</main>

        <footer className="text-center p-4 text-sm text-gray-600 border-t mt-8">
          © 2025 Aras Bela Vista - Todos os direitos reservados.
        </footer>
      </body>
    </html>
  );
}
