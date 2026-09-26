import { spawnSync } from "node:child_process"
import { dirname, join, resolve } from "node:path"
import { fileURLToPath } from "node:url"
import { setupEngine } from "./setup-engine.mjs"

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..")
const engine = join(root, ".quartz-engine")
const quartzArgs = process.argv.slice(2)

setupEngine()

spawnSync("npx", ["tsx", "./quartz/plugins/loader/install-plugins.ts"], {
  cwd: engine,
  stdio: "inherit",
  shell: true,
  env: process.env,
})

const build = spawnSync(
  "node",
  ["./quartz/bootstrap-cli.mjs", ...quartzArgs],
  { cwd: engine, stdio: "inherit", env: process.env },
)

process.exit(build.status ?? 1)
