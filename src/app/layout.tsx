import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Camilo Gallego | Software Engineer / Frontend Engineer",
  description: "Camilo Gallego, Software Engineer y Frontend Engineer especializado en React.js, TypeScript y Micro-Frontends, con experiencia en productos financieros en producción.",
  openGraph: {
    title: "Camilo Gallego | Software Engineer / Frontend Engineer",
    description: "Software Engineer especializado en frontend, React.js, TypeScript y Micro-Frontends para productos financieros en producción.",
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
