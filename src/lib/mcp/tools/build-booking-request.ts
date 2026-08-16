import { defineTool, ToolError } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { pricingPlans, site, whatsappLink } from "@/data/site";

export default defineTool({
  name: "build_booking_request",
  title: "Build booking request",
  description:
    "Build a ready-to-send WhatsApp booking request link for a gaming session. Bookings are only confirmed once the cafe replies on WhatsApp — this tool does not reserve a slot.",
  inputSchema: {
    players: z.number().int().min(1).max(4).describe("Number of players (1, 2 or 4)."),
    date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Use YYYY-MM-DD").describe("Session date."),
    time: z.string().min(1).describe("Preferred start time, e.g. '07:00 PM'."),
  },
  annotations: { readOnlyHint: true, openWorldHint: false },
  handler: ({ players, date, time }) => {
    const plan =
      pricingPlans.find((p) => p.players === players) ??
      pricingPlans.reduce((a, b) => (b.players <= players && b.players > a.players ? b : a));
    if (!plan) throw new ToolError("No pricing plan available for that number of players.");

    const message = `Hi ${site.name}! I'd like to request a gaming session.
Players: ${players}
Date: ${date}
Time: ${time}
Rate: ₹${plan.price} ${plan.unit}
(Sent via assistant — please confirm availability.)`;

    const payload = {
      players,
      date,
      time,
      plan: plan.title,
      ratePerHour: plan.price,
      whatsappUrl: whatsappLink(message),
      note: "Slot is only confirmed after the cafe replies on WhatsApp.",
    };

    return {
      content: [{ type: "text", text: JSON.stringify(payload, null, 2) }],
      structuredContent: payload,
    };
  },
});
