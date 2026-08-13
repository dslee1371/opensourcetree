import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://openlab.example.com"),
  title: { default: "OPEN LAB — 매일 하나를 직접 검증합니다", template: "%s — OPEN LAB" },
  description: "새로운 오픈소스 기술을 직접 설치하고 실패하고 측정하는 공개 기술 연구소.",
  openGraph: { title: "OPEN LAB — 매일 하나를 직접 검증합니다", description: "광고 없는 결과와 재현 가능한 코드로 실무의 판단을 돕습니다.", images: ["/og.png"] },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko"><body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body></html>;
}
