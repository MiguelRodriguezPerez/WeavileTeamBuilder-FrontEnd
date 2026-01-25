# ItemApi

All URIs are relative to *http://localhost:9002*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getAllItems**](#getallitems) | **GET** /itemData/allItems | Get all items|
|[**getItemByName**](#getitembyname) | **GET** /itemData/getItemByName/{itemName} | Get item by name|

# **getAllItems**
> Array<ItemDto> getAllItems()

Returns a list with all items

### Example

```typescript
import {
    ItemApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ItemApi(configuration);

const { status, data } = await apiInstance.getAllItems();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<ItemDto>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**404** | Not Found |  -  |
|**200** | Items successfully retrieved |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getItemByName**
> ItemDto getItemByName()

Returns an item using an string as parameter

### Example

```typescript
import {
    ItemApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ItemApi(configuration);

let itemName: string; //The item name to search (default to undefined)

const { status, data } = await apiInstance.getItemByName(
    itemName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **itemName** | [**string**] | The item name to search | defaults to undefined|


### Return type

**ItemDto**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**404** | There are not any entities that match the parameter given |  -  |
|**200** | Item succesfully obtained |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

