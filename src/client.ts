import { ClientConfig, type ClientOptions } from "./config";
import { Language, type LanguageSvc } from "./language";

/**
 * A minimal `EinStack` `Glide` client.
 *
 * @link https://www.einstack.ai/
 */
export class Client {
	readonly #config: ClientConfig;
	readonly #language: LanguageSvc;

	/**
	 * Constructs a new `EinStack` `Glide` client.
	 *
	 * @param options Client options, override environment variables.
	 *
	 * @link https://www.einstack.ai/
	 */
	constructor(options?: ClientOptions) {
		this.#config = new ClientConfig();
		this.#language = new Language(this.#config);
	}

	/**
	 * Returns the provided `API key`.
	 *
	 * Use `ClientOption` or env variable `GLIDE_API_KEY` to override.
	 */
	get apiKey(): string | null {
		return this.#config.apiKey;
	}

	/**
	 * Returns the used base `URL`.
	 *
	 * Use `ClientOption` or env variable `GLIDE_BASE_URL` to override.
	 */
	get baseUrl(): URL {
		return this.#config.baseUrl;
	}

	/**
	 * Returns the used `User-Agent` header value.
	 *
	 * Use `ClientOption` or env variable `GLIDE_USER_AGENT` to override.
	 */
	get userAgent(): string {
		return this.#config.userAgent;
	}

	/**
	 * APIs for `/v1/language` endpoints.
	 */
	get language(): LanguageSvc {
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
