# CRUDPokemonTeamsApi

All URIs are relative to *http://localhost:9002*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createNewTeam**](#createnewteam) | **POST** /nonLoggedUsers/pokemonTeam/createNewTeam | Create a new pokemon team|

# **createNewTeam**
> PokemonTeam createNewTeam()

Requests to create a new pokemon team. Will retrieve an empty team if succesfull

### Example

```typescript
import {
    CRUDPokemonTeamsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CRUDPokemonTeamsApi(configuration);

const { status, data } = await apiInstance.createNewTeam();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**PokemonTeam**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**404** | Not Found |  -  |
|**201** | Returns an empty pokemon team |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

