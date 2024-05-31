import { describe, it } from "node:test";
import { ok } from "node:assert";
import { type ClientOptions, tryEnvironment } from "./config";

describe("config", () => {
	it("should return valid options", () => {
		const options: ClientOptions = tryEnvironment();

		ok(options.baseUrl);
		ok(options.userAgent);
	});
});
