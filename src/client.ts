import {type ClientOptions, defaultOptions} from "./config";


/**
 * TODO.
 */
class Client {
    #apiKey: string;
    #baseUrl: string | URL;
    #userAgent: string;

    constructor(options?: ClientOptions) {
        this.#apiKey = options?.apiKey || defaultOptions.apiKey;
        this.#baseUrl = options?.baseUrl || defaultOptions.baseUrl;
        this.#userAgent = options?.userAgent || defaultOptions.userAgent;
    }

    /**
     * TODO.
     */
    async health(): Promise<void> {
        return
    }
}
