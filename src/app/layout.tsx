import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "MeetSpan - Effortless Meeting Scheduling & Time Management",
  description: "MeetSpan simplifies scheduling with a seamless interface that lets you book meetings, manage appointments, and sync calendars effortlessly. Say goodbye to scheduling conflicts and streamline your time management with ease.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={cn("min-h-screen bg-background font-sans antialiased", geistSans.variable, geistMono.variable)}
      >
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
