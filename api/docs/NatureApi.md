# NatureApi

All URIs are relative to *http://localhost:9002*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getAllNatures**](#getallnatures) | **GET** /natureData/getAllNatures | Get all natures|
|[**getNatureByName**](#getnaturebyname) | **GET** /natureData/getNatureByName/{name} | Get a nature by name parameter|

# **getAllNatures**
> Array<NatureData> getAllNatures()

Get a list with all pokemon natures

### Example

```typescript
import {
    NatureApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new NatureApi(configuration);

const { status, data } = await apiInstance.getAllNatures();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<NatureData>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**404** | Not Found |  -  |
|**200** | Nature list successfully retrieved |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getNatureByName**
> NatureData getNatureByName()

Returns a nature based on string parameter

### Example

```typescript
import {
    NatureApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new NatureApi(configuration);

let name: string; // (default to undefined)

const { status, data } = await apiInstance.getNatureByName(
    name
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **name** | [**string**] |  | defaults to undefined|


### Return type

**NatureData**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**404** | There are not any entities that match the parameter given |  -  |
|**200** | Nature successfully retrieved |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

