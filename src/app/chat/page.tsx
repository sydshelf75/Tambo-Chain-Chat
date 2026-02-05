"use client";

import { MessageThreadFull } from "@/components/tambo/message-thread-full";
import { useMcpServers } from "@/components/tambo/mcp-config-modal";
import { components, tools } from "@/lib/tambo";
import { TamboProvider } from "@tambo-ai/react";

/**
 * Home page component that renders the Tambo chat interface.
 *
 * @remarks
 * The API key is kept server-side and requests are proxied through /api/tambo.
 * This prevents the API key from being exposed in the browser.
 */
export default function Home() {
  // Load MCP server configurations
  const mcpServers = useMcpServers();

  return (
    <TamboProvider
      apiKey="proxied"
      components={components}
      tools={tools}
      tamboUrl="/api/tambo"
      mcpServers={mcpServers}
    >
      <div className="h-screen">
        <MessageThreadFull />
      </div>
    </TamboProvider>
  );
}
