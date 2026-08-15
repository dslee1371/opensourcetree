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
  problemTitle: string;
  problemBody: string;
  goals: string[];
  componentRoles: string[];
  architectureBody: string;
  decisions: { id: string; title: string; body: string }[];
  updates: { date: string; title: string; body: string }[];
  nextBody: string;
};

export const projects: Project[] = [
  {
    slug: "local-rag-workbench",
    code: "P-05",
    title: "노트북 한 대에서 시작하는 로컬 RAG 시스템",
    summary: "PDF와 Markdown 문서를 외부 전송 없이 수집·검색·질의하는 재현 가능한 로컬 RAG 환경을 구축합니다.",
    category: "AI · LOCAL RAG",
    status: "설계",
    progress: 14,
    updatedAt: "2026.08.15",
    duration: "1주차",
    stack: ["Open WebUI", "Ollama", "Docling", "Qdrant", "Langfuse"],
    metrics: [{ label: "목표 문서", value: "100개" }, { label: "목표 응답", value: "<3s" }, { label: "외부 전송", value: "0건" }],
    currentWork: "Docker Compose 기반 최소 아키텍처와 평가 기준 확정",
    nextMilestone: "PDF 100개 수집부터 출처 포함 답변까지 end-to-end 연결",
    problemTitle: "노트북 한 대에서\n완결되는 RAG를 만든다.",
    problemBody: "클라우드 계정이나 외부 AI API 없이 개인 노트북에서 문서를 수집하고, 검색하고, 근거가 포함된 답변까지 생성하는 환경을 만듭니다. 설치 과정을 Docker Compose로 재현 가능하게 만들고 품질과 자원 사용량을 함께 기록합니다.",
    goals: ["PDF와 Markdown 100개를 자동으로 파싱하고 청크화", "질문부터 첫 답변까지 3초 이내", "모든 모델과 문서 데이터를 로컬 환경에 유지", "답변마다 파일명, 페이지와 근거 문단 표시"],
    componentRoles: ["질문 인터페이스", "로컬 추론", "문서 파싱", "벡터 검색", "품질 관측"],
    architectureBody: "문서 파싱, 임베딩, 검색, 생성과 관측을 각각 독립 컨테이너로 구성합니다. 모델과 벡터 인덱스는 로컬 볼륨에 보관하고 외부 네트워크 없이도 전체 흐름이 동작하도록 설계합니다.",
    decisions: [{ id: "ADR-003 · PROPOSED", title: "문서 파서는 Docling으로 시작", body: "PDF 표와 레이아웃 보존 품질을 우선해 기본 파서로 선택하고 처리 속도와 OCR 정확도를 측정합니다." }, { id: "ADR-002 · ACCEPTED", title: "벡터 저장소를 Qdrant로 분리", body: "검색 인덱스를 별도 컨테이너로 운영해 백업과 교체 경계를 명확하게 합니다." }, { id: "ADR-001 · ACCEPTED", title: "전체 환경을 Docker Compose로 재현", body: "구성, 네트워크, 볼륨과 상태 확인을 한 명령으로 다시 만들 수 있게 합니다." }],
    updates: [{ date: "08.15", title: "프로젝트 시작과 성공 기준 확정", body: "문서 100개, 응답 3초, 외부 전송 0건을 첫 검증 기준으로 정했습니다." }, { date: "NEXT", title: "최소 Docker Compose 환경 구성", body: "Ollama, Qdrant, Open WebUI의 상태 확인과 데이터 볼륨부터 연결합니다." }, { date: "NEXT", title: "첫 end-to-end 문서 질의", body: "Docling으로 파싱한 PDF를 색인하고 답변에 파일과 페이지 출처를 표시합니다." }],
    nextBody: "최소 구성을 실제로 실행한 뒤 설치 시간, 메모리 사용량, 검색 정확도와 출처 일치율을 기록합니다. 각 마일스톤의 Docker 구성과 실패 사례도 함께 공개합니다.",
  },
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
    problemTitle: "데이터를 외부로 보내지 않고\n사내 지식을 검색한다.",
    problemBody: "문서는 여러 저장소에 흩어져 있고 구성원은 필요한 정보를 찾는 데 많은 시간을 사용합니다. 민감한 내부 자료를 외부 AI 서비스로 보내지 않으면서 출처가 명확한 답변을 제공하는 것이 목표입니다.",
    goals: ["모든 추론과 검색 데이터를 내부 네트워크에 유지", "사용자가 접근할 수 있는 문서만 결과에 포함", "답변마다 원문 출처와 근거 문단 제공", "문서 저장소 변경 사항 자동 반영"],
    componentRoles: ["사용자 인터페이스", "로컬 추론", "벡터 검색", "품질 관측"],
    architectureBody: "UI, 추론, 검색과 관측을 표준 API로 분리했습니다. 검색 단계에서 문서 권한을 적용하고 관측 데이터에는 원문을 저장하지 않습니다.",
    decisions: [{ id: "ADR-012 · ACCEPTED", title: "검색 단계에서 문서 권한 처리", body: "Qdrant payload filter로 접근 불가능한 문서를 결과에서 제외합니다." }, { id: "ADR-009 · REVISED", title: "작업별 모델 분리", body: "임베딩, 재정렬과 생성 모델을 독립 운영해 품질과 자원 사용을 조정합니다." }, { id: "ADR-006 · ACCEPTED", title: "관측 데이터에 원문을 저장하지 않음", body: "지연 시간과 평가 결과만 기록하고 문서와 질문은 해시 처리합니다." }],
    updates: [{ date: "08.15", title: "문서 권한 검색 필터 통합", body: "권한 변경 반영 시간을 30분에서 3분으로 단축했습니다." }, { date: "08.08", title: "평가 데이터셋 200문항 구축", body: "부서별 질문을 익명화해 검색 정확도와 근거성을 측정합니다." }, { date: "07.29", title: "첫 end-to-end 질의 성공", body: "수집부터 답변 생성과 출처 표시까지 전체 흐름을 연결했습니다." }],
    nextBody: "파일럿 사용자의 질문과 권한 패턴을 관찰하며 검색 품질, 응답 지연과 운영 비용을 함께 측정합니다.",
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
    problemTitle: "반복되는 인프라 요청을\n셀프서비스 흐름으로 바꾼다.",
    problemBody: "새 서비스를 시작할 때마다 저장소, 배포 환경과 권한을 수작업으로 요청해 대기 시간이 발생합니다. 표준 경로는 자동화하고 예외만 플랫폼 팀이 다루도록 개발 경험을 재설계합니다.",
    goals: ["서비스 생성부터 첫 배포까지 5분 이내", "검증된 템플릿으로 기본 보안 정책 자동 적용", "Git 기반 변경 이력과 승인 흐름 유지", "플랫폼 구성 요소를 팀별로 점진 도입"],
    componentRoles: ["서비스 카탈로그", "지속 배포", "소스 저장소", "인프라 정의"],
    architectureBody: "Backstage 템플릿이 Gitea 저장소와 OpenTofu 구성을 만들고 Argo CD가 선언된 상태를 클러스터에 반영합니다. 모든 변경은 Git 이력으로 추적합니다.",
    decisions: [{ id: "ADR-008 · ACCEPTED", title: "배포 상태의 기준은 Git", body: "콘솔 변경을 제한하고 애플리케이션과 인프라 상태를 Git 선언으로 관리합니다." }, { id: "ADR-005 · ACCEPTED", title: "템플릿은 작은 조합으로 유지", body: "거대한 단일 템플릿 대신 서비스 유형과 선택 기능을 조합합니다." }, { id: "ADR-002 · REVISED", title: "권한을 팀 단위로 위임", body: "플랫폼 관리 권한과 서비스 운영 권한을 분리해 병목을 줄입니다." }],
    updates: [{ date: "08.14", title: "첫 Kubernetes 배포 성공", body: "저장소 생성부터 Argo CD 동기화까지 하나의 흐름으로 연결했습니다." }, { date: "08.06", title: "표준 서비스 템플릿 6개 확정", body: "웹, 작업자와 데이터 작업의 기본 구성을 분리했습니다." }, { date: "07.24", title: "권한 모델 초안 검증", body: "플랫폼 관리자와 서비스 운영자의 책임 경계를 테스트했습니다." }],
    nextBody: "첫 번째 실제 서비스를 이전하면서 템플릿 누락, 권한 요청과 배포 실패 복구 시간을 측정합니다.",
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
    problemTitle: "빌드부터 배포까지\n신뢰할 수 있는 증거를 남긴다.",
    problemBody: "취약한 패키지와 출처가 확인되지 않은 이미지가 배포 단계까지 유입될 수 있습니다. 구성 요소 목록, 취약점 결과와 이미지 서명을 하나의 정책 흐름으로 연결합니다.",
    goals: ["모든 이미지에 SBOM 자동 생성", "심각도 기준을 넘는 취약점 배포 차단", "서명되지 않은 이미지 실행 차단", "예외 승인과 만료 이력 추적"],
    componentRoles: ["취약점 검사", "SBOM 생성", "이미지 서명", "배포 정책"],
    architectureBody: "CI에서 Syft와 Trivy로 증거를 만들고 Cosign으로 이미지에 서명합니다. Kyverno가 클러스터 진입 시 서명과 정책을 다시 확인합니다.",
    decisions: [{ id: "ADR-011 · ACCEPTED", title: "예외에는 만료일을 강제", body: "임시 허용이 영구 정책이 되지 않도록 30일 후 재검토합니다." }, { id: "ADR-007 · ACCEPTED", title: "SBOM 형식을 SPDX로 통일", body: "도구 교체와 외부 전달을 고려해 표준 형식으로 보관합니다." }, { id: "ADR-004 · ACCEPTED", title: "서명 검증을 클러스터에서 재실행", body: "CI 결과만 신뢰하지 않고 실행 직전 정책으로 다시 확인합니다." }],
    updates: [{ date: "08.11", title: "예외 정책에 30일 만료 규칙 적용", body: "만료 전 알림과 만료 후 자동 차단 조건을 추가했습니다." }, { date: "07.30", title: "프로덕션 후보 이미지 서명 적용", body: "빌드 산출물과 서명 주체를 배포 정책에 연결했습니다." }, { date: "07.12", title: "SBOM과 취약점 보고서 통합", body: "하나의 파이프라인에서 두 산출물을 생성하도록 구성했습니다." }],
    nextBody: "프로덕션 전체 클러스터에 정책을 확장하기 전 차단 시나리오와 긴급 예외 절차를 리허설합니다.",
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
    problemTitle: "작은 팀도 감당할 수 있는\n데이터 흐름을 만든다.",
    problemBody: "분석 요구는 있지만 복잡한 클라우드 데이터 플랫폼의 비용과 운영 인력은 부담입니다. 한 서버에서 수집, 변환과 시각화를 운영하되 구성 요소를 교체할 수 있게 만듭니다.",
    goals: ["한 서버에서 일 40GB 이상 증분 처리", "실패한 적재를 처음부터 재실행하지 않고 복구", "변환 테스트 실패를 운영자에게 즉시 알림", "분석가가 SQL로 모델을 변경하고 검토"],
    componentRoles: ["데이터 수집", "변환과 테스트", "분석 엔진", "대시보드"],
    architectureBody: "Airbyte가 원천 데이터를 수집하고 dbt가 DuckDB 모델을 변환합니다. Metabase는 검증된 모델만 조회하며 원본과 변환 데이터는 단계별로 분리합니다.",
    decisions: [{ id: "ADR-010 · ACCEPTED", title: "분석 엔진은 DuckDB로 시작", body: "현재 처리량에서 단일 서버의 단순성과 비용 효율을 우선합니다." }, { id: "ADR-006 · ACCEPTED", title: "증분 적재 상태를 별도 기록", body: "실패 지점부터 안전하게 다시 시작할 수 있도록 커서와 실행 이력을 보관합니다." }, { id: "ADR-003 · REVISED", title: "대시보드는 검증 모델만 조회", body: "원천 테이블 직접 조회를 막아 지표 정의의 차이를 줄입니다." }],
    updates: [{ date: "08.09", title: "증분 적재 실패 복구 검증", body: "중단 지점부터 다시 시작해 중복 데이터가 생기지 않는지 확인했습니다." }, { date: "07.31", title: "데이터 품질 알림 연결", body: "dbt 테스트 실패를 운영 채널에 전달하도록 구성했습니다." }, { date: "07.18", title: "일 42GB 처리 기준 통과", body: "현재 서버 사양에서 목표 처리량과 평균 쿼리 시간을 측정했습니다." }],
    nextBody: "네트워크 중단, 디스크 부족과 스키마 변경을 재현해 복구 절차와 데이터 손실 범위를 검증합니다.",
  },
];

export function getProject(slug: string) { return projects.find((project) => project.slug === slug); }
