/**
 * Agent Card Builder
 *
 * Constructs an A2A AgentCard from the resolved AgentConfig.
 * Everything is driven by the config — no hardcoded agent details.
 */

import type { AgentCard } from "@a2a-js/sdk";
import type { AgentConfig, SkillConfig } from "../config/types.js";
import { logger } from "../utils/logger.js";

const log = logger.child("agent-card");

function mapSkill(skill: SkillConfig) {
  return {
    id: skill.id,
    name: skill.name,
    description: skill.description,
    tags: skill.tags ?? [],
    ...(skill.examples?.length ? { examples: skill.examples } : {}),
  };
}

export function buildAgentCard(config: Required<AgentConfig>): AgentCard {
  const { agentCard, server } = config;
  const host = server.advertiseHost ?? server.hostname ?? "localhost";
  const port = server.port ?? 3000;
  const baseUrl = `http://${host}:${port}`;

  const card: AgentCard = {
    name: agentCard.name,
    description: agentCard.description,
    url: `${baseUrl}/a2a/jsonrpc`,
    ...(agentCard.provider
      ? { provider: { organization: agentCard.provider.organization, url: agentCard.provider.url ?? "" } }
      : {}),
    version: agentCard.version ?? "2.0.0",
    capabilities: {
      streaming: agentCard.streaming ?? true,
      pushNotifications: agentCard.pushNotifications ?? false,
      stateTransitionHistory: agentCard.stateTransitionHistory ?? true,
    },
    protocolVersion: agentCard.protocolVersion ?? "0.3.0",
    skills: (agentCard.skills ?? []).map(mapSkill),
    defaultInputModes: agentCard.defaultInputModes ?? ["text"],
    defaultOutputModes: agentCard.defaultOutputModes ?? ["text"],
  };

  log.info("Agent card built", { name: card.name, url: baseUrl, skills: card.skills.length });
  return card;
}
