import { defineTool } from "@lovable.dev/mcp-js";
import { events } from "@/data/site";

export default defineTool({
  name: "list_events",
  title: "List events and offers",
  description:
    "List the recurring event formats and offer types at Blackout Gaming Cafe (game nights, tournaments, group events, seasonal offers).",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(events, null, 2) }],
    structuredContent: { events },
  }),
});
