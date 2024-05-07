import type { HttpClient } from "./client";

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

/**
 * TODO.
 */
export class GlideError extends Error {
	constructor() {
		super();
	}
}

type Result<T> = { response: T } | { error: ErrorResponse };

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
		// TODO: list().
		throw new Error("Not implemented.");
	}

	async chat(router: string, request: ChatRequest): Promise<ChatResponse> {
		// TODO: chat().
		throw new Error("Not implemented.");
	}

	async chatStream(router: string, callbacks: ChatStream): Promise<void> {
		// TODO: chatStream().
		throw new Error("Not implemented.");
	}
}
