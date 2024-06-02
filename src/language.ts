import type { ClientConfig } from "./config";
import type {
	ChatRequest,
	ChatResponse,
	ChatStream,
	RouterConfigs,
} from "./language.type";

/**
 * APIs for `/v1/language` endpoints.
 */
export interface Language {
	/**
	 * Retrieves a list of all router configs.
	 *
	 * `GET /v1/language`
	 */
	list(): Promise<RouterConfigs>;

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

export class LanguageService implements Language {
	#client: ClientConfig;

	constructor(client: ClientConfig) {
		this.#client = client;
	}

	async list(): Promise<RouterConfigs> {
		return await this.#client.fetch<RouterConfigs>("GET", "/v1/list");
	}

	async chat(router: string, data: ChatRequest): Promise<ChatResponse> {
		const path = `/v1/language/${router}/chat`;
		return await this.#client.fetch<ChatResponse>("POST", path, data);
	}

	async chatStream(router: string, callbacks: ChatStream): Promise<void> {
		const path = `/v1/language/${router}/chatStream`;
		const _ = await this.#client.fetch("GET", path);

		// TODO: chatStream().
		throw new Error("Not implemented.");
	}
}
