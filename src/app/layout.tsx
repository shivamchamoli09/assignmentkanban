"use client";

import { Drawer } from "@/components";
import "./globals.css";
import { Inter } from "next/font/google";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { getAppTheme } from "@/config/theme";
import localFont from "next/font/local";

const inter = localFont({
  src: [
    {
      path: "../static/fonts/Inter-VariableFont_slnt,wght.ttf",
    },
  ],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider theme={getAppTheme()}>
          <CssBaseline />
          <Drawer>{children}</Drawer>
        </ThemeProvider>
      </body>
    </html>
  );
}
