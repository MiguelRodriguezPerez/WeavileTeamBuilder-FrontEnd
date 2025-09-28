En este proyecto se combina PokemonType con PokemonTypeEnum, ¿Por que?

Porque originalmente el atributo PokemonType era un enum en movimiento y pokemón,
pero luego decidiste cambiarlo para que fuera una entidad en el lado servidor, pensando que
en un futuro mapearías las debilides, resistencias y demás, pero el problema es que no sabes
mapear relaciones en la propia entidad (Ej: depto empleados -> jefe dto) y sigues necesitando
los helpers que te dan las compatibilidades de tipos que se basan en enums que usan los componentes
de TypeSummary.

Si ves typeEnum en una entidad, echa a temblar