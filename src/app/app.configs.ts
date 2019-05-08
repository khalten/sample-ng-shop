import { environment } from '../environments/environment';

export const Config = {
    apiVersion: environment.API_VERSION,
    apiScheme: environment.API_SCHEME,
    apiDomain: environment.API_DOMAIN,
    apiProductImageUrl: environment.API_PRODUCT_IMAGE_URL,
    toApiUrl(path) {
        return `${this.apiScheme}://${this.apiDomain}/${path}`;
    }
};