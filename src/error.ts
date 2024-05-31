/**
 * Error that may occur during the processing of API request.
 */
export interface ErrorResponse {
	name: string;
	message: string;
}

/**
 * Error that may occur during the processing of API request.
 */
export class GlideError extends Error {
	readonly #name: string;
	readonly #statusCode: number;

	/**
	 * Instantiates a new error.
	 */
	constructor(response: ErrorResponse, statusCode: number) {
		super(response.message);
		this.#name = response.name;
		this.#statusCode = statusCode;
	}

	/**
	 * Returns the error name.
	 */
	get kind(): string {
		return this.#name;
	}

	/**
	 * Returns the retrieved HTTP status code.
	 */
	get status(): number {
		return this.#statusCode;
	}
}
