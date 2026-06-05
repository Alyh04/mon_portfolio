import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import ThemeProvider from "./components/ThemeProvider";
import StarryBackground from "./components/StarryBackground";

const geistSans = Geist({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Lorniot Marcel | Full-Stack Developer & UI Designer",
    template: "%s | Lorniot Marcel",
  },
  description:
    "Portfolio de Lorniot Marcel - Développeur full-stack et designer UI/UX basé à Madagascar. Découvrez mes projets, compétences et services en développement web et mobile.",
  keywords: [
    "développeur",
    "full-stack",
    "Madagascar",
    "Next.js",
    "React",
    "UI/UX",
    "portfolio",
    "web development",
  ],
  authors: [{ name: "Lorniot Marcel" }],
  creator: "Lorniot Marcel",
  metadataBase: new URL("https://lorniot-marcel.vercel.app"),
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Lorniot Marcel Portfolio",
    title: "Lorniot Marcel | Full-Stack Developer & UI Designer",
    description:
      "Portfolio de Lorniot Marcel - Développeur full-stack et designer UI/UX basé à Madagascar.",
    images: [
      {
        url: "/mon_logo.png",
        width: 1200,
        height: 630,
        alt: "Lorniot Marcel Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lorniot Marcel | Full-Stack Developer & UI Designer",
    description:
      "Portfolio de Lorniot Marcel - Développeur full-stack et designer UI/UX basé à Madagascar.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://lorniot-marcel.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} antialiased`}
      >
        <ThemeProvider>
          <StarryBackground />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
