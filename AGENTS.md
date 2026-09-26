# Agent guide — Extreme Co-Design

This repository is a **Quartz 5 digital garden**: linked markdown notes, backlinks, search, graph view, and JSON Canvas. The owner (SME) uses it to publish expertise on **extreme co-design** for GPU **inference and training**—optimizing across the full stack, not a single layer.

**Default agent work:** expand and refine **`content/`** only. Do not refactor the Quartz engine, submodule, or CI unless the user explicitly asks or the site fails to build.

## Domain (what “extreme co-design” means here)

Inference performance is a **system property**. Co-design spans:

1. **Hardware** — compute, memory hierarchy, interconnect  
2. **Data center** — power, cooling, networking, fleet topology  
3. **Kernels** — operators on SMs and memory  
4. **Compilers & runtimes** — graph lowering, memory lifetime  
5. **Inference engines** — batching, KV cache, backends  
6. **Distributed orchestration** — replicas, sharding, pipelines  
7. **Scheduling** — queues, SLOs, prefill vs decode  
8. **Model** — architecture, precision, structure  
9. **API** — client contract and constraints flowing downward  

Cross-cutting **concepts** (e.g. roofline, KV cache, goodput, SLO) should link **across layers** so the graph shows non-obvious edges—not only the stack spine.

Published site (after deploy): **https://dobbster.github.io/Extreme-Co-Design**  
`baseUrl` in `quartz.config.yaml`: `dobbster.github.io/Extreme-Co-Design`

## Repository layout

| Path | Agent should |
| --- | --- |
| `content/` | **Primary workspace** — notes, stubs, diagrams, references |
| `content/index.md` | Garden home / thesis; links to all layers |
| `content/layers/` | One note per stack layer; keep **neighbor wikilinks** |
| `content/concepts/` | Cross-cutting ideas; link to layers and each other |
| `content/references/` | One note per source (paper, talk, doc); idea notes link here |
| `content/extreme-co-design.canvas` | Authored stack map (JSON Canvas); keep in sync with layer graph |
| `quartz.config.yaml` | Site title, plugins, theme—change only for publishing/UX requests |
| `quartz.ts` | Quartz config loader—rarely edit |
| `scripts/` | Build/submodule wiring—do not change for content tasks |
| `.quartz-engine/` | **Git submodule** (upstream Quartz)—do not edit for content |
| `.github/workflows/deploy.yml` | GitHub Pages deploy—only if CI/deploy breaks |

Intellectual property lives in **`content/`**. Engine and `node_modules` are tooling.

## Content conventions

- **Format:** Obsidian-flavored markdown (Quartz OFM): `[[wikilinks]]`, callouts (`> [!note]`), **Mermaid** in notes for mechanism diagrams, LaTeX if needed.
- **Link resolution:** Quartz is configured for **`shortest`** paths (match Obsidian: Settings → Files → New link format → shortest path).
- **Frontmatter** (YAML): use `title`, `description`, and `tags` where helpful. Existing tag families:
  - `#thesis`, `#concept`, `#reference`
  - `#layer/hardware`, `#layer/kernels`, etc.
- **Stubs vs essays:** Many notes are intentional stubs (question + neighbors + “to fill in”). When the SME adds depth, preserve wikilinks and add links to new concepts/references rather than long unlinked prose.
- **References:** Prefer a dedicated note under `content/references/` and wikilink from layer/concept notes so citations appear in the graph.
- **Canvas:** `extreme-co-design.canvas` is the hand-drawn stack overview; the site graph is **emergent from links**. Update the canvas when the stack model changes materially.
- **Do not** put secrets or private drafts in repo; `private/` and `ignorePatterns` in config exclude some paths from publish.

## What not to do (unless asked)

- Vendoring or copying Quartz source into the repo root (use submodule).
- Large changes to `package.json`, `.quartz-engine`, or plugin lists without a clear build/deploy reason.
- Replacing the knowledge-graph model with a linear “docs site only” structure.
- Committing `node_modules/`, `public/`, or `.quartz-engine/node_modules/` (gitignored).

## Local build (verify content before push)

Requires **Node.js 22+**.

```powershell
cd Extreme-Co-Design
git submodule update --init --recursive
$env:NODE_OPTIONS = "--use-system-ca"   # Windows: if npm SSL errors
npm run setup
npm run serve
```

Open **http://localhost:8080**. After editing markdown, save and refresh (or rely on serve watch).

Production build only:

```powershell
npm run build
```

Output: `.quartz-engine/public/` (not committed).

**Windows git SSL:** if clone/submodule fails, try  
`git -c http.sslBackend=schannel clone ...`

## How publishing works

- Push to **`main`** triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).
- Workflow checks out **submodules**, runs `scripts/setup-engine.mjs`, builds with `scripts/run-quartz.mjs`, uploads `.quartz-engine/public` to GitHub Pages.
- Repo must use **Settings → Pages → Source: GitHub Actions** (one-time).

## Suggested content workflow for agents

1. Read `content/index.md` and the target layer/concept note.  
2. Expand prose, add Mermaid, and link to neighbors per the stack graph.  
3. Add or extend `content/references/` for new sources.  
4. Run `npm run build` locally if environment allows; otherwise rely on CI after push.  
5. Keep diffs focused on `content/` (and canvas if the model changed).

## Upgrading Quartz (rare)

Only when the user requests it:

```powershell
cd .quartz-engine
git fetch origin v5
git checkout v5
cd ..
git add .quartz-engine
npm run setup
npm run build
```

Pin a specific commit if `v5` moves and breaks the garden.

## License

Repository MIT (`LICENSE`). Written content is the author’s IP; attribution-focused licensing for notes may be discussed separately (e.g. CC BY) — not configured in repo today.
