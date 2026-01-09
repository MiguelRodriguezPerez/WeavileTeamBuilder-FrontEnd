# PokemonDataApi

All URIs are relative to *http://localhost:9002*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**allSVPokemon**](#allsvpokemon) | **GET** /pokemonData/allSVPokemon | Retrieve all available pokemon in sv|
|[**getPokemonByName**](#getpokemonbyname) | **GET** /pokemonData/getPokemonByName/{name} | Get pokemonData by name|

# **allSVPokemon**
> Array<PokemonData> allSVPokemon()

Returns a list of pokemon data which are available in pokemon sv

### Example

```typescript
import {
    PokemonDataApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PokemonDataApi(configuration);

const { status, data } = await apiInstance.allSVPokemon();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<PokemonData>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**404** | Not Found |  -  |
|**200** | Successful request with all pokemon data |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getPokemonByName**
> getPokemonByName()

Request a certain pokemonData by name

### Example

```typescript
import {
    PokemonDataApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PokemonDataApi(configuration);

let name: string; // (default to undefined)

const { status, data } = await apiInstance.getPokemonByName(
    name
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **name** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**404** | There are not any entities that match the parameter given |  -  |
|**200** | Succesfully retrieved pokemon |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

