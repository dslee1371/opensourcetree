import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the OPEN LAB project homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /OPEN LAB/);
  assert.match(html, /오픈소스로 시스템을 만들고/);
  assert.match(html, /href="\/archive"[^>]*>프로젝트/);
  assert.match(html, /href="\/about"[^>]*>회사 소개/);
  assert.match(html, /href="\/contact"[^>]*>프로젝트 문의/);
  assert.match(html, /mailto:dslee1371@gmail\.com/);
});

test("provides a dedicated email inquiry page", async () => {
  const response = await render("/contact");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /PROJECT INQUIRY/);
  assert.match(html, /dslee1371@gmail\.com/);
  assert.match(html, /회신받을 이메일/);
  assert.match(html, /관심 프로젝트/);
  assert.match(html, /메일 작성하기/);
});

test("project archive includes interactive search and status filters", async () => {
  const explorer = await readFile(new URL("../app/archive/ProjectExplorer.tsx", import.meta.url), "utf8");
  assert.match(explorer, /useState/);
  assert.match(explorer, /toLocaleLowerCase/);
  assert.match(explorer, /project\.status === status/);
  assert.match(explorer, /aria-pressed/);
  assert.match(explorer, /visibleProjects\.map/);
  assert.match(explorer, /전체 프로젝트 보기/);
});

test("renders project-specific detail content", async () => {
  const response = await render("/lab/internal-developer-platform");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /반복되는 인프라 요청을/);
  assert.match(html, /배포 상태의 기준은 Git/);
  assert.doesNotMatch(html, /사내 지식을 검색한다/);
});

test("returns not found for an unknown project", async () => {
  const response = await render("/lab/not-a-project");
  assert.equal(response.status, 404);
});

test("uses the deployed domain and provides an accessible mobile menu", async () => {
  const [layout, header] = await Promise.all([
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../components/SiteHeader.tsx", import.meta.url), "utf8"),
  ]);
  assert.match(layout, /https:\/\/open-lab-daily\.dslee\.chatgpt\.site/);
  assert.match(header, /aria-expanded/);
  assert.match(header, /aria-controls="primary-navigation"/);
  assert.match(header, /className=\{open \? "open" : ""\}/);
});
