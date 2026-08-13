import Link from "next/link";
import { getLab, labs } from "@/lib/labs";

export function generateStaticParams() { return labs.map((lab) => ({ slug: lab.slug })); }

export default async function LabPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const lab = getLab(slug);
  return <main className="subpage">
    <header className="site-header shell"><Link className="brand" href="/"><span className="brand-mark">OL</span><span>OPEN LAB</span></Link><nav><Link href="/archive">기술 아카이브</Link><Link href="/about">회사 소개</Link></nav><a className="header-cta" href="mailto:lab@example.com">기술 제안하기 ↗</a></header>
    <article className="article shell">
      <Link className="back" href="/archive">← 기술 아카이브</Link>
      <div className="article-title"><div className="tag-row"><span>{lab.category}</span><span>{lab.license}</span><span>v{lab.version}</span></div><h1>{lab.title}</h1><p>{lab.summary}</p><div className="byline">2026년 8월 13일 검증 · 읽는 시간 {lab.readTime} · 작성 김오픈 · 검수 박엔진</div></div>
      <div className="result-panel"><div><span>FINAL VERDICT</span><strong>{lab.verdict}</strong><p>빠르고 간결한 개발 경험. 운영 환경에서는 백업과 장애 복구 전략을 먼저 준비해야 합니다.</p></div><div className="result-metrics">{lab.metrics.map((m) => <div key={m.label}><span>{m.label}</span><b>{m.value}</b></div>)}</div></div>
      <div className="article-layout">
        <aside><b>이 글의 순서</b><a href="#question">검증 질문</a><a href="#environment">테스트 환경</a><a href="#result">실행과 결과</a><a href="#decision">실무 판단</a><a href="#reproduce">재현하기</a></aside>
        <div className="article-body">
          <section id="question"><span className="chapter">01 · QUESTION</span><h2>무엇을 확인했나</h2><p>공식 문서의 주장보다 실제 팀 환경에서 얼마나 빠르고 안정적으로 동작하는지가 궁금했습니다. 그래서 세 가지 질문을 정하고 성공 기준을 먼저 고정했습니다.</p><ul><li>10만 개 문서를 10분 이내에 색인할 수 있는가?</li><li>P95 검색 응답이 50ms 이하인가?</li><li>기본 설정만으로 Recall@10이 90%를 넘는가?</li></ul></section>
          <section id="environment"><span className="chapter">02 · ENVIRONMENT</span><h2>테스트 환경</h2><div className="env-table"><div><span>Machine</span><b>Apple M4 · 16GB</b></div><div><span>Runtime</span><b>Docker 27.5</b></div><div><span>Dataset</span><b>Wikipedia KO 100K</b></div><div><span>Embedding</span><b>768 dimensions</b></div></div></section>
          <section id="result"><span className="chapter">03 · RESULT</span><h2>6분 만에 설치했고,<br />12ms 안에 답했습니다.</h2><p>기본 Docker 이미지와 단일 노드 구성으로 시작했습니다. 별도 튜닝 없이도 성공 기준을 모두 통과했으며 메모리 사용량도 예상보다 낮았습니다.</p><pre><code>$ docker run -p 6333:6333 qdrant/qdrant:v{lab.version}{"\n"}✓ REST API ready in 1.8s{"\n"}✓ 100,000 points indexed in 42.1s{"\n"}✓ p95 latency 12ms</code></pre><div className="note"><b>실패 기록</b><p>payload index 없이 필터 검색을 실행했을 때 P95가 310ms까지 증가했습니다. 실서비스에서는 필터 대상 필드의 인덱스를 반드시 먼저 설계해야 합니다.</p></div></section>
          <section id="decision"><span className="chapter">04 · DECISION</span><h2>작은 팀의 첫 벡터 DB로 추천</h2><p>설치와 API가 단순하고 기본 성능이 충분합니다. 다만 단일 노드의 편안함만 보고 운영에 들어가면 백업과 복구에서 곤란해질 수 있습니다.</p><div className="pros-cons"><div><b>좋았던 점</b><p>간결한 API와 문서</p><p>낮은 기본 지연 시간</p><p>payload 필터의 유연성</p></div><div><b>주의할 점</b><p>분산 구성의 운영 난도</p><p>인덱스 메모리 예측 필요</p><p>백업 복원 리허설 필수</p></div></div></section>
          <section id="reproduce"><span className="chapter">05 · REPRODUCE</span><h2>직접 다시 실행해 보세요.</h2><p>테스트 데이터와 실행 스크립트, 원본 로그를 함께 공개합니다. 같은 환경이라면 15분 안에 결과를 재현할 수 있습니다.</p><a className="button primary" href="#">재현 저장소 열기 ↗</a></section>
        </div>
      </div>
    </article>
    <footer><div className="shell footer-inner"><div className="brand inverse"><span className="brand-mark">OL</span><span>OPEN LAB</span></div><small>© 2026 OPEN LAB. Built in Seoul.</small></div></footer>
  </main>;
}
