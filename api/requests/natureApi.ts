import type { AxiosInstance, AxiosPromise, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
import type { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import type { RequestArgs } from './base';
import { DUMMY_BASE_URL, assertParamExists, createRequestFunction, setSearchParams, toPathString } from '../common';
// @ts-ignore
import { NatureDto } from '../../src/domain/teamMemberEntities/NatureDto';
import { BASE_PATH, BaseAPI, operationServerMap } from '../base';

/**
 * NatureApi - axios parameter creator
 */
export const NatureApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Get a list with all pokemon natures
         * @summary Get all natures
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllNatures: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/natureData/getAllNatures`;
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
        /**
         * Returns a nature based on string parameter
         * @summary Get a nature by name parameter
         * @param {string} name 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getNatureByName: async (name: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('getNatureByName', 'name', name)
            const localVarPath = `/natureData/getNatureByName/{name}`
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
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
    }
};

/**
 * NatureApi - functional programming interface
 */
export const NatureApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = NatureApiAxiosParamCreator(configuration)
    return {
        /**
         * Get a list with all pokemon natures
         * @summary Get all natures
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAllNatures(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<NatureDto>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllNatures(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['NatureApi.getAllNatures']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns a nature based on string parameter
         * @summary Get a nature by name parameter
         * @param {string} name 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getNatureByName(name: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<NatureDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getNatureByName(name, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['NatureApi.getNatureByName']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * NatureApi - factory interface
 */
export const NatureApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = NatureApiFp(configuration)
    return {
        /**
         * Get a list with all pokemon natures
         * @summary Get all natures
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllNatures(options?: RawAxiosRequestConfig): AxiosPromise<Array<NatureDto>> {
            return localVarFp.getAllNatures(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a nature based on string parameter
         * @summary Get a nature by name parameter
         * @param {string} name 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getNatureByName(name: string, options?: RawAxiosRequestConfig): AxiosPromise<NatureDto> {
            return localVarFp.getNatureByName(name, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * NatureApi - object-oriented interface
 */
export class NatureApi extends BaseAPI {
    /**
     * Get a list with all pokemon natures
     * @summary Get all natures
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public getAllNatures(options?: RawAxiosRequestConfig) {
        return NatureApiFp(this.configuration).getAllNatures(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a nature based on string parameter
     * @summary Get a nature by name parameter
     * @param {string} name 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public getNatureByName(name: string, options?: RawAxiosRequestConfig) {
        return NatureApiFp(this.configuration).getNatureByName(name, options).then((request) => request(this.axios, this.basePath));
    }
}