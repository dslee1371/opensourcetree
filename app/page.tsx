import Link from "next/link";
import { projects } from "@/lib/projects";

export default function Home() {
  const featured = projects[0];
  return <main>
    <header className="site-header shell">
      <Link className="brand" href="/" aria-label="오픈랩 홈"><span className="brand-mark">OL</span><span>OPEN LAB</span></Link>
      <nav aria-label="주요 메뉴"><Link href="/archive">프로젝트</Link><a href="#updates">진행 기록</a><a href="#process">구축 방식</a><Link href="/about">회사 소개</Link></nav>
      <a className="header-cta" href="mailto:lab@example.com">프로젝트 문의 <span>↗</span></a>
    </header>

    <section className="hero shell project-hero">
      <div className="hero-copy">
        <div className="eyebrow"><span className="pulse" /> 4개 시스템을 공개 구축 중</div>
        <h1>오픈소스로 시스템을 만들고,<br /><em>그 과정을 공개합니다.</em></h1>
        <p>요구사항 분석부터 아키텍처, 구축과 운영까지.<br />실제 프로젝트의 결정과 시행착오를 계속 기록합니다.</p>
        <div className="hero-actions"><Link className="button primary" href={`/lab/${featured.slug}`}>진행 중인 프로젝트 <span>→</span></Link><Link className="button quiet" href="/archive">전체 프로젝트 보기</Link></div>
      </div>
      <div className="system-card" aria-label="Private AI 검색 시스템 아키텍처">
        <div className="system-top"><span>PROJECT P-01</span><b>BUILDING · 72%</b></div>
        <div className="system-title"><small>PRIVATE AI KNOWLEDGE SYSTEM</small><strong>문서에서 답변까지,<br />데이터는 내부에.</strong></div>
        <div className="system-map">
          <div className="system-node"><span>01</span><b>Open WebUI</b><small>INTERFACE</small></div><i>→</i>
          <div className="system-node"><span>02</span><b>Ollama</b><small>INFERENCE</small></div><i>→</i>
          <div className="system-node"><span>03</span><b>Qdrant</b><small>RETRIEVAL</small></div>
        </div>
        <div className="system-progress"><span style={{ width: `${featured.progress}%` }} /></div>
        <div className="system-foot"><span>NOW · {featured.currentWork}</span><b>업데이트 2일 전</b></div>
      </div>
    </section>

    <section className="proof-strip"><div className="shell proof-grid project-proof">
      <div><strong>4</strong><span>진행·운영 프로젝트</span></div><div><strong>18</strong><span>통합한 오픈소스</span></div><div><strong>42</strong><span>기술 결정 기록</span></div><div><strong>3</strong><span>운영 중인 시스템</span></div>
      <p>도구를 소개하는 데서 멈추지 않습니다.<br /><b>연결하고 운영한 경험을 남깁니다.</b></p>
    </div></section>

    <section className="today shell section">
      <div className="section-heading"><div><span className="kicker">ACTIVE PROJECT · P-01</span><h2>지금 만들고 있는 시스템</h2></div><span className="fresh"><span className="pulse" /> {featured.status} · {featured.progress}%</span></div>
      <article className="featured-card project-feature">
        <div className="feature-visual architecture-visual"><div className="arch-ring"><span>DATA</span><b>AI</b><span>OPS</span></div><small>4 OPEN SOURCE COMPONENTS<br />1 PRIVATE SYSTEM</small></div>
        <div className="feature-content">
          <div className="tag-row"><span>{featured.category}</span><span>{featured.duration}</span><span>LAST UPDATE {featured.updatedAt}</span></div>
          <h3>{featured.title}</h3><p>{featured.summary}</p>
          <div className="project-stack">{featured.stack.map((item, index) => <span key={item}><i>0{index + 1}</i>{item}</span>)}</div>
          <div className="milestone-box"><div><span>현재 작업</span><b>{featured.currentWork}</b></div><div><span>다음 마일스톤</span><b>{featured.nextMilestone}</b></div></div>
          <Link className="text-link" href={`/lab/${featured.slug}`}>프로젝트 전체 기록 <span>→</span></Link>
        </div>
      </article>
    </section>

    <section className="latest section" id="updates"><div className="shell">
      <div className="section-heading"><div><span className="kicker">BUILD LOG</span><h2>프로젝트 진행 기록</h2></div><Link className="text-link" href="/archive">모든 프로젝트 <span>→</span></Link></div>
      <div className="update-list">
        <Link href={`/lab/${featured.slug}`}><time>08.15</time><span className="update-kind">ARCHITECTURE</span><div><h3>문서 권한을 검색 결과까지 전달하는 구조로 변경</h3><p>사용자 권한에 따라 Qdrant payload filter를 생성하는 게이트웨이를 추가했습니다.</p></div><b>→</b></Link>
        <Link href="/lab/internal-developer-platform"><time>08.14</time><span className="update-kind">BUILD</span><div><h3>서비스 템플릿에서 첫 Kubernetes 배포 성공</h3><p>Backstage에서 저장소 생성부터 Argo CD 동기화까지 하나의 흐름으로 연결했습니다.</p></div><b>→</b></Link>
        <Link href="/lab/supply-chain-security"><time>08.11</time><span className="update-kind">OPERATE</span><div><h3>취약점 예외 정책에 30일 만료 규칙 적용</h3><p>임시 예외가 영구 정책으로 남지 않도록 자동 알림과 차단 조건을 추가했습니다.</p></div><b>→</b></Link>
      </div>
    </div></section>

    <section className="section shell" id="process">
      <div className="section-heading left-narrow"><div><span className="kicker">HOW WE BUILD</span><h2>선정이 아니라,<br />운영까지 책임집니다.</h2></div><p>하나의 제품을 추천하는 대신 문제에 맞는 오픈소스를 조합하고,<br />실제 환경에서 지속 가능한 시스템으로 만듭니다.</p></div>
      <div className="process-grid"><div><span>01</span><i>?</i><h3>문제와 조건 정의</h3><p>사용자, 데이터, 보안, 비용 제약을 먼저 명확하게 정의합니다.</p></div><div><span>02</span><i>⌘</i><h3>아키텍처와 선정</h3><p>대안을 비교하고 교체 가능한 구조와 기술 결정 근거를 남깁니다.</p></div><div><span>03</span><i>↯</i><h3>통합하고 검증</h3><p>오픈소스를 연결해 실제 데이터와 장애 조건에서 동작을 확인합니다.</p></div><div><span>04</span><i>∞</i><h3>운영하고 개선</h3><p>배포 이후 비용, 장애, 업그레이드 경험까지 프로젝트에 축적합니다.</p></div></div>
    </section>

    <section className="newsletter shell"><div><span className="kicker light">PROJECT BRIEF</span><h2>프로젝트의 중요한 변화를<br />한 번에 확인하세요.</h2></div><form className="subscribe"><label htmlFor="email">업무용 이메일</label><div><input id="email" type="email" placeholder="you@company.com" required /><button type="submit">업데이트 받기 →</button></div><small>마일스톤과 기술 결정이 있을 때만 발송합니다.</small></form></section>
    <footer><div className="shell footer-inner"><div><div className="brand inverse"><span className="brand-mark">OL</span><span>OPEN LAB</span></div><p>오픈소스로 시스템을 만들고,<br />구축과 운영 경험을 공개합니다.</p></div><div className="footer-links"><Link href="/archive">프로젝트</Link><a href="#updates">진행 기록</a><a href="#process">구축 방식</a><Link href="/about">회사 소개</Link></div><small>© 2026 OPEN LAB. Built in Seoul.</small></div></footer>
  </main>;
}
