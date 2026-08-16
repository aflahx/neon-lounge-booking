import { defineMcp } from "@lovable.dev/mcp-js";
import buildBookingRequestTool from "./tools/build-booking-request";
import getCafeInfoTool from "./tools/get-cafe-info";
import getPricingTool from "./tools/get-pricing";
import listEventsTool from "./tools/list-events";

export default defineMcp({
  name: "neon-nights-gateway",
  title: "Neon Nights Gateway",
  version: "0.1.0",
  instructions:
    "Public tools for Blackout Gaming Cafe (Kochi). Use `get_cafe_info` for location and hours, `get_pricing` for hourly rates, `list_events` for event formats and offers, and `build_booking_request` to generate a WhatsApp booking request link. Bookings are confirmed only by the cafe over WhatsApp.",
  tools: [getCafeInfoTool, getPricingTool, listEventsTool, buildBookingRequestTool],
});
