# Extreme Co-Design

My idea of how a large-scale enterprise or data center can achieve **extreme co-design** for highly optimized inferencing and training: optimization across hardware, the facility, kernels, compilers, inference engines, distributed orchestration, scheduling, the model, and the API.

## Published garden

**https://dobbster.github.io/Extreme-Co-Design**

Enable **GitHub Pages → Source: GitHub Actions** once if the site does not deploy after the first push to `main`.

## What lives in this repository

| Path | Purpose |
| --- | --- |
| `content/` | Your notes, canvas, and wikilinks |
| `quartz.config.yaml` | Site and plugin configuration |
| `quartz.ts` | Quartz config entrypoint (copied into the engine at build time) |
| `scripts/` | Submodule setup and build wrappers |
| `.quartz-engine/` | **Git submodule** — [jackyzha0/quartz](https://github.com/jackyzha0/quartz) (pinned commit on `v5`) |

Quartz engine source and npm dependencies live in the submodule and in `.quartz-engine/node_modules/` (not committed).

## Clone and preview

Node.js **22+** required.

```powershell
git clone --recurse-submodules https://github.com/dobbster/Extreme-Co-Design.git
cd Extreme-Co-Design
```

If you already cloned without submodules:

```powershell
git submodule update --init --recursive
```

Then build:

```powershell
$env:NODE_OPTIONS = "--use-system-ca"   # if npm reports certificate errors on Windows
npm run setup
npm run serve
```

Open `http://localhost:8080`. Edit `content/` in Obsidian (vault = `content/`, wikilinks **shortest**) or in Cursor.

`npm run setup` links `content/` into the engine, copies `quartz.config.yaml` / `quartz.ts`, and runs `npm ci` inside `.quartz-engine` when needed.

## Upgrade Quartz

```powershell
cd .quartz-engine
git fetch origin v5
git checkout v5        # or a specific commit / tag
cd ..
git add .quartz-engine
```

Then run `npm run setup` and verify with `npm run build`.

## For AI agents

See [AGENTS.md](AGENTS.md) for repository context, content conventions, and what to edit when working as the SME’s writing assistant.

## License

MIT — see [LICENSE](LICENSE).
