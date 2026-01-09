# MoveData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**move_type** | **string** |  | [optional] [default to undefined]
**power** | **number** |  | [optional] [default to undefined]
**accuracy** | **number** |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**pp** | **number** |  | [optional] [default to undefined]
**pokemon_type** | [**PokemonType**](PokemonType.md) |  | [optional] [default to undefined]
**pokemon_list** | [**Set&lt;PokemonData&gt;**](PokemonData.md) |  | [optional] [default to undefined]
**pokemon_team_list** | [**Set&lt;PokemonTeamMember&gt;**](PokemonTeamMember.md) |  | [optional] [default to undefined]

## Example

```typescript
import { MoveData } from './api';

const instance: MoveData = {
    id,
    name,
    move_type,
    power,
    accuracy,
    description,
    pp,
    pokemon_type,
    pokemon_list,
    pokemon_team_list,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
