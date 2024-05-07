import { defineConfig } from "tsup";

export default defineConfig({
	entry: ["src", "!src/**/*.spec.*"],
	platform: "node",
	format: "esm",
	target: "esnext",
	dts: true,

	treeshake: "recommended",
	sourcemap: true,
	bundle: false,
});
