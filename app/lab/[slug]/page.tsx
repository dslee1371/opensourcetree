import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/lib/projects";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export function generateStaticParams() { return projects.map((project) => ({ slug: project.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return {};
  return { title: project.title, description: project.summary, alternates: { canonical: `/lab/${project.slug}` }, openGraph: { title: project.title, description: project.summary, url: `/lab/${project.slug}` } };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  return <main className="subpage">
    <SiteHeader />
    <article className="article shell">
      <Link className="back" href="/archive">← 전체 프로젝트</Link>
      <div className="article-title"><div className="tag-row"><span>{project.code}</span><span>{project.category}</span><span>{project.status}</span></div><h1>{project.title}</h1><p>{project.summary}</p><div className="byline">{project.duration} · 마지막 업데이트 {project.updatedAt} · 아키텍처와 진행 기록 공개</div></div>
      <div className="result-panel project-status-panel"><div><span>CURRENT STATUS · {project.progress}%</span><strong>{project.status}</strong><p>현재 작업: {project.currentWork}</p><div className="detail-progress"><span style={{ width: `${project.progress}%` }} /></div></div><div className="result-metrics">{project.metrics.map((metric) => <div key={metric.label}><span>{metric.label}</span><b>{metric.value}</b></div>)}</div></div>
      <div className="article-layout"><aside><b>프로젝트 기록</b><a href="#problem">문제와 목표</a><a href="#architecture">시스템 구조</a><a href="#decisions">기술 결정</a><a href="#updates">진행 기록</a><a href="#next">다음 단계</a></aside>
        <div className="article-body">
          <section id="problem"><span className="chapter">01 · PROBLEM</span><h2>{project.problemTitle.split("\n").map((line, index) => <span key={line}>{line}{index === 0 && <br />}</span>)}</h2><p>{project.problemBody}</p><ul>{project.goals.map((goal) => <li key={goal}>{goal}</li>)}</ul></section>
          <section id="architecture"><span className="chapter">02 · ARCHITECTURE</span><h2>{project.stack.length}개의 오픈소스를<br />하나의 시스템으로.</h2><div className="architecture-flow">{project.stack.map((item, index) => <div key={item}><span>0{index + 1}</span><b>{item}</b><small>{project.componentRoles[index] ?? "시스템 구성"}</small></div>)}</div><p>{project.architectureBody}</p></section>
          <section id="decisions"><span className="chapter">03 · DECISIONS</span><h2>무엇을 선택했는지보다<br />왜 선택했는지 기록합니다.</h2><div className="decision-list">{project.decisions.map((decision) => <div key={decision.id}><span>{decision.id}</span><b>{decision.title}</b><p>{decision.body}</p></div>)}</div></section>
          <section id="updates"><span className="chapter">04 · BUILD LOG</span><h2>프로젝트 진행 기록</h2><div className="project-timeline">{project.updates.map((update) => <div key={`${update.date}-${update.title}`}><time>{update.date}</time><b>{update.title}</b><p>{update.body}</p></div>)}</div></section>
          <section id="next"><span className="chapter">05 · NEXT MILESTONE</span><h2>{project.nextMilestone}</h2><p>{project.nextBody}</p><Link className="button primary" href={`/contact?project=${project.slug}`}>이 프로젝트와 이야기하기 ↗</Link></section>
        </div>
      </div>
    </article>
    <SiteFooter />
  </main>;
}
