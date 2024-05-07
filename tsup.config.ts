import { defineConfig } from "tsup";

export default defineConfig({
	entry: ["./src/**/*.ts", "!src/**/*.spec.ts"],
	format: ["esm", "cjs"],
	target: "node18",

	dts: true,
	treeshake: true,
	bundle: false,
});
