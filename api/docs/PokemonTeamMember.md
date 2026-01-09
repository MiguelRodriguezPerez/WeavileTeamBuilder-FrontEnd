# PokemonTeamMember


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**front_default_sprite** | **string** |  | [optional] [default to undefined]
**pc_sprite** | **string** |  | [optional] [default to undefined]
**base_hp** | **number** |  | [optional] [default to undefined]
**base_attack** | **number** |  | [optional] [default to undefined]
**base_defense** | **number** |  | [optional] [default to undefined]
**base_special_attack** | **number** |  | [optional] [default to undefined]
**base_special_defense** | **number** |  | [optional] [default to undefined]
**base_speed** | **number** |  | [optional] [default to undefined]
**hp_ev** | **number** |  | [optional] [default to undefined]
**attack_ev** | **number** |  | [optional] [default to undefined]
**defense_ev** | **number** |  | [optional] [default to undefined]
**special_attack_ev** | **number** |  | [optional] [default to undefined]
**special_defense_ev** | **number** |  | [optional] [default to undefined]
**speed_ev** | **number** |  | [optional] [default to undefined]
**hp_iv** | **number** |  | [optional] [default to undefined]
**attack_iv** | **number** |  | [optional] [default to undefined]
**defense_iv** | **number** |  | [optional] [default to undefined]
**special_attack_iv** | **number** |  | [optional] [default to undefined]
**special_defense_iv** | **number** |  | [optional] [default to undefined]
**speed_iv** | **number** |  | [optional] [default to undefined]
**move_list** | [**Set&lt;MoveData&gt;**](MoveData.md) |  | [optional] [default to undefined]
**ability** | [**AbilityData**](AbilityData.md) |  | [optional] [default to undefined]
**item** | [**ItemData**](ItemData.md) |  | [optional] [default to undefined]
**team_member_type_list** | [**Set&lt;PokemonType&gt;**](PokemonType.md) |  | [optional] [default to undefined]
**tera_type** | [**PokemonType**](PokemonType.md) |  | [optional] [default to undefined]
**nature** | [**NatureData**](NatureData.md) |  | [optional] [default to undefined]

## Example

```typescript
import { PokemonTeamMember } from './api';

const instance: PokemonTeamMember = {
    id,
    name,
    front_default_sprite,
    pc_sprite,
    base_hp,
    base_attack,
    base_defense,
    base_special_attack,
    base_special_defense,
    base_speed,
    hp_ev,
    attack_ev,
    defense_ev,
    special_attack_ev,
    special_defense_ev,
    speed_ev,
    hp_iv,
    attack_iv,
    defense_iv,
    special_attack_iv,
    special_defense_iv,
    speed_iv,
    move_list,
    ability,
    item,
    team_member_type_list,
    tera_type,
    nature,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
