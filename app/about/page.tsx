import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { projects } from "@/lib/projects";

export const metadata: Metadata = { title: "회사 소개", description: "OPEN LAB은 오픈소스를 연결해 운영 가능한 시스템을 설계하고 구축하는 엔지니어링 스튜디오입니다.", alternates: { canonical: "/about" }, openGraph: { url: "/about" } };

const capabilities = [
  ["01", "아키텍처 설계", "요구사항과 제약 조건을 정리하고, 교체 가능하며 운영할 수 있는 오픈소스 구조를 설계합니다."],
  ["02", "시스템 통합", "여러 오픈소스의 인증, 데이터와 API 경계를 연결해 하나의 업무 흐름으로 구현합니다."],
  ["03", "배포와 자동화", "Docker와 CI/CD를 기준으로 누구나 같은 환경을 재현하고 안전하게 배포할 수 있게 만듭니다."],
  ["04", "운영과 개선", "성능, 비용, 장애와 업그레이드 데이터를 관찰하며 다음 기술 결정을 프로젝트 기록에 반영합니다."],
];

export default function About() {
  const openSourceCount = new Set(projects.flatMap((project) => project.stack)).size;
  return <main className="subpage">
    <SiteHeader />
    <section className="about-hero shell"><span className="kicker">ABOUT OPEN LAB</span><h1>오픈소스를 연결해<br /><em>작동하는 시스템으로.</em></h1><p>OPEN LAB은 오픈소스로 실제 시스템을 설계하고 구축하는 엔지니어링 스튜디오입니다. 제품 목록이 아니라 프로젝트의 결정, 시행착오, 운영 경험을 공개합니다.</p></section>
    <section className="shell values"><div><span>01 · PROBLEM FIRST</span><h2>문제에서 시작합니다.</h2><p>유행하는 도구에 문제를 맞추지 않습니다. 사용자, 데이터, 보안과 비용 조건을 먼저 정의합니다.</p></div><div><span>02 · PROVE BY BUILDING</span><h2>연결해서 증명합니다.</h2><p>개별 제품의 데모가 아니라 여러 오픈소스가 하나의 시스템으로 작동하는지 확인합니다.</p></div><div><span>03 · OPERATE &amp; LEARN</span><h2>운영까지 기록합니다.</h2><p>배포 이후의 장애, 비용, 업그레이드와 기술 부채까지 프로젝트 경험으로 남깁니다.</p></div></section>
    <section className="company-section shell"><div className="section-heading left-narrow"><div><span className="kicker">WHAT WE DO</span><h2>구상에서 운영까지,<br />한 프로젝트로 연결합니다.</h2></div><p>AI·데이터·플랫폼·보안 영역에서 검증 가능한 결과물을 만들고,<br />의사결정과 진행 상황을 계속 업데이트합니다.</p></div><div className="company-capabilities">{capabilities.map(([number, title, body]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{body}</p></article>)}</div></section>
    <section className="company-facts"><div className="shell"><div><strong>{projects.length}</strong><span>공개 프로젝트</span></div><div><strong>{openSourceCount}</strong><span>사용한 오픈소스</span></div><div><strong>{capabilities.length}</strong><span>핵심 수행 영역</span></div><p>작은 실험으로 시작해<br /><b>운영 가능한 시스템까지.</b></p></div></section>
    <section className="about-cta"><div className="shell"><span className="kicker">START A PROJECT</span><h2>함께 만들 시스템이 있나요?</h2><p>해결하려는 문제와 현재 환경을 알려주시면 적합한 오픈소스 아키텍처부터 함께 검토합니다.</p><Link className="button primary" href="/contact">프로젝트 문의하기 ↗</Link><a className="direct-email" href="mailto:dslee1371@gmail.com">dslee1371@gmail.com</a></div></section>
    <SiteFooter />
  </main>;
}
