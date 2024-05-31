import { describe, it } from "node:test";
import { ok } from "node:assert";
import { Client } from "./client";

describe("client", () => {
	it("should be constructable without options", () => {
		const client = new Client();

		ok(client.baseUrl);
		ok(client.userAgent);
	});

	it("should be constructable with options", () => {
		const client = new Client({
			apiKey: "testing",
			userAgent: "Einstack/1.0",
		});

		ok(client.baseUrl);
		ok(client.apiKey);
		ok(client.userAgent);
	});

	it("should be healthy", async () => {
		const client = new Client();
		const healthy = await client.health();

		ok(healthy);
	});
});
