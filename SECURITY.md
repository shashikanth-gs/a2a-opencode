# Security Policy

## Supported Versions

| Version | Supported |
|---------|-----------|
| 1.x     | ✅        |

## Reporting a Vulnerability

**Please do not report security vulnerabilities through public GitHub issues.**

If you discover a security vulnerability in this project, please report it privately to:

**Email:** 124822098+shashikanth-gs@users.noreply.github.com

Or use [GitHub's private vulnerability reporting](https://github.com/shashikanth-gs/a2a-opencode/security/advisories/new) feature.

### What to Include

- A description of the vulnerability
- Steps to reproduce
- Potential impact
- Any suggested mitigations (optional)

### Response Timeline

- We will acknowledge your report within **48 hours**
- We aim to triage and provide an initial assessment within **5 business days**
- We will notify you when a fix is released

We appreciate responsible disclosure and will credit reporters in the release notes unless anonymity is requested.

## Security Considerations

This package acts as an HTTP server. When deploying:

- **Do not expose the A2A server port to the public internet** without authentication/firewall rules unless intentional.
- **Protect your OpenCode API keys** — never commit them to source control. Use environment variables or a secrets manager.
- **Review MCP server URLs** configured in `config.json` — the wrapper forwards tool calls to those endpoints.
- **Use the `advertiseHost` config** to control what hostname is embedded in the agent card served to A2A clients.
- **Permission handling** — the wrapper auto-approves tool calls by default. Set `--no-auto-approve` in sensitive environments.
