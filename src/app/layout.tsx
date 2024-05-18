import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gabriel - Full Stack",
  description: "Desenvolvo soluções tecnológicas de ponta para otimizar processos, impulsionar resultados e superar desafios em sua jornada.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
