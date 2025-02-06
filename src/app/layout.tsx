import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  applicationName: "Logo Al",
  title: "Logo Al",
  description:
    "Logo AI is an innovative AI-powered logo design tool that helps you create stunning logos in seconds. Simply enter your brand name and preferred style, and our AI will generate a wide range of unique and professional logo options.",
  keywords: [
    "logo maker",
    "ai logo generator",
    "logo design",
    "brand identity",
    "graphic design",
    "logo creator",
    "free logo maker",
    "online logo maker",
    "logo design software",
    "create logo",
    "design logo",
  ],
  other: {
    "dicoding:email": "amalhanaja@gmail.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={`${plusJakartaSans.variable} antialiased`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
