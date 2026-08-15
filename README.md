# OPEN LAB

오픈소스를 조합해 실제 시스템을 설계·구축·운영하고, 프로젝트의 결정과 진행 상황을 공개하는 회사 홈페이지입니다.

## 주요 화면

- `/` — 진행 중인 대표 프로젝트, 최근 진행 기록, 구축 방식
- `/archive` — 구축 중·검증 중·운영 중인 전체 프로젝트
- `/lab/private-ai-knowledge` — 아키텍처와 기술 결정이 포함된 프로젝트 상세 기록
- `/about` — 회사와 시스템 구축 원칙 소개

## 실행

```bash
pnpm install
pnpm dev
```

## Docker Compose 배포

Docker와 Docker Compose가 설치된 서버에서 다음 명령으로 빌드하고 실행합니다.

```bash
docker compose up -d --build
```

기본 주소는 `http://localhost:3000`입니다. 외부 포트를 바꾸려면 `APP_PORT`를 지정합니다.

```bash
APP_PORT=8080 docker compose up -d --build
```

운영 상태와 로그는 다음 명령으로 확인합니다.

```bash
docker compose ps
docker compose logs -f open-lab
```

새 버전을 반영할 때는 소스를 갱신한 뒤 같은 `docker compose up -d --build` 명령을 다시 실행합니다.

제품 기획과 운영 방식은 `PRODUCT_PLAN.md`에서 확인할 수 있습니다.
