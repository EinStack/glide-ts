import {clientVersion, runtimeVersion} from "./version";

/**
 * TODO.
 */
export interface ClientOptions {
    /**
     * TODO.
     */
    apiKey?: string;

    /**
     * TODO.
     */
    baseUrl?: string | URL;

    /**
     * TODO.
     */
    userAgent?: string;
}


/**
 * TODO.
 */
export const defaultOptions: Required<ClientOptions> = {
    apiKey: "development",
    baseUrl: "http://localhost:9000",
    userAgent: `$Glide/${clientVersion} (TS; Ver ${runtimeVersion})`
}
