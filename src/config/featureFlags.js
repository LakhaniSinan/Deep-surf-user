// Feature flags centralized for the app.
// Toggle `VITE_ENABLE_CLAUDE_HAIKU_45` in your Vite env (.env) to enable/disable.

export const ENABLE_CLAUDE_HAIKU_45 = (
  import.meta?.env?.VITE_ENABLE_CLAUDE_HAIKU_45 ?? "true"
) === "true";

export default {
  ENABLE_CLAUDE_HAIKU_45,
};
