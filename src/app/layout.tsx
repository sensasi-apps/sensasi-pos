import { Providers } from "@/providers/next-ui";
import type { Metadata } from "next";
import { roboto } from "./font";
import "./globals.css";
import { cn } from "@/lib/utils";
import { PageIndicator } from "@/components/page-indicator";

export const metadata: Metadata = {
  title: "Sensasi POS",
  description: "Sensasi POS adalah aplikasi kasir yang mudah digunakan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </head>
      <body className={cn(roboto.className)}>
        <Providers>
          {children}
          <PageIndicator />
        </Providers>
      </body>
    </html>
  );
}
