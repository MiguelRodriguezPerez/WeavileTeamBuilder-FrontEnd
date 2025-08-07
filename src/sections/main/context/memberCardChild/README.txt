MemberCardChildContext sirve para aplicar una sombra al hijo de SelectedMemberMenu seleccionado
(el campo del pokemón con el que el usuario esta interactuando). La idea es informar al usuario
de manera gráfica que campo del pokemón esta manipulando y evitar que esa sombra desaparezca
si el usuario interactúa con el grid de turno (MoveGrid, ItemGrid...)

Para lograr esto creaste un contexto que usa un enum que contiene valores que referencian a los
posibles hijos de SelectedMemberMenu que pueden ser seleccionados por el usuario y por tanto a los que
se les puede aplicar la sombra.

Luego creaste un provider que tenía un estado con un valor de ese enum y pasaste el valor del estado
y el setter que cambia el valor del estado

¿Porque todo este rollo?

La manera correcta de aplicar clases css (según chatgpt) es mediante renders condicionales.
Para decidir si aplicas la sombra a un nodo primero pones un evento en el nodo para que al hacer click
en el, el enum del estado cambie de valor al que referencia el nodo en el que hiciste click.
Luego se pone un render condicional que aplique la sombra si el enum del estado coincide con el del nodo
en el que se ha hecho click.

¿Porque no manipular el css directamente con js?
Según chatgpt, react explotará si haces eso.