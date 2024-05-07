import type { HttpClient } from "./client.ts";

/**
 * TODO.
 */
export interface ChatRequest {}

/**
 * TODO.
 */
export interface ChatResponse {}

/**
 * TODO.
 */
export interface ChatStream {}

/**
 * TODO.
 */
export interface ErrorResponse {}

export class GlideError extends Error {
	constructor() {
		super();
	}
}

/**
 * TODO.
 */
export type Result<T> = { response: T } | { error: ErrorResponse };

/**
 * APIs for `/v1/language` endpoints.
 */
export interface LanguageSvc {
	/**
	 * Retrieves a list of all router configs.
	 *
	 * `GET /v1/language`
	 */
	list(): Promise<unknown[]>;

	/**
	 * Sends a single chat request to a specified router and retrieves the response.
	 *
	 * `POST /v1/language/{router}/chat`
	 */
	chat(router: string, request: ChatRequest): Promise<ChatResponse>;

	/**
	 * Establishes a WebSocket connection for streaming chat messages from a specified router.
	 *
	 * `GET /v1/language/{router}/chatStream`
	 */
	chatStream(router: string, callbacks: ChatStream): Promise<void>;
}

export class Language implements LanguageSvc {
	#client: HttpClient;

	constructor(client: HttpClient) {
		this.#client = client;
	}

	async list(): Promise<unknown[]> {
		throw new Error("Not implemented.");
	}

	async chat(router: string, request: ChatRequest): Promise<ChatResponse> {
		throw new Error("Not implemented.");
	}

	async chatStream(router: string, callbacks: ChatStream): Promise<void> {
		throw new Error("Not implemented.");
	}
}
