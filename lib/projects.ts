export type Project = {
  slug: string;
  code: string;
  title: string;
  summary: string;
  category: string;
  status: "설계" | "구축 중" | "검증 중" | "운영 중" | "완료";
  progress: number;
  updatedAt: string;
  duration: string;
  stack: string[];
  metrics: { label: string; value: string }[];
  currentWork: string;
  nextMilestone: string;
};

export const projects: Project[] = [
  {
    slug: "private-ai-knowledge",
    code: "P-01",
    title: "사내 문서 기반 Private AI 검색 시스템",
    summary: "외부로 데이터를 보내지 않고 사내 문서를 검색·질의할 수 있는 RAG 시스템을 구축합니다.",
    category: "AI · KNOWLEDGE",
    status: "구축 중",
    progress: 72,
    updatedAt: "2026.08.15",
    duration: "6주차",
    stack: ["Open WebUI", "Ollama", "Qdrant", "Langfuse"],
    metrics: [{ label: "검색 정확도", value: "92.4%" }, { label: "P95 응답", value: "1.8s" }, { label: "월 예상 비용", value: "₩86K" }],
    currentWork: "문서 권한을 반영한 검색 필터와 출처 표시 개선",
    nextMilestone: "100명 대상 파일럿 운영 시작",
  },
  {
    slug: "internal-developer-platform",
    code: "P-02",
    title: "개발팀을 위한 셀프서비스 배포 플랫폼",
    summary: "인프라 요청 없이 애플리케이션과 데이터베이스를 배포할 수 있는 내부 개발자 플랫폼을 만듭니다.",
    category: "PLATFORM · DEVOPS",
    status: "구축 중",
    progress: 48,
    updatedAt: "2026.08.14",
    duration: "4주차",
    stack: ["Backstage", "Argo CD", "Gitea", "OpenTofu"],
    metrics: [{ label: "배포 준비", value: "14→3분" }, { label: "지원 템플릿", value: "6개" }, { label: "자동화율", value: "68%" }],
    currentWork: "표준 서비스 템플릿과 운영 권한 모델 통합",
    nextMilestone: "첫 번째 팀의 실제 서비스 이전",
  },
  {
    slug: "supply-chain-security",
    code: "P-03",
    title: "오픈소스 소프트웨어 공급망 보안 체계",
    summary: "빌드부터 배포까지 이미지 서명, 취약점 검사, SBOM 생성을 자동화한 보안 파이프라인입니다.",
    category: "SECURITY · CI/CD",
    status: "운영 중",
    progress: 100,
    updatedAt: "2026.08.11",
    duration: "운영 93일",
    stack: ["Trivy", "Syft", "Cosign", "Kyverno"],
    metrics: [{ label: "검사 이미지", value: "1,284" }, { label: "차단 취약점", value: "37건" }, { label: "CI 증가", value: "+51s" }],
    currentWork: "오탐 예외 정책과 만료 규칙 운영",
    nextMilestone: "프로덕션 전체 클러스터 정책 적용",
  },
  {
    slug: "local-data-platform",
    code: "P-04",
    title: "소규모 팀을 위한 경량 데이터 분석 플랫폼",
    summary: "복잡한 클라우드 데이터웨어하우스 없이 수집, 변환, 분석을 한 서버에서 운영합니다.",
    category: "DATA · ANALYTICS",
    status: "검증 중",
    progress: 83,
    updatedAt: "2026.08.09",
    duration: "8주차",
    stack: ["Airbyte", "dbt", "DuckDB", "Metabase"],
    metrics: [{ label: "일 처리량", value: "42GB" }, { label: "평균 쿼리", value: "2.8s" }, { label: "월 비용", value: "₩54K" }],
    currentWork: "증분 적재 실패 복구와 데이터 품질 알림",
    nextMilestone: "운영 전 장애 복구 리허설",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug) ?? projects[0];
}
