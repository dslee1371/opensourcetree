"use client";

import Link from "next/link";
import { useState } from "react";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return <header className="site-header shell">
    <Link className="brand" href="/" aria-label="오픈랩 홈" onClick={close}><span className="brand-mark">OL</span><span>OPEN LAB</span></Link>
    <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="primary-navigation" onClick={() => setOpen((current) => !current)}><span /><span /><span /><b>{open ? "닫기" : "메뉴"}</b></button>
    <nav id="primary-navigation" aria-label="주요 메뉴" className={open ? "open" : ""}><Link href="/archive" onClick={close}>프로젝트</Link><Link href="/#updates" onClick={close}>진행 기록</Link><Link href="/#process" onClick={close}>구축 방식</Link><Link href="/about" onClick={close}>회사 소개</Link></nav>
    <Link className="header-cta" href="/contact" onClick={close}>프로젝트 문의 <span>↗</span></Link>
  </header>;
}
