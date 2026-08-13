export type Lab = {
  slug: string; name: string; symbol: string; title: string; summary: string;
  category: string; license: string; version: string; verdict: string;
  testedAt: string; readTime: string; metrics: { label: string; value: string }[];
};

export const labs: Lab[] = [
  { slug: "qdrant-100k", name: "Qdrant", symbol: "Q", title: "Qdrant에 10만 개 문서를 넣으면 얼마나 빠를까?", summary: "HNSW 기본 설정으로 색인 속도와 검색 정확도, 메모리 사용량을 직접 측정했습니다.", category: "DATA · AI", license: "APACHE 2.0", version: "1.15.1", verdict: "조건부 추천", testedAt: "2026.08.13", readTime: "8분", metrics: [{ label: "P95 응답", value: "12ms" }, { label: "Recall@10", value: "92.4%" }, { label: "메모리", value: "428MB" }] },
  { slug: "ollama-mac-mini", name: "Ollama", symbol: "O", title: "Mac mini 한 대로 사내 LLM을 운영할 수 있을까?", summary: "세 가지 8B 모델의 응답 속도와 동시 요청 한계를 실무 질문 50개로 확인했습니다.", category: "AI · LLM", license: "MIT", version: "0.11.4", verdict: "추천", testedAt: "2026.08.12", readTime: "11분", metrics: [{ label: "첫 토큰", value: "410ms" }, { label: "생성 속도", value: "31 t/s" }, { label: "메모리", value: "7.2GB" }] },
  { slug: "plane-project", name: "Plane", symbol: "P", title: "Plane은 Linear를 대체할 수 있을까?", summary: "5인 개발팀이 일주일 동안 이슈, 스프린트, 알림 흐름을 실제 프로젝트에 적용했습니다.", category: "PRODUCTIVITY", license: "AGPL 3.0", version: "0.26", verdict: "관찰", testedAt: "2026.08.11", readTime: "7분", metrics: [{ label: "설치 시간", value: "18분" }, { label: "완료율", value: "88%" }, { label: "팀 평가", value: "3.8/5" }] },
  { slug: "trivy-ci", name: "Trivy", symbol: "T", title: "Trivy가 실제 취약점을 얼마나 찾아낼까?", summary: "의도적으로 취약한 컨테이너 12개를 스캔하고 오탐과 미탐, CI 실행 시간을 비교했습니다.", category: "SECURITY", license: "APACHE 2.0", version: "0.64", verdict: "추천", testedAt: "2026.08.10", readTime: "9분", metrics: [{ label: "탐지율", value: "96%" }, { label: "오탐", value: "3건" }, { label: "CI 시간", value: "+42초" }] },
  { slug: "coolify-deploy", name: "Coolify", symbol: "C", title: "Coolify로 30분 안에 서비스를 배포할 수 있을까?", summary: "빈 서버부터 HTTPS가 적용된 애플리케이션까지 걸린 시간과 운영 난이도를 기록했습니다.", category: "DEVOPS", license: "APACHE 2.0", version: "4.0", verdict: "조건부 추천", testedAt: "2026.08.09", readTime: "10분", metrics: [{ label: "첫 배포", value: "24분" }, { label: "재배포", value: "68초" }, { label: "메모리", value: "1.1GB" }] },
  { slug: "duckdb-analytics", name: "DuckDB", symbol: "D", title: "10GB CSV를 노트북에서 바로 분석할 수 있을까?", summary: "별도 서버 없이 집계 쿼리 8개를 실행해 처리 속도와 메모리 한계를 확인했습니다.", category: "DATA", license: "MIT", version: "1.3.2", verdict: "추천", testedAt: "2026.08.08", readTime: "6분", metrics: [{ label: "평균 쿼리", value: "2.8초" }, { label: "최대 메모리", value: "2.4GB" }, { label: "설정", value: "0분" }] },
];

export function getLab(slug: string) { return labs.find((lab) => lab.slug === slug) ?? labs[0]; }
