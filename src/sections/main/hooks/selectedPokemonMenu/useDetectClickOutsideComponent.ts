import { useContext, useEffect } from "react";
import { MemberCardChildContext } from "../../context/memberCardChild";

/* Este hook tiene por objetivo quitar la sombra del hijo de MemberCard seleccionado si 
el usuario hace click fuera de dicho componente */

export const useDetectClickOutsideEvent = (ref: React.RefObject<HTMLElement | null>) => {

    /* Callback del contexto que quita la sombra */
    const { setSelectedChildEnum } = useContext(MemberCardChildContext)!;

    /* El efecto se aplica cuando cambie el nodo que se desea controlar si se hace click en el */
    useEffect(() => {

        /* Callback para gestionar el click del usuario. Si el nodo seleccionado por el usuario
        no es hijo de MemberCard quitará la sombra */
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) setSelectedChildEnum(null);
        }
        /* mousedown controla cuando el usuario pulsa el botón del ratón (no confundir con click ya que 
        este evento se dispara antes de levantar el dedo). Este evento es más rápido que onClick y evita petardeos
        
        Al fijar este callback para dicho evento esta controlando si se hace click en un padre de MemberCard*/
        document.addEventListener("mousedown", handleClickOutside);

        /* Cuando se desrenderice MemberCard debes desmontar el evento */
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}

