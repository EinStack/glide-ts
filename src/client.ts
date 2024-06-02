import { ClientConfig, type GlideClientOptions } from "./config";
import { type Language, LanguageService } from "./language";

/**
 * A minimal `EinStack` `Glide` client.
 *
 * @link https://www.einstack.ai/
 */
export class GlideClient {
	readonly #config: ClientConfig;
	readonly #language: Language;

	/**
	 * Constructs a new `EinStack` `Glide` client.
	 *
	 * @param options Client options, override environment variables.
	 *
	 * @link https://www.einstack.ai/
	 */
	constructor(options?: GlideClientOptions) {
		this.#config = new ClientConfig(options);
		this.#language = new LanguageService(this.#config);
	}

	/**
	 * Returns the provided `API key`.
	 */
	get apiKey(): string | null {
		return this.#config.apiKey;
	}

	/**
	 * Returns the used base `URL`.
	 */
	get baseUrl(): URL {
		return this.#config.baseUrl;
	}

	/**
	 * Returns the used `User-Agent` header value.
	 */
	get userAgent(): string {
		return this.#config.userAgent;
	}

	/**
	 * APIs for `/v1/language` endpoints.
	 */
	get language(): Language {
		return this.#language;
	}

	/**
	 * Returns `true` if the service is healthy.
	 *
	 * `GET /v1/health`
	 *
	 * @throws GlideError
	 */
	async health(): Promise<boolean> {
		const response = await this.#config.fetch<{
			healthy: boolean;
		}>("GET", "/v1/health");

		return response.healthy;
	}
}
