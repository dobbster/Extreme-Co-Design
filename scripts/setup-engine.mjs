import { execSync } from "node:child_process"
import {
  cpSync,
  existsSync,
  lstatSync,
  rmSync,
  symlinkSync,
} from "node:fs"
import { dirname, join, resolve } from "node:path"
import { fileURLToPath } from "node:url"

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..")
const engine = join(root, ".quartz-engine")
const engineMarker = join(engine, "quartz", "bootstrap-cli.mjs")

export function setupEngine() {
  if (!existsSync(engineMarker)) {
    execSync("git submodule update --init --recursive .quartz-engine", {
      cwd: root,
      stdio: "inherit",
    })
  }

  for (const file of ["quartz.config.yaml", "quartz.ts"]) {
    cpSync(join(root, file), join(engine, file), { force: true })
  }

  linkDirectory(join(root, "content"), join(engine, "content"))

  if (!existsSync(join(engine, "node_modules"))) {
    execSync("npm ci", {
      cwd: engine,
      stdio: "inherit",
      env: process.env,
    })
  }

  if (!existsSync(join(engine, "node_modules", "@quartz-themes", "default"))) {
    execSync("npm install @quartz-themes/default@^1.0.1", {
      cwd: engine,
      stdio: "inherit",
      env: process.env,
    })
  }

  try {
    execSync("npm approve-scripts esbuild", {
      cwd: engine,
      stdio: "ignore",
      env: process.env,
    })
  } catch {
    // optional on first install
  }
}

function linkDirectory(targetPath, linkPath) {
  const absoluteTarget = resolve(targetPath)
  if (existsSync(linkPath)) {
    const stat = lstatSync(linkPath)
    if (stat.isSymbolicLink() || stat.isDirectory()) {
      rmSync(linkPath, { recursive: true, force: true })
    }
  }
  const type = process.platform === "win32" ? "junction" : "dir"
  symlinkSync(absoluteTarget, linkPath, type)
}

const isMain =
  process.argv[1] &&
  resolve(process.argv[1]) === fileURLToPath(import.meta.url)

if (isMain) {
  setupEngine()
}
