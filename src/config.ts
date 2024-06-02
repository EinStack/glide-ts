import { ErrorResponse, GlideError } from "./error";

/**
 * The current version of this client.
 */
export const clientVersion = "0.1.0";

// TODO: Read runtime version.

/**
 * The used version of the runtime.
 */
export const runtimeVersion = "16.0";

/**
 * Options for {@link GlideClient }.
 *
 * Overrides environment variables.
 */
export interface GlideClientOptions {
	/**
	 * Attaches an optional `API key`.
	 *
	 * Overrides environment variable `GLIDE_API_KEY`.
	 */
	apiKey?: string | null;

	/**
	 * Overrides the default `base url`: `http://127.0.0.1:9099/`.
	 * or environment variable `GLIDE_BASE_URL`.
	 */
	baseUrl?: string | URL;

	/**
	 * Overrides the default `User-Agent` header: `Glide/0.1.0 (TS; Ver. 16.0)`.
	 * or environment variable `GLIDE_USER_AGENT`.
	 */
	userAgent?: string;
}

/**
 * Attempts to construct {@link GlideClientOptions} from environment variables.
 *
 * Returns default {@link GlideClientOptions} otherwise.
 */
export function tryEnvironment(): Required<GlideClientOptions> {
	const options: Required<GlideClientOptions> = {
		apiKey: null,
		baseUrl: "http://127.0.0.1:9099/",
		userAgent: `Glide/${clientVersion} (TS; Ver. ${runtimeVersion})`,
	};

	const env = (globalThis as any).process?.env;
	if (typeof env !== "object" && env !== null) {
		return options;
	}

	if (typeof env["GLIDE_API_KEY"] === "string") {
		options.apiKey = env["GLIDE_API_KEY"];
	}

	if (typeof env["GLIDE_BASE_URL"] === "string") {
		options.baseUrl = env["GLIDE_BASE_URL"];
	}

	if (typeof env["GLIDE_USER_AGENT"] === "string") {
		options.apiKey = env["GLIDE_USER_AGENT"];
	}

	return options;
}

/**
 * TODO.
 */
export class ClientConfig {
	readonly apiKey: string | null;
	readonly baseUrl: URL;
	readonly userAgent: string;

	/**
	 * Instantiates a new {@link ClientConfig} with provided options.
	 */
	constructor(options?: GlideClientOptions) {
		const env = tryEnvironment();
		this.apiKey = options?.apiKey || env.apiKey;
		this.baseUrl = new URL(options?.baseUrl || env.baseUrl);
		this.userAgent = options?.userAgent || env.userAgent;
	}

	/**
	 * TODO.
	 *
	 * @throws GlideError
	 */
	async fetch<T = unknown>(
		method: string,
		path: string,
		data?: unknown,
	): Promise<T> {
		const input = new URL(path, this.baseUrl);
		const headers = new Headers({
			Accept: "application/json",
			"Content-Type": "application/json",
			userAgent: this.userAgent,
		});

		if (this.apiKey !== null) {
			headers.set("Authorization", "Bearer " + this.apiKey);
		}

		const response = await fetch(input, {
			body: JSON.stringify(data),
			method,
			headers,
		});

		if (response.ok) {
			return (await response.json()) as T;
		} else {
			const content = (await response.json()) as ErrorResponse;
			throw new GlideError(content, response.status);
		}
	}
}
