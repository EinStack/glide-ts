import { describe, it } from "node:test";
import { type ErrorResponse, GlideError } from "./error";
import { equal, ok } from "node:assert";

const throwUnknownError = (): never => {
	const response: ErrorResponse = {
		name: "unknown",
		message: "reason",
	};

	throw new GlideError(response, 500);
};

describe("error", () => {
	it("should be constructable", () => {
		try {
			throwUnknownError();
		} catch (error: unknown) {
			ok(error instanceof Error);
			ok(error instanceof GlideError);
		}
	});

	it("should include response data", () => {
		try {
			throwUnknownError();
		} catch (error: unknown) {
			ok(error instanceof GlideError);
			equal(error.kind, "unknown");
			equal(error.message, "reason");
			equal(error.status, 500);
		}
	});
});
