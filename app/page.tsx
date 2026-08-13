import Link from "next/link";
import { labs } from "@/lib/labs";

export default function Home() {
  const featured = labs[0];

  return (
    <main>
      <header className="site-header shell">
        <Link className="brand" href="/" aria-label="오픈랩 홈">
          <span className="brand-mark">OL</span>
          <span>OPEN LAB</span>
        </Link>
        <nav aria-label="주요 메뉴">
          <Link href="/archive">기술 아카이브</Link>
          <a href="#process">검증 방식</a>
          <Link href="/about">회사 소개</Link>
        </nav>
        <a className="header-cta" href="mailto:lab@example.com">기술 제안하기 <span>↗</span></a>
      </header>

      <section className="hero shell">
        <div className="hero-copy">
          <div className="eyebrow"><span className="pulse" /> 127일째 매일 검증 중</div>
          <h1>우리는 매일 하나를<br /><em>직접 검증합니다.</em></h1>
          <p>새로운 오픈소스 기술을 설치하고, 실패하고, 측정합니다.<br />광고 없는 결과와 재현 가능한 코드로 실무의 판단을 돕습니다.</p>
          <div className="hero-actions">
            <Link className="button primary" href={`/lab/${featured.slug}`}>오늘의 테스트 보기 <span>→</span></Link>
            <Link className="button quiet" href="/archive">127개의 기록 탐색</Link>
          </div>
        </div>
        <div className="terminal-card" aria-label="오늘의 테스트 요약">
          <div className="terminal-top"><span /><span /><span /><small>today&apos;s_lab.log</small></div>
          <div className="terminal-body">
            <p><b>$</b> openlab test <strong>{featured.name.toLowerCase()}</strong></p>
            <p className="muted">→ 환경 구성 완료 <i>8.4s</i></p>
            <p className="muted">→ 100K 문서 인덱싱 <i>42.1s</i></p>
            <p className="muted">→ 검색 정확도 측정 <i>92.4%</i></p>
            <div className="terminal-result">
              <span>VERDICT</span>
              <b>조건부 추천</b>
            </div>
            <div className="terminal-metrics">
              <div><small>응답 지연</small><strong>12<sup>ms</sup></strong></div>
              <div><small>메모리</small><strong>428<sup>MB</sup></strong></div>
              <div><small>설치 시간</small><strong>6<sup>min</sup></strong></div>
            </div>
          </div>
        </div>
      </section>

      <section className="proof-strip">
        <div className="shell proof-grid">
          <div><strong>127</strong><span>누적 테스트</span></div>
          <div><strong>94%</strong><span>재현 성공률</span></div>
          <div><strong>36</strong><span>실패 기록</span></div>
          <div><strong>72h</strong><span>평균 검증 시간</span></div>
          <p>성공만 기록하지 않습니다.<br /><b>실패가 더 좋은 판단을 만드니까요.</b></p>
        </div>
      </section>

      <section className="today shell section">
        <div className="section-heading">
          <div><span className="kicker">TODAY&apos;S TEST · 2026.08.13</span><h2>오늘의 테스트</h2></div>
          <span className="fresh"><span className="pulse" /> 3시간 전 검증 완료</span>
        </div>
        <article className="featured-card">
          <div className="feature-visual qdrant-grid">
            <span className="float-label l1">vector 012</span>
            <span className="float-label l2">cosine 0.924</span>
            <span className="float-label l3">payload ✓</span>
            <div className="radar"><i /><i /><i /><b>Q</b></div>
          </div>
          <div className="feature-content">
            <div className="tag-row"><span>{featured.category}</span><span>{featured.license}</span><span>v{featured.version}</span></div>
            <h3>{featured.title}</h3>
            <p>{featured.summary}</p>
            <div className="verdict-line"><span>최종 판정</span><b>{featured.verdict}</b><small>“빠르고 간결하지만, 운영 전 백업 전략은 필수”</small></div>
            <div className="mini-metrics">
              {featured.metrics.map((metric) => <div key={metric.label}><span>{metric.label}</span><b>{metric.value}</b></div>)}
            </div>
            <Link className="text-link" href={`/lab/${featured.slug}`}>전체 테스트 기록 읽기 <span>→</span></Link>
          </div>
        </article>
      </section>

      <section className="latest section">
        <div className="shell">
          <div className="section-heading">
            <div><span className="kicker">RECENTLY VERIFIED</span><h2>최근 검증 기록</h2></div>
            <Link className="text-link" href="/archive">전체 아카이브 <span>→</span></Link>
          </div>
          <div className="lab-grid">
            {labs.slice(1, 4).map((lab, index) => (
              <Link className="lab-card" href={`/lab/${lab.slug}`} key={lab.slug}>
                <div className={`card-visual visual-${index + 1}`}><span>{lab.symbol}</span><small>{lab.category}</small></div>
                <div className="card-body">
                  <div className="tag-row"><span>{lab.category}</span><span>{lab.license}</span></div>
                  <h3>{lab.title}</h3>
                  <p>{lab.summary}</p>
                  <div className="card-foot"><b className={lab.verdict === "추천" ? "good" : "watch"}>{lab.verdict}</b><span>{lab.testedAt} · {lab.readTime}</span></div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="process section shell" id="process">
        <div className="section-heading left-narrow"><div><span className="kicker">HOW WE TEST</span><h2>요약하지 않고,<br />실행해서 증명합니다.</h2></div><p>모든 기록은 동일한 검증 원칙을 따릅니다.<br />AI는 정리를 돕지만, 최종 판단은 엔지니어가 내립니다.</p></div>
        <div className="process-grid">
          <div><span>01</span><i>⌁</i><h3>격리 환경 구성</h3><p>버전과 하드웨어를 고정하고 누구나 다시 실행할 수 있는 환경을 만듭니다.</p></div>
          <div><span>02</span><i>↯</i><h3>실무 시나리오 실행</h3><p>데모가 아닌 실제 업무에 가까운 데이터와 성공 조건으로 테스트합니다.</p></div>
          <div><span>03</span><i>⌗</i><h3>수치와 실패 기록</h3><p>성능, 자원, 난이도를 측정하고 잘되지 않은 과정도 그대로 남깁니다.</p></div>
          <div><span>04</span><i>✓</i><h3>사람이 최종 검수</h3><p>라이선스와 보안 위험까지 확인한 뒤 도입 여부를 분명하게 판정합니다.</p></div>
        </div>
      </section>

      <section className="newsletter shell">
        <div><span className="kicker light">WEEKLY LAB NOTE</span><h2>일주일의 검증을<br />10분 안에 읽어보세요.</h2></div>
        <form className="subscribe"><label htmlFor="email">업무용 이메일</label><div><input id="email" type="email" placeholder="you@company.com" required /><button type="submit">구독하기 →</button></div><small>매주 금요일 발송 · 언제든 구독 해지</small></form>
      </section>

      <footer>
        <div className="shell footer-inner"><div><div className="brand inverse"><span className="brand-mark">OL</span><span>OPEN LAB</span></div><p>기술을 소개하지 않습니다.<br />직접 검증하고 기록합니다.</p></div><div className="footer-links"><Link href="/archive">아카이브</Link><a href="#process">검증 원칙</a><Link href="/about">회사 소개</Link><a href="mailto:lab@example.com">기술 문의</a></div><small>© 2026 OPEN LAB. Built in Seoul.</small></div>
      </footer>
    </main>
  );
}
