import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Camilo Gallego | Software Engineer / Frontend Developer",
  description: "Portfolio de Camilo Gallego, Software Engineer especializado en frontend, React.js, TypeScript y arquitectura Micro-Frontend.",
  openGraph: {
    title: "Camilo Gallego | Software Engineer / Frontend Developer",
    description: "Frontend, React.js, TypeScript y arquitectura Micro-Frontend para productos digitales.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
