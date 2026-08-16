import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { site } from "@/data/site";

export default defineTool({
  name: "get_cafe_info",
  title: "Get cafe info",
  description:
    "Get Blackout Gaming Cafe's location, opening hours, phone, WhatsApp and Instagram details.",
  inputSchema: {},
  outputSchema: {
    name: z.string(),
    tagline: z.string(),
    city: z.string(),
    address: z.string(),
    hours: z.string(),
    phone: z.string(),
    whatsapp: z.string(),
    instagram: z.string(),
    maps: z.string(),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const info = {
      name: site.name,
      tagline: site.tagline,
      city: site.city,
      address: site.address,
      hours: site.hours,
      phone: site.phone,
      whatsapp: `https://wa.me/${site.whatsappNumber}`,
      instagram: site.instagramUrl,
      maps: site.mapsUrl,
    };
    return {
      content: [{ type: "text", text: JSON.stringify(info, null, 2) }],
      structuredContent: info,
    };
  },
});
