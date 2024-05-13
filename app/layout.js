import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./ThemeProvider"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Medhakunja Academy",
  description: "Generated by Medhakunja Academy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
      {/* <body className={inter.className}>{children}</body> */}
    </html>
  );
}
