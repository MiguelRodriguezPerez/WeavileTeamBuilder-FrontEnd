# PokemonData


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
**front_default_sprite** | **string** |  | [optional] [default to undefined]
**pc_sprite** | **string** |  | [optional] [default to undefined]
**type_list** | [**Set&lt;PokemonType&gt;**](PokemonType.md) |  | [optional] [default to undefined]
**ability_list** | [**Set&lt;AbilityData&gt;**](AbilityData.md) |  | [optional] [default to undefined]
**move_list** | [**Set&lt;MoveData&gt;**](MoveData.md) |  | [optional] [default to undefined]
**availableInSv** | **boolean** |  | [optional] [default to undefined]

## Example

```typescript
import { PokemonData } from './api';

const instance: PokemonData = {
    id,
    name,
    base_hp,
    base_attack,
    base_defense,
    base_special_attack,
    base_special_defense,
    base_speed,
    front_default_sprite,
    pc_sprite,
    type_list,
    ability_list,
    move_list,
    availableInSv,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
