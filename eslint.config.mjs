import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";

export default defineConfig([
  ...nextVitals,
  globalIgnores([".next/**", ".open-next/**", ".wrangler/**", ".worker-files/**", "out/**", "hiram-portfolio-ui/**", "node_modules_corrupted/**"]),
]);
