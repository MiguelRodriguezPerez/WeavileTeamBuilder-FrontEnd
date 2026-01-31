# PokemonDataApi

All URIs are relative to *http://localhost:9002*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**allMissignoGridPokemonDto**](#allmissignogridpokemondto) | **GET** /pokemonData/allMissignoGridPokemonDto | Retrieve all available pokemon for MissignoCard|
|[**getPokemonDataById**](#getpokemondatabyid) | **GET** /pokemonData/getPokemonById/{id} | Get pokemonData by id using JDBC|

# **allMissignoGridPokemonDto**
> Array<MissignoDto> allMissignoGridPokemonDto()

Returns a list of pokemon data which are available in pokemon sv

### Example

```typescript
import {
    PokemonDataApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PokemonDataApi(configuration);

const { status, data } = await apiInstance.allMissignoGridPokemonDto();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<MissignoDto>**

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

# **getPokemonDataById**
> getPokemonDataById()

Request all data about a pokemom (related entities too) using JDBC by id

### Example

```typescript
import {
    PokemonDataApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PokemonDataApi(configuration);

let id: number; // (default to undefined)

const { status, data } = await apiInstance.getPokemonDataById(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] |  | defaults to undefined|


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

