# MissignoDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**base_hp** | **number** |  | [optional] [default to undefined]
**base_attack** | **number** |  | [optional] [default to undefined]
**base_defense** | **number** |  | [optional] [default to undefined]
**base_special_attack** | **number** |  | [optional] [default to undefined]
**base_special_defense** | **number** |  | [optional] [default to undefined]
**base_speed** | **number** |  | [optional] [default to undefined]
**pc_sprite** | **string** |  | [optional] [default to undefined]
**type_list** | [**Set&lt;PokemonTypeDto&gt;**](PokemonTypeDto.md) |  | [optional] [default to undefined]
**ability_list** | [**Set&lt;AbilityDto&gt;**](AbilityDto.md) |  | [optional] [default to undefined]

## Example

```typescript
import { MissignoDto } from './api';

const instance: MissignoDto = {
    id,
    name,
    base_hp,
    base_attack,
    base_defense,
    base_special_attack,
    base_special_defense,
    base_speed,
    pc_sprite,
    type_list,
    ability_list,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
