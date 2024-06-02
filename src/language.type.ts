/** All router configurations. */
export interface RouterConfigs {
	/* List of all available routers. */
	routers: RouterConfig[];
}

/** Single router configuration. */
// TODO: Type it.
export type RouterConfig = unknown;

/**
 * Unified chat request across all language models.
 */
export interface ChatRequest {
	message: ChatMessage;
	message_history?: ChatMessage[];
	override_params?: ChatRequestOverride;
}

/** Content and role of the message. */
export interface ChatMessage {
	/** The content of the message. */
	content: string;

	/**
	 * The name of the author of this message.
	 *
	 * May contain a-z, A-Z, 0-9, and underscores,
	 * with a maximum length of 64 characters.
	 */
	name?: string;

	/**
	 * The role of the author of this message.
	 *
	 * One of system, user, or assistant.
	 * TODO: Make it optional.
	 */
	role: "user" | "system" | "assistant";
}

/** Override of a single chat request. */
export interface ChatRequestOverride {
	message: ChatMessage;
	model_id: string;
}

/** Unified chat response across all language models. */
export interface ChatResponse {
	cached?: boolean;
	created_at?: number;
	id?: string;
	model_id?: string;
	model_name?: string;
	model_response?: ModelResponse;
	provider_id?: string;
	router_id?: string;
}

/** Unified response from the provider. */
export interface ModelResponse {
	message: ChatMessage;
	metadata?: Record<string, string>;
	token_count: TokenUsage;
}

/** Prompt, response and total token usage. */
export interface TokenUsage {
	prompt_tokens: number;
	response_tokens: number;
	total_tokens: number;
}

/**
 * TODO. Streaming callbacks.
 */
export interface ChatStream {}
