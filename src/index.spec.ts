import { describe, it } from "node:test";
import type { GlideClientOptions } from "./index";
import { GlideClient, GlideError } from "./index";

describe("index", () => {
	it("should re-export everything", async () => {
		const options: GlideClientOptions = {
			apiKey: "1234567890",
		};

		const client = new GlideClient(options);
		try {
			await client.health();
		} catch (error: unknown) {
			if (error instanceof GlideError) {
				console.error(`${error.kind}: ${error.message}`);
			} else if (error instanceof Error) {
				console.error(`${error.name}: ${error.message}`);
			}
		}
	});
});
