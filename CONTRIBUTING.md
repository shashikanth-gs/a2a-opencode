# Contributing to a2a-opencode

Thank you for your interest in contributing! This project is open to contributions of all kinds — bug fixes, new features, documentation improvements, and example agents.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [Submitting Issues](#submitting-issues)
- [Submitting Pull Requests](#submitting-pull-requests)
- [Coding Standards](#coding-standards)
- [Versioning](#versioning)

## Code of Conduct

This project follows the [Contributor Covenant Code of Conduct](CODE_OF_CONDUCT.md). By participating, you agree to uphold its standards.

## Getting Started

1. **Fork** the repository on GitHub.
2. **Clone** your fork locally:
   ```bash
   git clone https://github.com/<your-username>/a2a-opencode.git
   cd a2a-opencode
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Build** to confirm everything compiles:
   ```bash
   npm run build
   ```

## Development Setup

```bash
# Compile TypeScript to dist/
npm run build

# Type-check without emitting
npm run typecheck

# Run in dev mode (no build step needed — requires OpenCode running on port 4096)
npm run dev -- --config agents/example/config.json

# Run tests
npm test

# Clean build artifacts
npm run clean
```

You need [OpenCode](https://opencode.ai) installed and running (`opencode serve`) for end-to-end testing. The wrapper will connect to it on `http://localhost:4096` by default.

## Submitting Issues

Before opening an issue, please **search existing issues** to avoid duplicates. When filing a bug report, include:

- `a2a-opencode` package version (`a2a-opencode --version`)
- Node.js version (`node --version`)
- OpenCode version (`opencode --version`)
- Operating system
- Minimal reproduction steps
- Observed vs. expected behaviour
- Relevant logs (set `LOG_LEVEL=debug`)

## Submitting Pull Requests

1. Create a branch from `main`:
   ```bash
   git checkout -b fix/short-description
   ```
2. Make your changes and ensure `npm run typecheck` passes.
3. Add or update tests for any changed behaviour.
4. Update `CHANGELOG.md` under `[Unreleased]` with a concise summary.
5. Open a pull request against `main` and fill in the PR template.

### Pull Request Guidelines

- **One logical change per PR.** Keep PRs focused and small.
- **Describe the problem and solution** in the PR description, not just what changed.
- **Link related issues** using `Closes #<number>`.
- CI must be green before a PR is merged.

## Coding Standards

- **TypeScript strict mode** is enforced. All code must pass `tsc --noEmit`.
- Follow the existing code style (no separate linter config — just consistent naming and formatting).
- New public API exports must be added to `src/index.ts`.
- Avoid adding runtime dependencies without discussion; prefer the Node.js standard library where possible.

## Versioning

This project follows [Semantic Versioning](https://semver.org/):

- **PATCH** (`1.0.x`) — backwards-compatible bug fixes
- **MINOR** (`1.x.0`) — new backwards-compatible features
- **MAJOR** (`x.0.0`) — breaking changes

Maintainers handle version bumps and npm releases.
