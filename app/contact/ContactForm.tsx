"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState, type FormEvent } from "react";
import { projects } from "@/lib/projects";

export default function ContactForm() {
  const searchParams = useSearchParams();
  const selectedProject = projects.find((project) => project.slug === searchParams.get("project"));
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    await navigator.clipboard.writeText("dslee1371@gmail.com");
    setCopied(true);
  }

  function openMail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const company = String(data.get("company") ?? "");
    const replyTo = String(data.get("email") ?? "");
    const project = String(data.get("project") ?? "새 프로젝트");
    const message = String(data.get("message") ?? "");
    const subject = `[OPEN LAB 프로젝트 문의] ${project}`;
    const body = [`이름: ${name}`, `회사/팀: ${company || "미입력"}`, `회신 이메일: ${replyTo}`, `관심 프로젝트: ${project}`, "", "문의 내용", message].join("\n");
    window.location.href = `mailto:dslee1371@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return <form className="contact-form" onSubmit={openMail}>
    <div className="form-row"><label>이름<input name="name" autoComplete="name" required placeholder="홍길동" /></label><label>회사 또는 팀<input name="company" autoComplete="organization" placeholder="회사명 / 팀명" /></label></div>
    <label>회신받을 이메일<input name="email" type="email" autoComplete="email" required placeholder="you@company.com" /></label>
    <label>관심 프로젝트<select name="project" defaultValue={selectedProject?.title ?? "새 프로젝트"}><option>새 프로젝트</option>{projects.map((project) => <option key={project.slug}>{project.title}</option>)}</select></label>
    <label>문의 내용<textarea name="message" required rows={7} placeholder="해결하려는 문제, 현재 환경, 예상 일정 등을 알려주세요." /></label>
    <label className="privacy-check"><input name="privacy" type="checkbox" required /><span>문의 회신을 위한 개인정보 수집·이용에 동의합니다. <Link href="/privacy">안내 보기</Link></span></label>
    <button className="button primary" type="submit">메일 작성하기 ↗</button>
    <div className="mail-fallback"><small>버튼을 누르면 기본 메일 앱이 열립니다. 열리지 않으면 주소를 복사해 직접 보내주세요.</small><button type="button" onClick={copyEmail}>{copied ? "복사됨 ✓" : "이메일 주소 복사"}</button><span aria-live="polite" className="sr-only">{copied ? "이메일 주소가 복사되었습니다." : ""}</span></div>
  </form>;
}
