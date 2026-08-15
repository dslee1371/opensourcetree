import Link from "next/link";
import { getProject, projects } from "@/lib/projects";

export function generateStaticParams() { return projects.map((project) => ({ slug: project.slug })); }

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  return <main className="subpage">
    <header className="site-header shell"><Link className="brand" href="/"><span className="brand-mark">OL</span><span>OPEN LAB</span></Link><nav><Link href="/archive">프로젝트</Link><Link href="/about">회사 소개</Link></nav><a className="header-cta" href="mailto:lab@example.com">프로젝트 문의 ↗</a></header>
    <article className="article shell">
      <Link className="back" href="/archive">← 전체 프로젝트</Link>
      <div className="article-title"><div className="tag-row"><span>{project.code}</span><span>{project.category}</span><span>{project.status}</span></div><h1>{project.title}</h1><p>{project.summary}</p><div className="byline">{project.duration} · 마지막 업데이트 {project.updatedAt} · 아키텍처와 진행 기록 공개</div></div>
      <div className="result-panel project-status-panel"><div><span>CURRENT STATUS · {project.progress}%</span><strong>{project.status}</strong><p>현재 작업: {project.currentWork}</p><div className="detail-progress"><span style={{ width: `${project.progress}%` }} /></div></div><div className="result-metrics">{project.metrics.map((metric) => <div key={metric.label}><span>{metric.label}</span><b>{metric.value}</b></div>)}</div></div>
      <div className="article-layout"><aside><b>프로젝트 기록</b><a href="#problem">문제와 목표</a><a href="#architecture">시스템 구조</a><a href="#decisions">기술 결정</a><a href="#updates">진행 기록</a><a href="#next">다음 단계</a></aside>
        <div className="article-body">
          <section id="problem"><span className="chapter">01 · PROBLEM</span><h2>데이터를 외부로 보내지 않고<br />사내 지식을 검색한다.</h2><p>문서는 여러 저장소에 흩어져 있고, 구성원은 필요한 정보를 찾는 데 많은 시간을 사용합니다. 민감한 내부 자료를 외부 AI 서비스로 보내지 않으면서 출처가 명확한 답변을 제공하는 것이 프로젝트의 목표입니다.</p><ul><li>모든 추론과 검색 데이터를 내부 네트워크에 유지</li><li>사용자가 접근할 수 있는 문서만 검색 결과에 포함</li><li>답변마다 원문 출처와 근거 문단 제공</li><li>기존 문서 저장소의 변경 사항을 자동 반영</li></ul></section>
          <section id="architecture"><span className="chapter">02 · ARCHITECTURE</span><h2>네 개의 오픈소스를<br />하나의 운영 흐름으로.</h2><div className="architecture-flow">{project.stack.map((item, index) => <div key={item}><span>0{index + 1}</span><b>{item}</b><small>{["사용자 인터페이스", "로컬 추론", "벡터 검색", "품질 관측"][index] ?? "시스템 구성"}</small></div>)}</div><p>각 구성 요소는 표준 API로 분리해 향후 모델과 벡터 데이터베이스를 교체할 수 있도록 했습니다. 인증과 문서 권한은 별도 게이트웨이에서 통합 처리합니다.</p></section>
          <section id="decisions"><span className="chapter">03 · DECISIONS</span><h2>무엇을 선택했는지보다<br />왜 선택했는지 기록합니다.</h2><div className="decision-list"><div><span>ADR-012 · ACCEPTED</span><b>Qdrant payload filter로 문서 권한 처리</b><p>애플리케이션 후처리 대신 검색 단계에서 접근 불가능한 문서를 제외해 정보 노출 가능성을 줄였습니다.</p></div><div><span>ADR-009 · REVISED</span><b>단일 모델에서 작업별 모델 분리</b><p>요약과 질의응답의 요구 특성이 달라 임베딩, 재정렬, 생성 모델을 각각 독립적으로 운영합니다.</p></div><div><span>ADR-006 · ACCEPTED</span><b>관측 데이터에 원문을 저장하지 않음</b><p>Langfuse에는 지연 시간과 평가 결과만 전송하고 실제 문서와 질문은 해시 처리합니다.</p></div></div></section>
          <section id="updates"><span className="chapter">04 · BUILD LOG</span><h2>프로젝트 진행 기록</h2><div className="project-timeline"><div><time>08.15</time><b>문서 권한 검색 필터 통합</b><p>권한 변경이 색인에 반영되는 시간을 30분에서 3분으로 단축했습니다.</p></div><div><time>08.08</time><b>평가 데이터셋 200문항 구축</b><p>부서별 실제 질문을 익명화해 검색 정확도와 답변 근거성을 자동 측정합니다.</p></div><div><time>07.29</time><b>첫 번째 end-to-end 질의 성공</b><p>문서 수집부터 임베딩, 검색, 답변 생성과 출처 표시까지 전체 흐름을 연결했습니다.</p></div><div><time>07.15</time><b>프로젝트 시작</b><p>보안, 비용, 응답 품질의 성공 조건과 비기능 요구사항을 확정했습니다.</p></div></div></section>
          <section id="next"><span className="chapter">05 · NEXT MILESTONE</span><h2>{project.nextMilestone}</h2><p>실제 사용자의 질문과 문서 권한 패턴을 관찰하면서 검색 품질, 응답 지연, 운영 비용을 함께 측정합니다. 결과와 실패 사례는 다음 프로젝트 업데이트에 그대로 공개합니다.</p><a className="button primary" href="mailto:lab@example.com">이 프로젝트와 이야기하기 ↗</a></section>
        </div>
      </div>
    </article>
    <footer><div className="shell footer-inner"><div className="brand inverse"><span className="brand-mark">OL</span><span>OPEN LAB</span></div><small>© 2026 OPEN LAB. Built in Seoul.</small></div></footer>
  </main>;
}
