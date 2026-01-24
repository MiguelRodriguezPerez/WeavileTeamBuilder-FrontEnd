import type { AxiosInstance, AxiosPromise, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
import type { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import type { RequestArgs } from './base';
import { DUMMY_BASE_URL, assertParamExists, createRequestFunction, setSearchParams, toPathString } from '../common';
// @ts-ignore
import { BASE_PATH, BaseAPI, RequiredError, operationServerMap } from '../base';
import { MissignoDTO } from '../../src/sections/main/components/selectedPokemonMenu/missignoMenu/MissignoDTO';



/**
 * PokemonDataApi - axios parameter creator
 */
export const PokemonDataApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Returns a list of pokemon data which are available in pokemon sv
         * @summary Retrieve all available pokemon in sv
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        allPokemon: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/pokemonData/allMissignoGridPokemonDto`;
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
         * Request a certain pokemonData by name
         * @summary Get pokemonData by name
         * @param {string} name 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPokemonByName: async (name: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('getPokemonByName', 'name', name)
            const localVarPath = `/pokemonData/getPokemonByName/{name}`
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
 * PokemonDataApi - functional programming interface
 */
export const PokemonDataApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = PokemonDataApiAxiosParamCreator(configuration)
    return {
        /**
         * Returns a list of pokemon data which are available in pokemon sv
         * @summary Retrieve all available pokemon in sv
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async allSVPokemon(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<MissignoDTO>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.allPokemon(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PokemonDataApi.allSVPokemon']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Request a certain pokemonData by name
         * @summary Get pokemonData by name
         * @param {string} name 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getPokemonByName(name: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPokemonByName(name, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PokemonDataApi.getPokemonByName']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * PokemonDataApi - factory interface
 */
export const PokemonDataApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = PokemonDataApiFp(configuration)
    return {
        /**
         * Returns a list of pokemon data which are available in pokemon sv
         * @summary Retrieve all available pokemon in sv
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        allSVPokemon(options?: RawAxiosRequestConfig): AxiosPromise<Array<MissignoDTO>> {
            return localVarFp.allSVPokemon(options).then((request) => request(axios, basePath));
        },
        /**
         * Request a certain pokemonData by name
         * @summary Get pokemonData by name
         * @param {string} name 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPokemonByName(name: string, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.getPokemonByName(name, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * PokemonDataApi - object-oriented interface
 */
export class PokemonDataApi extends BaseAPI {
    /**
     * Returns a list of pokemon data which are available in pokemon sv
     * @summary Retrieve all available pokemon in sv
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public allSVPokemon(options?: RawAxiosRequestConfig) {
        return PokemonDataApiFp(this.configuration).allSVPokemon(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Request a certain pokemonData by name
     * @summary Get pokemonData by name
     * @param {string} name 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public getPokemonByName(name: string, options?: RawAxiosRequestConfig) {
        return PokemonDataApiFp(this.configuration).getPokemonByName(name, options).then((request) => request(this.axios, this.basePath));
    }
}
