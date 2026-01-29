import type { AxiosInstance, AxiosPromise, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
import type { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, createRequestFunction, setSearchParams, toPathString } from '../common';
import type { RequestArgs } from '../base';
// @ts-ignore
import { BASE_PATH, BaseAPI, RequiredError, operationServerMap } from '../base';
import { MissignoDTO } from '../../src/sections/main/components/selectedPokemonMenu/missignoMenu/MissignoDTO';
import { PokemonDataDto } from '../../src/domain/dataEntities';


export const PokemonDataApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Returns a list of pokemon data which are available in pokemon sv
         * @summary Retrieve all available pokemon for MissignoCard
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        allMissignoGridPokemonDto: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/pokemonData/allMissignoGridPokemonDto`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarHeaderParameter['Accept'] = '*/*';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Request all data about a pokemom (related entities too) using JDBC by id
         * @summary Get pokemonData by id using JDBC
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPokemonDataById: async (id: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getPokemonDataById', 'id', id)
            const localVarPath = `/pokemonData/getPokemonById/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarHeaderParameter['Accept'] = '*/*';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };

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
export const PokemonDataApiFp = function (configuration?: Configuration) {
    const localVarAxiosParamCreator = PokemonDataApiAxiosParamCreator(configuration)
    return {
        /**
         * Returns a list of pokemon data which are available in pokemon sv
         * @summary Retrieve all available pokemon for MissignoCard
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async allMissignoGridPokemonDto(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<MissignoDTO>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.allMissignoGridPokemonDto(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PokemonDataApi.allMissignoGridPokemonDto']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Request all data about a pokemom (related entities too) using JDBC by id
         * @summary Get pokemonData by id using JDBC
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getPokemonDataById(id: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PokemonDataDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPokemonDataById(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PokemonDataApi.getPokemonDataById']?.[localVarOperationServerIndex]?.url;
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
         * @summary Retrieve all available pokemon for MissignoCard
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        allMissignoGridPokemonDto(options?: RawAxiosRequestConfig): AxiosPromise<Array<MissignoDTO>> {
            return localVarFp.allMissignoGridPokemonDto(options).then((request) => request(axios, basePath));
        },
        /**
         * Request all data about a pokemom (related entities too) using JDBC by id
         * @summary Get pokemonData by id using JDBC
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPokemonDataById(id: number, options?: RawAxiosRequestConfig): AxiosPromise<PokemonDataDto> {
            return localVarFp.getPokemonDataById(id, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * PokemonDataApi - object-oriented interface
 */
export class PokemonDataApi extends BaseAPI {
    /**
     * Returns a list of pokemon data which are available in pokemon sv
     * @summary Retrieve all available pokemon for MissignoCard
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public allMissignoGridPokemonDto(options?: RawAxiosRequestConfig) {
        return PokemonDataApiFp(this.configuration).allMissignoGridPokemonDto(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Request all data about a pokemom (related entities too) using JDBC by id
     * @summary Get pokemonData by id using JDBC
     * @param {number} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public getPokemonDataById(id: number, options?: RawAxiosRequestConfig) {
        return PokemonDataApiFp(this.configuration).getPokemonDataById(id, options).then((request) => request(this.axios, this.basePath));
    }
}