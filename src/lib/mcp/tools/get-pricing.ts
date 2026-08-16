import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { pricingFootnote, pricingPlans } from "@/data/site";

export default defineTool({
  name: "get_pricing",
  title: "Get pricing",
  description:
    "Get the current hourly gaming rates for single, duo and squad sessions at Blackout Gaming Cafe.",
  inputSchema: {},
  outputSchema: {
    currency: z.string(),
    footnote: z.string(),
    plans: z.array(
      z.object({
        id: z.string(),
        title: z.string(),
        players: z.number(),
        price: z.number(),
        originalPrice: z.number().nullable(),
        unit: z.string(),
        label: z.string(),
        note: z.string().nullable(),
      }),
    ),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const payload = {
      currency: "INR",
      footnote: pricingFootnote,
      plans: pricingPlans.map((plan) => ({
        id: plan.id,
        title: plan.title,
        players: plan.players,
        price: plan.price,
        originalPrice: plan.originalPrice ?? null,
        unit: plan.unit,
        label: plan.label,
        note: plan.note ?? null,
      })),
    };
    return {
      content: [{ type: "text", text: JSON.stringify(payload, null, 2) }],
      structuredContent: payload,
    };
  },
});
