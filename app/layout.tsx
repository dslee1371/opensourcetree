import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://open-lab-daily.dslee.chatgpt.site"),
  title: { default: "OPEN LAB — 오픈소스로 시스템을 만들고, 과정을 공개합니다", template: "%s — OPEN LAB" },
  description: "오픈소스로 실제 시스템을 설계하고 구축하며, 프로젝트의 결정과 시행착오, 운영 경험을 공개합니다.",
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "ko_KR", siteName: "OPEN LAB", url: "/", title: "OPEN LAB — 오픈소스로 시스템을 만듭니다", description: "아키텍처부터 구축과 운영까지, 실제 프로젝트의 진행 과정을 공개합니다.", images: [{ url: "/og.png", width: 1731, height: 909, alt: "OPEN LAB 오픈소스 시스템 프로젝트" }] },
  twitter: { card: "summary_large_image", title: "OPEN LAB — 오픈소스로 시스템을 만듭니다", description: "아키텍처부터 구축과 운영까지, 실제 프로젝트의 진행 과정을 공개합니다.", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko"><body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body></html>;
}
