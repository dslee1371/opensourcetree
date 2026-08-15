import Link from "next/link";
import { getProject, projects } from "@/lib/projects";

export function generateStaticParams() { return projects.map((project) => ({ slug: project.slug })); }

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  const isLocalRag = project.slug === "local-rag-workbench";
  const problemTitle = isLocalRag ? "노트북 한 대에서\n완결되는 RAG를 만든다." : "데이터를 외부로 보내지 않고\n사내 지식을 검색한다.";
  const problemBody = isLocalRag
    ? "클라우드 계정이나 외부 AI API 없이 개인 노트북에서 문서를 수집하고, 검색하고, 근거가 포함된 답변까지 생성하는 환경을 만듭니다. 설치 과정을 Docker Compose로 재현 가능하게 만들고 품질과 자원 사용량을 함께 기록합니다."
    : "문서는 여러 저장소에 흩어져 있고, 구성원은 필요한 정보를 찾는 데 많은 시간을 사용합니다. 민감한 내부 자료를 외부 AI 서비스로 보내지 않으면서 출처가 명확한 답변을 제공하는 것이 프로젝트의 목표입니다.";
  const goals = isLocalRag
    ? ["PDF와 Markdown 100개를 자동으로 파싱하고 청크화", "질문부터 첫 답변까지 3초 이내", "모든 모델과 문서 데이터를 로컬 환경에 유지", "답변마다 파일명, 페이지와 근거 문단 표시"]
    : ["모든 추론과 검색 데이터를 내부 네트워크에 유지", "사용자가 접근할 수 있는 문서만 검색 결과에 포함", "답변마다 원문 출처와 근거 문단 제공", "기존 문서 저장소의 변경 사항을 자동 반영"];
  const componentRoles = isLocalRag
    ? ["질문 인터페이스", "로컬 추론", "문서 파싱", "벡터 검색", "품질 관측"]
    : ["사용자 인터페이스", "로컬 추론", "벡터 검색", "품질 관측"];
  const decisions = isLocalRag ? [
    { id: "ADR-003 · PROPOSED", title: "문서 파서는 Docling으로 시작", body: "PDF 표와 레이아웃 보존 품질을 우선해 기본 파서로 선택하고, 처리 속도와 OCR 정확도를 직접 측정합니다." },
    { id: "ADR-002 · ACCEPTED", title: "벡터 저장소를 Qdrant로 분리", body: "애플리케이션에 검색 인덱스를 내장하지 않고 별도 컨테이너로 운영해 백업과 교체 경계를 명확하게 합니다." },
    { id: "ADR-001 · ACCEPTED", title: "전체 환경을 Docker Compose로 재현", body: "모델 파일을 제외한 모든 구성과 네트워크, 볼륨, 상태 확인을 한 명령으로 다시 만들 수 있게 합니다." },
  ] : [
    { id: "ADR-012 · ACCEPTED", title: "Qdrant payload filter로 문서 권한 처리", body: "애플리케이션 후처리 대신 검색 단계에서 접근 불가능한 문서를 제외해 정보 노출 가능성을 줄였습니다." },
    { id: "ADR-009 · REVISED", title: "단일 모델에서 작업별 모델 분리", body: "요약과 질의응답의 요구 특성이 달라 임베딩, 재정렬, 생성 모델을 각각 독립적으로 운영합니다." },
    { id: "ADR-006 · ACCEPTED", title: "관측 데이터에 원문을 저장하지 않음", body: "Langfuse에는 지연 시간과 평가 결과만 전송하고 실제 문서와 질문은 해시 처리합니다." },
  ];
  const updates = isLocalRag ? [
    { date: "08.15", title: "프로젝트 시작과 성공 기준 확정", body: "문서 100개, 응답 3초, 외부 전송 0건을 첫 번째 검증 기준으로 정했습니다." },
    { date: "NEXT", title: "최소 Docker Compose 환경 구성", body: "Ollama, Qdrant, Open WebUI의 상태 확인과 데이터 볼륨부터 연결합니다." },
    { date: "NEXT", title: "첫 end-to-end 문서 질의", body: "Docling으로 파싱한 PDF를 색인하고 답변에 파일과 페이지 출처를 표시합니다." },
  ] : [
    { date: "08.15", title: "문서 권한 검색 필터 통합", body: "권한 변경이 색인에 반영되는 시간을 30분에서 3분으로 단축했습니다." },
    { date: "08.08", title: "평가 데이터셋 200문항 구축", body: "부서별 실제 질문을 익명화해 검색 정확도와 답변 근거성을 자동 측정합니다." },
    { date: "07.29", title: "첫 번째 end-to-end 질의 성공", body: "문서 수집부터 임베딩, 검색, 답변 생성과 출처 표시까지 전체 흐름을 연결했습니다." },
    { date: "07.15", title: "프로젝트 시작", body: "보안, 비용, 응답 품질의 성공 조건과 비기능 요구사항을 확정했습니다." },
  ];
  return <main className="subpage">
    <header className="site-header shell"><Link className="brand" href="/"><span className="brand-mark">OL</span><span>OPEN LAB</span></Link><nav><Link href="/archive">프로젝트</Link><Link href="/about">회사 소개</Link></nav><a className="header-cta" href="mailto:lab@example.com">프로젝트 문의 ↗</a></header>
    <article className="article shell">
      <Link className="back" href="/archive">← 전체 프로젝트</Link>
      <div className="article-title"><div className="tag-row"><span>{project.code}</span><span>{project.category}</span><span>{project.status}</span></div><h1>{project.title}</h1><p>{project.summary}</p><div className="byline">{project.duration} · 마지막 업데이트 {project.updatedAt} · 아키텍처와 진행 기록 공개</div></div>
      <div className="result-panel project-status-panel"><div><span>CURRENT STATUS · {project.progress}%</span><strong>{project.status}</strong><p>현재 작업: {project.currentWork}</p><div className="detail-progress"><span style={{ width: `${project.progress}%` }} /></div></div><div className="result-metrics">{project.metrics.map((metric) => <div key={metric.label}><span>{metric.label}</span><b>{metric.value}</b></div>)}</div></div>
      <div className="article-layout"><aside><b>프로젝트 기록</b><a href="#problem">문제와 목표</a><a href="#architecture">시스템 구조</a><a href="#decisions">기술 결정</a><a href="#updates">진행 기록</a><a href="#next">다음 단계</a></aside>
        <div className="article-body">
          <section id="problem"><span className="chapter">01 · PROBLEM</span><h2>{problemTitle.split("\n").map((line, index) => <span key={line}>{line}{index === 0 && <br />}</span>)}</h2><p>{problemBody}</p><ul>{goals.map((goal) => <li key={goal}>{goal}</li>)}</ul></section>
          <section id="architecture"><span className="chapter">02 · ARCHITECTURE</span><h2>{project.stack.length}개의 오픈소스를<br />하나의 로컬 흐름으로.</h2><div className="architecture-flow">{project.stack.map((item, index) => <div key={item}><span>0{index + 1}</span><b>{item}</b><small>{componentRoles[index] ?? "시스템 구성"}</small></div>)}</div><p>{isLocalRag ? "문서 파싱, 임베딩, 검색, 생성과 관측을 각각 독립 컨테이너로 구성합니다. 모델과 벡터 인덱스는 로컬 볼륨에 보관하고 외부 네트워크 없이도 전체 흐름이 동작하도록 설계합니다." : "각 구성 요소는 표준 API로 분리해 향후 모델과 벡터 데이터베이스를 교체할 수 있도록 했습니다. 인증과 문서 권한은 별도 게이트웨이에서 통합 처리합니다."}</p></section>
          <section id="decisions"><span className="chapter">03 · DECISIONS</span><h2>무엇을 선택했는지보다<br />왜 선택했는지 기록합니다.</h2><div className="decision-list">{decisions.map((decision) => <div key={decision.id}><span>{decision.id}</span><b>{decision.title}</b><p>{decision.body}</p></div>)}</div></section>
          <section id="updates"><span className="chapter">04 · BUILD LOG</span><h2>프로젝트 진행 기록</h2><div className="project-timeline">{updates.map((update) => <div key={`${update.date}-${update.title}`}><time>{update.date}</time><b>{update.title}</b><p>{update.body}</p></div>)}</div></section>
          <section id="next"><span className="chapter">05 · NEXT MILESTONE</span><h2>{project.nextMilestone}</h2><p>{isLocalRag ? "먼저 최소 구성을 실제로 실행한 뒤 설치 시간, 메모리 사용량, 검색 정확도와 출처 일치율을 기록합니다. 각 마일스톤의 Docker 구성과 실패 사례도 함께 공개합니다." : "실제 사용자의 질문과 문서 권한 패턴을 관찰하면서 검색 품질, 응답 지연, 운영 비용을 함께 측정합니다. 결과와 실패 사례는 다음 프로젝트 업데이트에 그대로 공개합니다."}</p><a className="button primary" href="mailto:lab@example.com">이 프로젝트와 이야기하기 ↗</a></section>
        </div>
      </div>
    </article>
    <footer><div className="shell footer-inner"><div className="brand inverse"><span className="brand-mark">OL</span><span>OPEN LAB</span></div><small>© 2026 OPEN LAB. Built in Seoul.</small></div></footer>
  </main>;
}
