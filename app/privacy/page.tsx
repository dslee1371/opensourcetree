import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = { title: "개인정보 처리 안내", description: "OPEN LAB 프로젝트 문의 시 수집하는 개인정보와 이용 목적을 안내합니다.", alternates: { canonical: "/privacy" } };

export default function PrivacyPage() {
  return <main className="subpage"><SiteHeader /><article className="legal-page shell"><Link className="back" href="/contact">← 프로젝트 문의</Link><span className="kicker">PRIVACY NOTICE</span><h1>개인정보 처리 안내</h1><p className="legal-lead">OPEN LAB은 프로젝트 문의에 답변하기 위해 필요한 최소한의 정보만 이메일로 전달받습니다.</p><section><h2>수집하는 정보</h2><p>이름, 회신 이메일, 회사 또는 팀, 관심 프로젝트와 문의 내용입니다. 회사 또는 팀 입력은 선택 사항입니다.</p></section><section><h2>이용 목적과 보관</h2><p>문의 확인, 답변과 프로젝트 상담을 위해 사용합니다. 상담이 종료되거나 보관 목적이 사라진 정보는 이메일 보관 정책에 따라 정리합니다.</p></section><section><h2>전달 방식과 동의 거부</h2><p>현재 문의 양식은 입력 내용을 방문자의 기본 메일 앱으로 전달합니다. 전송 전 내용을 직접 확인할 수 있으며, 동의하지 않을 경우 이메일을 보내지 않을 수 있습니다.</p></section><section><h2>문의</h2><p>개인정보 관련 요청은 <a href="mailto:dslee1371@gmail.com">dslee1371@gmail.com</a>으로 보내주세요.</p></section></article><SiteFooter /></main>;
}
