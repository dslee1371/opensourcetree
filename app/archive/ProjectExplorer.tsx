"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { Project } from "@/lib/projects";

const statuses: Array<"전체" | Project["status"]> = ["전체", "설계", "구축 중", "검증 중", "운영 중", "완료"];

export default function ProjectExplorer({ projects }: { projects: Project[] }) {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<(typeof statuses)[number]>("전체");
  const visibleProjects = useMemo(() => {
    const keyword = query.trim().toLocaleLowerCase("ko-KR");
    return projects.filter((project) => {
      const matchesStatus = status === "전체" || project.status === status;
      const searchable = [project.title, project.summary, project.category, project.currentWork, ...project.stack].join(" ").toLocaleLowerCase("ko-KR");
      return matchesStatus && (!keyword || searchable.includes(keyword));
    });
  }, [projects, query, status]);

  return <>
    <section className="shell archive-tools" aria-label="프로젝트 검색과 필터">
      <div className="search-box"><span aria-hidden="true">⌕</span><input aria-label="프로젝트 검색" placeholder="프로젝트, 해결한 문제 또는 오픈소스 검색" value={query} onChange={(event) => setQuery(event.target.value)} /></div>
      <div className="filters" aria-label="진행 상태 필터">{statuses.map((item) => {
        const count = item === "전체" ? projects.length : projects.filter((project) => project.status === item).length;
        if (item !== "전체" && count === 0) return null;
        return <button key={item} className={status === item ? "active" : ""} aria-pressed={status === item} onClick={() => setStatus(item)}>{item} {count}</button>;
      })}</div>
    </section>
    <section className="shell archive-list">
      <div className="list-head"><span>최근 업데이트순 · {visibleProjects.length}개 프로젝트</span><small>프로젝트를 선택하면 아키텍처와 진행 기록을 볼 수 있습니다.</small></div>
      {visibleProjects.map((project) => <Link href={`/lab/${project.slug}`} className="archive-row project-row" key={project.slug}>
        <div className="archive-symbol">{project.code}</div><div><div className="tag-row"><span>{project.category}</span>{project.stack.slice(0, 3).map((item) => <span key={item}>{item}</span>)}</div><h2>{project.title}</h2><p>{project.summary}</p></div>
        <div className="archive-outcome project-outcome"><b className={project.status === "운영 중" ? "good" : "watch"}>{project.status}</b><span>진행률 <strong>{project.progress}%</strong></span><span>현재 단계 <strong>{project.duration}</strong></span><small>{project.updatedAt} 업데이트</small></div>
      </Link>)}
      {visibleProjects.length === 0 && <div className="no-results"><b>조건에 맞는 프로젝트가 없습니다.</b><p>검색어를 줄이거나 다른 진행 상태를 선택해 보세요.</p><button onClick={() => { setQuery(""); setStatus("전체"); }}>전체 프로젝트 보기</button></div>}
    </section>
  </>;
}
