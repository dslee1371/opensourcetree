import Link from "next/link";
import { projects } from "@/lib/projects";

export default function Archive() {
  return <main className="subpage">
    <header className="site-header shell"><Link className="brand" href="/"><span className="brand-mark">OL</span><span>OPEN LAB</span></Link><nav><Link href="/archive">프로젝트</Link><Link href="/about">회사 소개</Link></nav><a className="header-cta" href="mailto:lab@example.com">프로젝트 문의 ↗</a></header>
    <section className="archive-hero shell"><span className="kicker">OPEN SOURCE SYSTEM PROJECTS</span><h1>기술 목록이 아니라,<br /><em>만들어 온 시스템.</em></h1><p>문제 정의부터 아키텍처, 통합, 운영까지 프로젝트의 전체 경험을 기록합니다.<br />완성된 결과뿐 아니라 현재 진행 상황과 해결 중인 문제도 공개합니다.</p></section>
    <section className="shell archive-tools"><div className="search-box">⌕ <input aria-label="프로젝트 검색" placeholder="프로젝트, 해결한 문제 또는 오픈소스 검색" /></div><div className="filters"><button className="active">전체 {projects.length}</button><button>설계 1</button><button>구축 중 2</button><button>검증 중 1</button><button>운영 중 1</button></div></section>
    <section className="shell archive-list"><div className="list-head"><span>최근 업데이트순</span><small>모든 수치는 표시된 업데이트 날짜를 기준으로 합니다.</small></div>
      {projects.map((project) => <Link href={`/lab/${project.slug}`} className="archive-row project-row" key={project.slug}>
        <div className="archive-symbol">{project.code}</div><div><div className="tag-row"><span>{project.category}</span>{project.stack.slice(0, 3).map((item) => <span key={item}>{item}</span>)}</div><h2>{project.title}</h2><p>{project.summary}</p></div>
        <div className="archive-outcome project-outcome"><b className={project.status === "운영 중" ? "good" : "watch"}>{project.status}</b><span>진행률 <strong>{project.progress}%</strong></span><span>현재 단계 <strong>{project.duration}</strong></span><small>{project.updatedAt} 업데이트</small></div>
      </Link>)}
    </section>
    <footer><div className="shell footer-inner"><div className="brand inverse"><span className="brand-mark">OL</span><span>OPEN LAB</span></div><small>© 2026 OPEN LAB. Built in Seoul.</small></div></footer>
  </main>;
}
