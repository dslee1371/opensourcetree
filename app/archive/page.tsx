import type { Metadata } from "next";
import { projects } from "@/lib/projects";
import ProjectExplorer from "./ProjectExplorer";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = { title: "프로젝트", description: "AI, 플랫폼, 보안과 데이터 영역에서 진행 중인 오픈소스 시스템 프로젝트를 검색하고 살펴보세요.", alternates: { canonical: "/archive" }, openGraph: { url: "/archive" } };

export default function Archive() {
  return <main className="subpage">
    <SiteHeader />
    <section className="archive-hero shell"><span className="kicker">OPEN SOURCE SYSTEM PROJECTS</span><h1>기술 목록이 아니라,<br /><em>만들어 온 시스템.</em></h1><p>문제 정의부터 아키텍처, 통합, 운영까지 프로젝트의 전체 경험을 기록합니다.<br />완성된 결과뿐 아니라 현재 진행 상황과 해결 중인 문제도 공개합니다.</p></section>
    <ProjectExplorer projects={projects} />
    <SiteFooter />
  </main>;
}
