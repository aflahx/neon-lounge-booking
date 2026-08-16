import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { events } from "@/data/site";

export default defineTool({
  name: "list_events",
  title: "List events and offers",
  description:
    "List the recurring event formats and offer types at Blackout Gaming Cafe (game nights, tournaments, group events, seasonal offers).",
  inputSchema: {},
  outputSchema: {
    events: z.array(z.object({ title: z.string(), description: z.string() })),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(events, null, 2) }],
    structuredContent: { events },
  }),
});
