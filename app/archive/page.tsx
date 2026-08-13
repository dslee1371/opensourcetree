import Link from "next/link";
import { labs } from "@/lib/labs";

export default function Archive() {
  return <main className="subpage">
    <header className="site-header shell"><Link className="brand" href="/"><span className="brand-mark">OL</span><span>OPEN LAB</span></Link><nav><Link href="/archive">기술 아카이브</Link><Link href="/about">회사 소개</Link></nav><a className="header-cta" href="mailto:lab@example.com">기술 제안하기 ↗</a></header>
    <section className="archive-hero shell"><span className="kicker">VERIFIED ARCHIVE</span><h1>소문 대신,<br /><em>검증된 기록.</em></h1><p>127개의 오픈소스 기술을 같은 원칙으로 실행하고 측정했습니다.<br />버전과 날짜가 명시된 결과만 제공합니다.</p></section>
    <section className="shell archive-tools"><div className="search-box">⌕ <input aria-label="기술 검색" placeholder="기술명, 문제 또는 카테고리 검색" /></div><div className="filters"><button className="active">전체 127</button><button>AI · LLM 32</button><button>DATA 26</button><button>DEVOPS 21</button><button>SECURITY 18</button><button>PRODUCTIVITY 30</button></div></section>
    <section className="shell archive-list">
      <div className="list-head"><span>최근 검증순</span><small>결과는 테스트 당시 버전을 기준으로 합니다.</small></div>
      {labs.map((lab) => <Link href={`/lab/${lab.slug}`} className="archive-row" key={lab.slug}><div className="archive-symbol">{lab.symbol}</div><div><div className="tag-row"><span>{lab.category}</span><span>{lab.license}</span><span>v{lab.version}</span></div><h2>{lab.title}</h2><p>{lab.summary}</p></div><div className="archive-outcome"><b className={lab.verdict === "추천" ? "good" : "watch"}>{lab.verdict}</b>{lab.metrics.slice(0, 2).map((m) => <span key={m.label}>{m.label} <strong>{m.value}</strong></span>)}<small>{lab.testedAt} · {lab.readTime}</small></div></Link>)}
    </section>
    <footer><div className="shell footer-inner"><div className="brand inverse"><span className="brand-mark">OL</span><span>OPEN LAB</span></div><small>© 2026 OPEN LAB. Built in Seoul.</small></div></footer>
  </main>;
}
