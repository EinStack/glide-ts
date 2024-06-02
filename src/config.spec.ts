import { describe, it } from "node:test";
import { ok } from "node:assert";
import { type GlideClientOptions, tryEnvironment } from "./config";

describe("config", () => {
	it("should return valid options", () => {
		const options: GlideClientOptions = tryEnvironment();

		ok(options.baseUrl);
		ok(options.userAgent);
	});
});
