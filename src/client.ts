import { type ClientOptions, defaultOptions } from "./config";
import { Language, type LanguageSvc } from "./language";

/**
 * TODO.
 */
export interface HttpClient {}

/**
 * A minimal `EinStack` `Glide` client.
 *
 * @link https://www.einstack.ai/
 */
export class Client {
	readonly #apiKey: string | null;
	readonly #baseUrl: string | URL;
	readonly #userAgent: string;
	readonly #language: LanguageSvc;

	/**
	 * Constructs a new `EinStack` `Glide` client.
	 *
	 * @link https://www.einstack.ai/
	 */
	constructor(options?: ClientOptions) {
		this.#apiKey = options?.apiKey || null;
		this.#baseUrl = options?.baseUrl || defaultOptions.baseUrl;
		this.#userAgent = options?.userAgent || defaultOptions.userAgent;
		this.#language = new Language(this);
	}

	/**
	 * Returns the provided `API key`.
	 */
	get apiKey(): string | null {
		return this.#apiKey;
	}

	/**
	 * Returns the used base `URL`.
	 */
	get baseUrl(): string {
		return this.#baseUrl.toString();
	}

	/**
	 * Returns the used `User-Agent` header value.
	 */
	get userAgent(): string {
		return this.#userAgent;
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
	 */
	async health(): Promise<boolean> {
		// TODO.
		return true;
	}
}
