/**
 * ItemApi - axios parameter creator
 */
export const ItemApiAxiosParamCreator = function (configuration?: Configuration) {
        /**
         * Returns an item using an string as parameter
         * @summary Get item by name
         * @param {string} itemName The item name to search
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getItemByName: async (itemName: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'itemName' is not null or undefined
            assertParamExists('getItemByName', 'itemName', itemName)
            const localVarPath = `/itemData/getItemByName/{itemName}`
                .replace(`{${"itemName"}}`, encodeURIComponent(String(itemName)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarHeaderParameter['Accept'] = '*/*';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    
};

/**
 * ItemApi - functional programming interface
 */
export const ItemApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ItemApiAxiosParamCreator(configuration)
    return {
        
        /**
         * Returns an item using an string as parameter
         * @summary Get item by name
         * @param {string} itemName The item name to search
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getItemByName(itemName: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ItemDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getItemByName(itemName, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ItemApi.getItemByName']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * ItemApi - factory interface
 */
export const ItemApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ItemApiFp(configuration)
    return {

        /**
         * Returns an item using an string as parameter
         * @summary Get item by name
         * @param {string} itemName The item name to search
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getItemByName(itemName: string, options?: RawAxiosRequestConfig): AxiosPromise<ItemDto> {
            return localVarFp.getItemByName(itemName, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ItemApi - object-oriented interface
 */
export class ItemApi extends BaseAPI {

    /**
     * Returns an item using an string as parameter
     * @summary Get item by name
     * @param {string} itemName The item name to search
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public getItemByName(itemName: string, options?: RawAxiosRequestConfig) {
        return ItemApiFp(this.configuration).getItemByName(itemName, options).then((request) => request(this.axios, this.basePath));
    }
}