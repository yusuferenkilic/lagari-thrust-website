import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lagari Thrust | Roket Takımı",
  description: "Lagari Thrust - Gökyüzüne uzanan yolculuğumuzda bize katılın. Türkiye'nin önde gelen üniversite roket takımı.",
  keywords: ["roket", "uzay", "takım", "lagari", "thrust", "üniversite", "mühendislik"],
  authors: [{ name: "Lagari Thrust" }],
  openGraph: {
    title: "Lagari Thrust | Roket Takımı",
    description: "Lagari Thrust - Gökyüzüne uzanan yolculuğumuzda bize katılın.",
    type: "website",
    locale: "tr_TR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className="font-exo antialiased min-h-screen bg-lagari-dark-green text-lagari-cream" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
