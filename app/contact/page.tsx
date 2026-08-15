import Link from "next/link";
import ContactForm from "./ContactForm";

export default function ContactPage() {
  return <main className="subpage">
    <header className="site-header shell"><Link className="brand" href="/"><span className="brand-mark">OL</span><span>OPEN LAB</span></Link><nav><Link href="/archive">프로젝트</Link><Link href="/about">회사 소개</Link></nav><Link className="header-cta" href="/contact">프로젝트 문의 ↗</Link></header>
    <section className="contact-page shell"><div className="contact-copy"><span className="kicker">PROJECT INQUIRY</span><h1>다음 시스템을<br /><em>함께 설계해 보세요.</em></h1><p>구체적인 기술이 정해지지 않아도 괜찮습니다. 해결하려는 문제와 현재 환경을 보내주시면 오픈소스로 구현할 수 있는 범위부터 검토합니다.</p><div className="contact-direct"><span>직접 이메일</span><a href="mailto:dslee1371@gmail.com">dslee1371@gmail.com ↗</a><small>일반적으로 확인 후 1–2영업일 내 회신합니다.</small></div></div><ContactForm /></section>
    <footer><div className="shell footer-inner"><div className="brand inverse"><span className="brand-mark">OL</span><span>OPEN LAB</span></div><div className="footer-links"><Link href="/archive">프로젝트</Link><Link href="/about">회사 소개</Link><Link href="/contact">프로젝트 문의</Link></div><small>© 2026 OPEN LAB. Built in Seoul.</small></div></footer>
  </main>;
}
