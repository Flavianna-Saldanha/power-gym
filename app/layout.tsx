import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Power Gym",
  description: "Gym",
  icons: {
    icon: "/assets/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
