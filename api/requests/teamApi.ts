import type { AxiosInstance, AxiosPromise, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
import type { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, createRequestFunction, setSearchParams, toPathString } from '../common';
import type { RequestArgs } from '../base';
// @ts-ignore
import { PokemonTeam } from '../../src/domain/teamMemberEntities/PokemonTeam';
import { BASE_PATH, BaseAPI, RequiredError, operationServerMap } from '../base';


/**
 * PokemonTeamApi - axios parameter creator
 */
export const PokemonTeamApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Requests to create a new pokemon team. Will retrieve an empty team if succesfull
         * @summary Create a new pokemon team
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createNewTeam: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/nonLoggedUsers/pokemonTeam/createNewTeam`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
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
 * PokemonTeamApi - functional programming interface
 */
export const PokemonTeamApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = PokemonTeamApiAxiosParamCreator(configuration)
    return {
        /**
         * Requests to create a new pokemon team. Will retrieve an empty team if succesfull
         * @summary Create a new pokemon team
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createNewTeam(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PokemonTeam>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createNewTeam(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PokemonTeamApi.createNewTeam']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * PokemonTeamApi - factory interface
 */
export const PokemonTeamApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = PokemonTeamApiFp(configuration)
    return {
        /**
         * Requests to create a new pokemon team. Will retrieve an empty team if succesfull
         * @summary Create a new pokemon team
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createNewTeam(options?: RawAxiosRequestConfig): AxiosPromise<PokemonTeam> {
            return localVarFp.createNewTeam(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * PokemonTeamApi - object-oriented interface
 */
export class PokemonTeamApi extends BaseAPI {
    /**
     * Requests to create a new pokemon team. Will retrieve an empty team if succesfull
     * @summary Create a new pokemon team
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createNewTeam(options?: RawAxiosRequestConfig) {
        return PokemonTeamApiFp(this.configuration).createNewTeam(options).then((request) => request(this.axios, this.basePath));
    }
}