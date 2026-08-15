import type { Metadata } from "next";
import ContactForm from "./ContactForm";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = { title: "프로젝트 문의", description: "해결하려는 문제와 현재 환경을 알려주시면 오픈소스로 구현할 수 있는 범위부터 검토합니다.", alternates: { canonical: "/contact" }, openGraph: { url: "/contact" } };

export default function ContactPage() {
  return <main className="subpage">
    <SiteHeader />
    <section className="contact-page shell"><div className="contact-copy"><span className="kicker">PROJECT INQUIRY</span><h1>다음 시스템을<br /><em>함께 설계해 보세요.</em></h1><p>구체적인 기술이 정해지지 않아도 괜찮습니다. 해결하려는 문제와 현재 환경을 보내주시면 오픈소스로 구현할 수 있는 범위부터 검토합니다.</p><div className="contact-direct"><span>직접 이메일</span><a href="mailto:dslee1371@gmail.com">dslee1371@gmail.com ↗</a><small>메일 앱에서 전송한 뒤 문의가 접수됩니다.</small></div></div><ContactForm /></section>
    <SiteFooter />
  </main>;
}
