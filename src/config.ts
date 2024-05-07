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
	apiKey?: string;

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

/**
 * TODO.
 */
export const defaultOptions = {
	baseUrl: "http://127.0.0.1:9099/",
	userAgent: `Glide/${clientVersion} (TS; Ver. ${runtimeVersion})`,
};
