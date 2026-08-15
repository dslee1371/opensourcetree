import Link from "next/link";

export default function SiteFooter() {
  return <footer><div className="shell footer-inner"><div><div className="brand inverse"><span className="brand-mark">OL</span><span>OPEN LAB</span></div><p>오픈소스로 시스템을 만들고,<br />구축과 운영 경험을 공개합니다.</p></div><div className="footer-links"><Link href="/archive">프로젝트</Link><Link href="/#updates">진행 기록</Link><Link href="/#process">구축 방식</Link><Link href="/about">회사 소개</Link><Link href="/contact">프로젝트 문의</Link><Link href="/privacy">개인정보 안내</Link></div><small>© 2026 OPEN LAB. Built in Seoul.</small></div></footer>;
}
