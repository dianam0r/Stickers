import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  image: {
    domains: ["localhost:1337"],
    base: "/",
  },
});
