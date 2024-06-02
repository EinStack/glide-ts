import { describe, it } from "node:test";
import { ok } from "node:assert";
import type { ChatRequest, ChatStream } from "./index";
import { GlideClient } from "./index";

describe("language service", () => {
	const router = "myrouter";

	it("should be constructable", () => {
		const client = new GlideClient();
		ok(client.language);
	});

	it("should correctly list routers", async () => {
		const client = new GlideClient();
		const routerList = await client.language.list();
		ok(routerList.routers.length > 1);
	});

	it("should correctly chat", async () => {
		const client = new GlideClient();
		const request: ChatRequest = {
			message: {
				content: "Hello there!",
				role: "user",
			},
		};

		const response = await client.language.chat(router, request);
		ok(response.model_response);
		ok(response.model_response.message);
	});

	it("should correctly stream chat", async () => {
		const client = new GlideClient();
		const callbacks: ChatStream = {};
		await client.language.chatStream(router, callbacks);
	});
});
