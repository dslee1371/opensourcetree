# OPEN LAB

매일 하나의 오픈소스 기술을 직접 설치하고 검증한 결과를 공개하는 회사 홈페이지입니다.

## 주요 화면

- `/` — 오늘의 테스트, 최근 기록, 검증 방식
- `/archive` — 전체 기술 검증 아카이브
- `/lab/qdrant-100k` — 재현 가능한 테스트 상세 기록
- `/about` — 회사와 검증 원칙 소개

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
