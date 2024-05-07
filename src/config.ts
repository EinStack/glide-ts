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
 * TODO.
 */
export interface ClientOptions {
	/**
	 * Attaches an `api key`.
	 */
	apiKey?: string | null;

	/**
	 * Overrides default `base url`:
	 * `http://127.0.0.1:9099/`.
	 */
	baseUrl?: string | URL;

	/**
	 * Overrides default `User-Agent` header:
	 * `Glide/0.1.0 (TS; Ver. 16.0)`
	 */
	userAgent?: string;
}

export const tryEnvVariables = (): Required<ClientOptions> => {
	const defaultClientOptions: Required<ClientOptions> = {
		apiKey: null,
		baseUrl: "http://127.0.0.1:9099/",
		userAgent: `Glide/${clientVersion} (TS; Ver. ${runtimeVersion})`,
	};

	const variables: Record<string, unknown> = (globalThis as any).process?.env;
	if (!variables) return defaultClientOptions;

	if (typeof variables["GLIDE_API_KEY"] === "string") {
		defaultClientOptions.apiKey = variables["GLIDE_API_KEY"];
	}

	if (typeof variables["GLIDE_BASE_URL"] === "string") {
		defaultClientOptions.baseUrl = variables["GLIDE_BASE_URL"];
	}

	if (typeof variables["GLIDE_USER_AGENT"] === "string") {
		defaultClientOptions.apiKey = variables["GLIDE_USER_AGENT"];
	}

	return defaultClientOptions;
};
