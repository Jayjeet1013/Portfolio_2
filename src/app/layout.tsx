import { Sidebar } from "@/components/Sidebar";
import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { Footer } from "@/components/Footer";
import dynamic from "next/dynamic";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Jayjeet Kumar - Developer",
  description:
    "Jayjeet Kumar is a Full-Stack Developer, App Developer, Entrepreneur, and Freelancer. He enjoys traveling, reading novels, and exploring new technologies.",
  other: {
    "google-site-verification": "4SZH9NZwe7wCw1MMskEBWLPVdaNm5pP1wb92aXeC3Vo",
  },
};

const Animations = dynamic(() => import("@/components/Animations"), {
  ssr: false,
});
const PageTransition = dynamic(() => import("@/components/PageTransition"), {
  ssr: false,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          inter.className,
          "flex antialiased h-screen overflow-hidden bg-gray-100"
        )}
      >
        <Script
          id="adsbygoogle-init"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6465081033679741"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <Sidebar />
        <div className="lg:pl-2 lg:pt-2 bg-gray-100 flex-1 overflow-y-auto">
          <div className="flex-1 bg-white min-h-screen lg:rounded-tl-xl border border-transparent lg:border-neutral-200 overflow-y-auto">
            <Animations />
            <PageTransition>{children}</PageTransition>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
