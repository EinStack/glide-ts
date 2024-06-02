import { describe, it } from "node:test";
import { equal, ok } from "node:assert";
import { GlideClient } from "./client";

describe("language service", () => {
	const router = "myrouter";

	it("should be constructable", () => {
		const client = new GlideClient();
		ok(client.language);
	});

	it("should correctly list routers", async () => {
		const client = new GlideClient();
		const routers = await client.language.list();
		equal(routers.length, 1);
	});

	it("should correctly chat", async () => {
		const client = new GlideClient();
		const request = {};
		const response = await client.language.chat(router, request);
	});

	it("should correctly stream chat", async () => {
		const client = new GlideClient();
		const callbacks = {};
		await client.language.chatStream(router, callbacks);
	});
});
